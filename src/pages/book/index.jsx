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

import CreateAndEdit from './edit';

const Book = () => {
  const [data, setData] = useState({titles: ['nome', 'descrição', 'atividades', 'data de criação'], response:[],values:[]});
  const [onEdit, setOnEdit] = useState(false);  
  const [onQuestion, setOnQuestion] = useState(false);  

    const getBook = async () => {
      try {

        var response = await api.get('/segurance/');
        response = response.data;
        setData({...data, values: response.map(x => [x.name, x.description, x?.questions?.length || 0 , formatDate(x.date)]), response: response.map(x => x)})
     
      } catch (e) {
        toast.error("Erro interno ao puxar questões")
      }
    };

    const deleteQuestion = async (question) => {
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
        toast.error("Erro interno ao deletar questão")
      }
    };

    const copyQuestionId = (id) => {
      navigator.clipboard.writeText(id);
      toast.success('ID copiado com sucesso');
    };
    
    const createQuestion = async (data) => {
      try {
        return await toast.promise(
          api.post('/segurance/create', data),
          {
            pending: 'Salvando questão',
            success: 'Questão salva com sucesso',
            error: 'Erro interno ao salvar questão'
          }
        );
      } catch (e){
        toast.error("Erro interno ao criar questão")    
      }
    }

    const updateQuestion = async (data) => {
      try {
        return await toast.promise(
          api.post('/segurance/create', data),
          {
            pending: 'Salvando questão',
            success: 'Questão salva com sucesso',
            error: 'Erro interno ao salvar questão'
          }
        ); 
      } catch (e){
        toast.error("Erro interno ao atualizar questão")    
      }
    }

    const CreateAndEdit3 = () => {
      const [name, setName] = useState('');  
      const [description, setDescription] = useState('');  
      const [observation, setObservation] = useState('');  
      const [updated, setUpdated] = useState(false);


      return (
        <EditContainer>
            <Input Icon={AiOutlineFontColors} placeholder='Identificador da questão' value={name} onInput={(x) => setName(x)} />
            <Input Icon={AiOutlineInfoCircle} placeholder='Descrição da questão' value={description} onInput={(x) => setDescription(x)} />
            <Input Icon={AiOutlineSecurityScan} placeholder='Observações' value={observation} onInput={(x) => setObservation(x)} />
            <div className="buttons">
              <Button center name='CANCELAR' onButton={() => setOnEdit(false)}/>
              <Button center name={onEdit?.name ? 'ATUALIZAR' : 'CRIAR'} onButton={sendData}/>
            </div>
        </EditContainer>
      )
    }




    useEffect(() => {
      getBook()
    }, [])

    return (
        <Layout initialSelect='Book'>
            <Navinfo 
              onButton={() => setOnEdit({data:null, update:false, createQuestion, updateQuestion})}
              size={data?.values?.length}
              buttonName={'Nova questão'} 
              subname={'questões'}
              Icon={AiOutlinePlus} 
              name={'Book'} 
            />

            {
              onEdit != false ?  <CreateAndEdit {...onEdit} onBack={() => setOnEdit(false)}/> : onQuestion == false  ?<Table width="100%" data={data} 
              onRow={(index) => setOnQuestion(data.response[index])}
              onMenu={({type, index}) => {
                var currentData = data.response[index]
                switch(type){
                  case 'edit':
                    setOnEdit({data: currentData, update:true, createQuestion, updateQuestion});
                  break
                  case 'delete':
                    deleteQuestion(currentData);
                  break
                  case 'copy':
                    copyQuestionId(currentData?._id);
                  break

                }

              }}/>  : <></>
            }
        </Layout>
    )
}

export default Book