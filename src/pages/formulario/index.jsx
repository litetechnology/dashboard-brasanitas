import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Container, Box, Title, Question, LabelContainer } from './styles';
import Dropdown from '../../components/Dropdown';
import Input from '../../components/input';
import Date from '../../components/date';
import api from '../../services/api';
import { parse, getDay } from 'date-fns';

const Form = () => {
    const [form, setForm] = useState({ date: '', user:'', shift: '', tool: [], plate: {}})
    const [data, setData] = useState({local:[], plate:[], tool:[], users:[]});
    const [dayOfWeek, setDayOfWeek] = useState('');

        const getData = async () => {
            try {
                const responses = await Promise.all([
                    api.get('/local/'),
                    api.get('/plate/'),
                    api.get('/tool/'),
                    api.get('/users/')
                ]);
                
                const [local, plate, tool, users] = responses.map(response => response.data);
                setData({ local, plate, tool, users });
            } catch (error) {
                //console.log(error);
                toast.error("Erro interno ao puxar os dados do formulário")
            }
          };

         useEffect(() => {getData()}, [])
        // console.log(form)

    return (
        <Container>
            <Box>
                <Title>
                    <h1>Controle de atividades Brasanitas</h1>
                    <h3>Com você, <span>pra valer.</span></h3>
                </Title>

                <Question>
                    <LabelContainer>
                        <label>Atividade realizada em ?</label>
                        <span>*</span>
                    </LabelContainer>
                    <Date autoDate onChange={(date, day) => setForm({...form, date} & setDayOfWeek(day) & console.log(day))} width='40vw' color='#262626'/>
                </Question>

                <Question>
                    <LabelContainer>
                        <label>Selecione o responsável pela atividade</label>
                        <span>*</span>
                    </LabelContainer>
                    <Dropdown  oneSelect options={data.users ? data.users?.map(x => x?.name) : []} onChange={(user) => setForm({...form, user})}  width='40vw' color='#262626'/>
                </Question>

                <Question>
                    <LabelContainer>
                        <label>Realizou em qual turno ?</label>
                        <span>*</span>
                    </LabelContainer>
                    <Dropdown  oneSelect options={['diurno', 'noturno']} onChange={(shift) => setForm({...form, shift})}  width='40vw' color='#262626'/>
                </Question>

                <Question>
                    <LabelContainer>
                        <label>Quais ferramentas foram usadas durante a atividade ?</label>
                        <span>*</span>
                    </LabelContainer>
                    <Dropdown  options={data.tool ? data.tool?.map(x => x?.name) : []} onChange={(tool) => setForm({...form, tool})}  width='40vw' color='#262626'/>
                </Question>

                <Question>
                    <LabelContainer>
                        <label>Selecione a placa do veículo</label>
                        <span>*</span>
                    </LabelContainer>
                    <Dropdown  oneSelect options={data.plate ? data.plate?.map(x => x?.name) : []} onChange={(plate, index) => setForm({...form, plate: {...data.plate[index], index}})}  width='40vw' color='#262626'/>
                </Question>

                <Question>
                    <LabelContainer>
                        <label>Atividades realizadas dentro do cronograma ({form.date} - {dayOfWeek})</label>
                        <span>*</span>
                    </LabelContainer>
                    <Dropdown  options={form.plate?.index ? data.plate[form.plate.index]?.timeline?.map(x => x?.name) : []} onChange={(plate, index) => console.log(plate) &setForm({...form, plate: data.plate[index]})}  width='40vw' color='#262626'/>
                </Question>

            </Box>

            <div className="transparent"></div>
            
        </Container>
    )
}

export default Form