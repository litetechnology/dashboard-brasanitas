import { AiOutlinePlus, AiOutlineFontColors, AiOutlineInfoCircle, AiOutlineSecurityScan} from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import {toast} from 'react-toastify';

import formatDate from '../../services/formatDate';
import Navinfo from '../../components/navinfo';
import Button from '../../components/button';
import Layout from '../../components/layout';
import Table from '../../components/table';
import Input from '../../components/input';
import { EditContainer } from './styles';
import api from '../../services/api';

const Book = () => {
  const [data, setData] = useState({titles: ['nome', 'descrição', 'atividades', 'data de criação'], response:[],values:[]});
  const [updated, setUpdated] = useState(false);
  const [onEdit, setOnEdit] = useState(false);  

    const getBook = async () => {
      try {

        var response = await api.get('/segurance/');
        response = response.data;
        setData({...data, values: response.map(x => [x.name, x.description, x?.questions?.length || 0 , formatDate(x.date)]), response: response.map(x => x)})
     
      } catch (e) {
        toast.error("Erro interno ao puxar locais")
      }
    };

    const deleteLocal = async (question) => {
      try {
    
        const response = await toast.promise(
          api.delete('/segurance/delete', { data: { id: question._id } }),
          {
            pending: 'Apagando questão',
            success: 'Questão apagado com sucesso',
            error: 'Erro interno ao apagar questão'
          }
        );
        getBook();

      } catch (e) {
        //console.log(e);
      }
    };

    const copyLocalId = (id) => {
      navigator.clipboard.writeText(id);
      toast.success('ID copiado com sucesso');
    };
    

    const CreateAndEdit = () => {
      const [name, setName] = useState('');  
      const [description, setDescription] = useState('');  
      const [observation, setObservation] = useState('');  
      var update = typeof onEdit != 'boolean';
      if (!updated && update) setInput(onEdit.name) & setUpdated(true);

      const sendData = async () => {
        try {
            if (update) {

              const response = await toast.promise(
                api.put('/local/update', { id: onEdit._id, data: { name: input } }),
                {
                  pending: 'Atualizando local',
                  success: 'Local atualizado com sucesso',
                  error: 'Erro interno ao atualizar local'
                }
              );

            } else {

              const response = await toast.promise(
                api.post('/segurance/create', { name, description, observation }),
                {
                  pending: 'Salvando questão',
                  success: 'Questão salva com sucesso',
                  error: 'Erro interno ao salvar questão'
                }
              );

            }
            getBook();
            setUpdated(false);
            setOnEdit(false);
            setName("");
            setDescription("");
            setObservation("");
          
        } catch (e) {
          //console.log(e)
        }
      }

      return (
        <EditContainer>
            <Input Icon={AiOutlineFontColors} placeholder='Identificador da questão' value={name} onInput={(x) => setName(x)} />
            <Input Icon={AiOutlineInfoCircle} placeholder='Descrição da questão' value={description} onInput={(x) => setDescription(x)} />
            <Input Icon={AiOutlineSecurityScan} placeholder='Observações' value={observation} onInput={(x) => setObservation(x)} />
            <div className="buttons">
              <Button center name='CANCELAR' onButton={() => setOnEdit(false)}/>
              <Button center name={update ? 'ATUALIZAR' : 'CRIAR'} onButton={sendData}/>
            </div>
        </EditContainer>
      )
    }

    useEffect(() => {
      getBook()
    }, [])

    return (
        <Layout initialSelect='Book'>
            <Navinfo name={'Book'} subname={'questões'} size={data?.values?.length} buttonName={'Nova questão'} Icon={AiOutlinePlus} onButton={() => setOnEdit(true) & setInput("")}/>
            {
              !onEdit ? <Table width="100%" data={data} onMenu={({type, index}) => {
                var currentData = data.response[index]
                switch(type){
                  case 'edit':
                    setOnEdit(currentData);
                  break
                  case 'delete':
                    deleteLocal(currentData);
                  break
                  case 'copy':
                    copyLocalId(currentData?._id);
                  break

                }
              }}/> : <CreateAndEdit/>
            }
        </Layout>
    )
}

export default Book