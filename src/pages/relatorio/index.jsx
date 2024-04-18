import { AiOutlinePlus } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

import { Box, Question, LabelContainer, Value, BoxContainer} from './styles';
import formatDate from '../../services/formatDate';
import Navinfo from '../../components/navinfo';
import Button from '../../components/button';
import Layout from '../../components/layout';
import api from '../../services/api';
import Table from '../../components/table';

const Relatorio = () => {
  const [data, setData] = useState(null);
  const [table, setTable] = useState({titles: ['ordem', 'atividades dentro do cronograma', 'atividades fora do cronograma', 'equipamentos', 'placa', 'responsavel', 'data'], values:[]})
  const navigate = useNavigate()
    const getForm = async () => {
      try {

        var response = await api.get('/form/');
        response = response.data;
        setData(response)
        var tableData = response.map((x,i) => [i+1, x.actions.join(),  x.forActions?.join(), x.tool?.join(), x.plate?.name,  x.user, formatDate(x.date, false)])
        setTable({...table, values: tableData})
     
      } catch (e) {
        toast.error("Erro interno ao puxar relatórios")
      }
    };

    useEffect(() => {
      getForm()
    }, [])

    return (
        <Layout initialSelect='Relatório'>
            <Navinfo name={'Relatório'} subname={'relatório (s)'} size={data?.length} buttonName={'Preencher formulario'} Icon={AiOutlinePlus} onButton={() =>navigate('/formulario')}/>
            <BoxContainer>
            <Table width="100%" data={table} onMenu={() => {}}/>
              </BoxContainer>

        </Layout>
    )
}

export default Relatorio