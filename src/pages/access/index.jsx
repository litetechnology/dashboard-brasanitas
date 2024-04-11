import { AiOutlinePlus, AiOutlineUser, AiOutlineRetweet} from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import {toast} from 'react-toastify';

import formatDate from '../../services/formatDate';
import Navinfo from '../../components/navinfo';
import Button from '../../components/button';
import Layout from '../../components/layout';
import Table from '../../components/table';
import Input from '../../components/input';

import { EditContainer, } from './styles';
import api from '../../services/api';

const Equipe = () => {
  const [data, setData] = useState({titles: ['nome', 'data de criação', 'convite'], response:[],values:[]});
  const [onEdit, setOnEdit] = useState(false);  


    const getUsers = async () => {
      try {

        var response = await api.get('/auth/users');
        response = response.data;
        setData({
          ...data,
          values: response.map(item => {
            const name = item.name;
            const creationDate = formatDate(item.date);
            const daysSinceCreation = calculateDaysSinceCreation(item.date);
            return [name, creationDate, window.location.origin + '/invite/' + item._id];
          }),
          response: response
        });
        
        function calculateDaysSinceCreation(creationDate) {
          const createdDate = new Date(creationDate);
          const today = new Date();
          const differenceInMs = today.getTime() - createdDate.getTime();
          const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
        
          return differenceInDays;
        }
        
        
     
      } catch (e) {
        console.log(e)
        toast.error("Erro interno ao puxar acessos")
      }
    };

    const deleteUser = async (user) => {
      try {
    
        const response = await toast.promise(
          api.delete('/users/delete', { data: { id: user._id } }),
          {
            pending: 'Apagando acesso',
            success: 'Acesso apagado com sucesso',
            error: 'Erro interno ao apagar acesso'
          }
        );
        getUsers();

      } catch (e) {
        //console.log(e);
      }
    };

    const copyUserId = (id) => {
      navigator.clipboard.writeText(id);
      toast.success('ID copiado com sucesso');
    };
    

    const CreateAndEdit = () => {
      const [validateSize, setValidateSize] = useState('');
      const [updated, setUpdated] = useState(false);
      const [name, setName] = useState('');  

      var update = typeof onEdit != 'boolean';

      if (!updated && update){
         setName(onEdit.name)
         setValidateSize(onEdit.validateSize)
         setUpdated(true);  
      }
      const sendData = async () => {
        try {
            if (update) {

              const response = await toast.promise(
                api.put('/auth/update', { id: onEdit._id, data: { name: name, validateSize: validateSize ? validateSize : 0 } }),
                {
                  pending: 'Atualizando acesso',
                  success: 'Acesso atualizado com sucesso',
                  error: 'Erro interno ao atualizar acesso'
                }
              );

            } else {
              const response = await toast.promise(
                api.post('/auth/create', { name: name, flags:[], validateSize: validateSize ? validateSize : 0}),
                {
                  pending: 'Salvando acesso',
                  success: 'Acesso salvo com sucesso',
                  error: 'Erro interno ao salvar acesso'
                }
              );

            }
            getUsers();
            setUpdated(false);
            setOnEdit(false);
            setName("");
          
        } catch (e) {
          //console.log(e)
        }
      }

      return (
        <EditContainer>

           
            <Input Icon={AiOutlineUser} placeholder='Nome do convidado' value={name} onInput={(x) => setName(x)} />
            <Input Icon={AiOutlineRetweet} placeholder='Expiração do acesso, 0 por padrão' value={validateSize} onInput={(x) => setValidateSize(x)} />
            <div className="buttons">
              <Button center name='CANCELAR' onButton={() => setOnEdit(false)}/>
              <Button center name={update ? 'ATUALIZAR' : 'CRIAR'} onButton={sendData}/>
            </div>
        </EditContainer>
      )
    }

    useEffect(() => {
      getUsers()
    }, [])

    return (
        <Layout initialSelect='acesso'>
            <Navinfo name={'Acessos'} subname={'acesos (s)'} size={data?.values?.length} buttonName={'Novo acessos'} Icon={AiOutlinePlus} onButton={() => setOnEdit(true)}/>
            {
              !onEdit ? <Table width="100%" data={data} onMenu={({type, index}) => {
                var currentData = data.response[index]
                switch(type){
                  case 'edit':
                    setOnEdit(currentData);
                  break
                  case 'delete':
                    deleteUser(currentData);
                  break
                  case 'copy':
                    copyUserId(currentData?._id);
                  break

                }
              }}/> : <CreateAndEdit/>
            }
        </Layout>
    )
}

export default Equipe