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
  const [data, setData] = useState({titles: ['nome', 'data de criação', 'valido durante', 'expira em'], response:[],values:[]});
  const [onEdit, setOnEdit] = useState(false);  


    const getUsers = async () => {
      try {

        var response = await api.get('/users/');
        response = response.data;
        setData({
          ...data,
          values: response.map(item => {
            const name = item.name;
            const creationDate = formatDate(item.date);
            const daysSinceCreation = calculateDaysSinceCreation(item.date);
            return [name, creationDate, item.validateSize == 0 ? '' : `${item.validateSize} dias`, item.validateSize == 0 ? 'não expira' : `${item.validateSize - daysSinceCreation} dias`];
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
        toast.error("Erro interno ao puxar locais")
      }
    };

    const deleteUser = async (user) => {
      try {
    
        const response = await toast.promise(
          api.delete('/users/delete', { data: { id: user._id } }),
          {
            pending: 'Apagando funcionário',
            success: 'Funcionário apagada com sucesso',
            error: 'Erro interno ao apagar funcionário'
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
                api.put('/users/update', { id: onEdit._id, data: { name: name, validateSize: validateSize ? validateSize : 0 } }),
                {
                  pending: 'Atualizando funcionário',
                  success: 'Funcionário atualizado com sucesso',
                  error: 'Erro interno ao atualizar funcionário'
                }
              );

            } else {
              const response = await toast.promise(
                api.post('/users/create', { name: name, validateSize: validateSize ? validateSize : 0}),
                {
                  pending: 'Salvando funcionário',
                  success: 'Funcionário salvo com sucesso',
                  error: 'Erro interno ao salvar funcionário'
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

           
            <Input Icon={AiOutlineUser} placeholder='Nome do funcionário' value={name} onInput={(x) => setName(x)} />
            <Input Icon={AiOutlineRetweet} placeholder='Expiração do funcionário, 0 por padrão' value={validateSize} onInput={(x) => setValidateSize(x)} />
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
        <Layout initialSelect='Equipe'>
            <Navinfo name={'Equipe'} subname={'funcionário (s)'} size={data?.values?.length} buttonName={'Novo funcionário'} Icon={AiOutlinePlus} onButton={() => setOnEdit(true)}/>
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