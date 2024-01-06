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

const Relatorio = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate()
    const getLocals = async () => {
      try {

        var response = await api.get('/form/');
        response = response.data;
        setData(response)
     
      } catch (e) {
        toast.error("Erro interno ao puxar relatórios")
      }
    };

    useEffect(() => {
      getLocals()
    }, [])

    return (
        <Layout initialSelect='Relatório'>
            <Navinfo name={'Relatório'} subname={'relatório (s)'} size={data?.length} buttonName={'Preencher formulario'} Icon={AiOutlinePlus} onButton={() =>navigate('/formulario')}/>
            <BoxContainer>
            {
             data && data.map((item, index) => {

                return(
                  <Box>
                      <Question>
                            <LabelContainer>Data:</LabelContainer>
                            <Value>
                                {item.date ? formatDate(item.date) : 'sem data.'}
                            </Value>
                      </Question>
                      <Question>
                            <LabelContainer>Responsável:</LabelContainer>
                            <Value>
                                {item?.user ? item.user : 'sem responsável.'}
                            </Value>
                      </Question>
                      <Question>
                            <LabelContainer>Formulario preenchido em:</LabelContainer>
                            <Value>
                                {item.fill ? formatDate(item.fill) : 'sem data de preencimento.'}
                            </Value>
                      </Question>
                      <Question>
                            <LabelContainer>Turno:</LabelContainer>
                            <Value>
                                {item.shift ? item.shift : 'sem turno.'}
                            </Value>
                      </Question>
                      <Question>
                          <LabelContainer>Ferramentas utilizadas:</LabelContainer>
                          <Value>
                              {item?.tool ? item.tool.map((tool, index) => (
                                  <React.Fragment key={index}>
                                      {tool}
                                      {index < item.tool.length - 1 && <br />}
                                  </React.Fragment>
                              )) : 'sem ferramentas utilizadas.'}
                          </Value>
                      </Question>
                      <Question>
                          <LabelContainer>Atividades realizadas dentro do cronograma:</LabelContainer>
                          <Value>
                              {item?.actions ? item.actions.map((action, index) => (
                                  <React.Fragment key={index}>
                                      {action}
                                      {index < item.actions.length - 1 && <br />}
                                  </React.Fragment>
                              )) : 'sem ferramentas utilizadas.'}
                          </Value>
                      </Question>
                      <Question>
                          <LabelContainer>Atividades realizadas fora do cronograma:</LabelContainer>
                          <Value>
                              {item?.forActions ? item.forActions.map((action, index) => (
                                  <React.Fragment key={index}>
                                      {action}
                                      {index < item.forActions.length - 1 && <br />}
                                  </React.Fragment>
                              )) : 'sem ferramentas utilizadas.'}
                          </Value>
                      </Question>
                      {
                        item?.water.map(({water, action}, index) => (
                          <Question>
                                <LabelContainer>Quantidade de agua usada em <span className='waterSpan'>{action}</span></LabelContainer>
                                <Value>
                                    {water ? water : 'sem quantidade.'}
                                </Value>
                          </Question>
                        ))
                      }
                  </Box>
                )
              })
            }
              </BoxContainer>

        </Layout>
    )
}

export default Relatorio