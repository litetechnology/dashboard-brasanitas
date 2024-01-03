import React, { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineFontColors} from 'react-icons/ai'
import Navinfo from '../../components/navinfo';
import Layout from '../../components/layout';
import { Container, EditContainer } from './styles';
import Table from '../../components/table';
import Input from '../../components/input';
import Button from '../../components/button';
import api from '../../services/api';
import {toast} from 'react-toastify'
import formatDate from '../../services/formatDate';
const Local = () => {
  const [updated, setUpdated] = useState(false);
  const [onEdit, setOnEdit] = useState(false);  
  const [input, setInput] = useState('');  
  const [data, setData] = useState({
    titles: ['nome', 'data de criação'],
    response:[],
    values:[]
  });

    const getLocals = async () => {
      try {
        var response = await api.get('/local/');
        response = response.data;
       setData({...data, values: response.map(x => [x.name, formatDate(x.date)]), response: response.map(x => x)})
      } catch (e) {
        toast.error("Erro interno ao puxar locais")
      }
    };

    const deleteLocal = async (local) => {
      try {
        console.log(local._id);
    
        const response = await toast.promise(
          api.delete('/local/delete', { data: { id: local._id } }), // Passando o ID no corpo da requisição
          {
            pending: 'Apagando local',
            success: 'Local apagado com sucesso',
            error: 'Erro interno ao apagar local'
          }
        );
    
        getLocals();
      } catch (e) {
        console.log(e);
      }
    };
    

    const CreateAndEdit = () => {

      var update = typeof onEdit != 'boolean'
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
                api.post('/local/create', { name: input }),
                {
                  pending: 'Salvando local',
                  success: 'Local salvo com sucesso',
                  error: 'Erro interno ao salvar local'
                }
              );
              
            }
            getLocals();
            setUpdated(false)
            setOnEdit(false);
            setInput("");
          
        } catch (e) {
          //console.log(e)
        }
      }

      return (
        <EditContainer>
            <Input Icon={AiOutlineFontColors} placeholder='Nome do local' value={input} onInput={(x) => setInput(x)} />
            <div className="buttons">
              <Button center name='CANCELAR' onButton={() => setOnEdit(false)}/>
              <Button center name={update ? 'ATUALIZAR' : 'CRIAR'} onButton={sendData}/>
            </div>
        </EditContainer>
      )
    }

    useEffect(() => {
      getLocals()
    }, [])

    return (
        <Layout initialSelect='Locais'>
            <Navinfo name={'Locais'} subname={'locais'} size={data?.values?.length} buttonName={'Novo local'} Icon={AiOutlinePlus} onButton={() => setOnEdit(true) & setInput("")}/>
            {
              !onEdit ? <Table width="100%" data={data} onMenu={(x) => {
                if (x.type == 'edit') setOnEdit(data.response[x.index]);
                if (x.type == 'delete') deleteLocal(data.response[x.index]);
                if (x.type == 'copy'){
                  navigator.clipboard.writeText(data.response[x.index]._id)
                  toast.success('ID copiado com sucesso')
                }
              }}/> : <CreateAndEdit/>
            }
        </Layout>
    )
}

export default Local