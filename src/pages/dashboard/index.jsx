import React, { useState, useEffect} from 'react';
import { toast } from 'react-toastify';

import Layout from '../../components/layout';
import Filter from '../../components/filter';
import { Container, DataContainer, BoxDataContainer, Row} from './styles';

import GraficoPizza from './charts/pizza';
import api from '../../services/api';
import Barra from './charts/barra';

const Dashboard = () => {
    const [selects, setSelects] = useState({local:[], plate:[], tool:[], users:[], allActivities:[], start:'', end:''});
    const [data, setData] = useState({local:[], plate:[], tool:[], users:[], statistics:{}, allActivities:[]});
    const [titles, setTitles] =  useState({
        singleValues: [
            {
                value: '0',
                description: "Total de atividades"
            },
            {
                value: "0",
                description: "Atividades realizadas"
            },
            {
                value: "0",
                description: "Atividades não realizadas"
            },
            {
                value: '0',
                description: "Atividades não planejadas"
            },
            {
                value: "0.000L",
                description: "Consumo médio de agua"
            },
            {
                value: "0.000L",
                description: "Consumo total de agua"
            },
            {
                value: "0/0",
                description: "Aderencia"
            },
        ]
    })


        const getData = async () => {
            try {
                const responses = await Promise.all([
                    api.get('/local/'),
                    api.get('/plate/'),
                    api.get('/tool/'),
                    api.get('/users/'),
                    api.get('/statistics/')
                ]);
                
                const [local, plate, tool, users, statistics] = responses.map(response => response.data);
                var allActivities =  plate.reduce((acc, plate) => acc.concat(plate.timeline.map(activity => activity.name)), [])
                setData({ local, plate, tool, users, statistics,  allActivities});
            } catch (error) {
                console.log(error);
                toast.error("Erro interno ao puxar os dados do formulário")
            }
          };

          const updateStatistics = async () => {
            console.log('update')
            var response = await api.get('/statistics/', { start: selects.start, end: selects.end});
            response = response.data;
            setData({...data, statistics: response});
            setTitles({
                singleValues: [
                    {
                        value: response.totalActivityCount || 0,
                        description: "Total de atividades"
                    },
                    {
                        value: response.scheduledActivityCount || 0,
                        description: "Atividades dentro do cronograma"
                    },
                    {
                        value: response.unscheduledActivityCount || 0,
                        description: "Atividades fora do cronograma"
                    },
                    {
                        value: response.averageWaterConsumption  + 'L'|| 0 ,
                        description: "Consumo médio de agua"
                    },
                    {
                        value: response.totalWaterConsumption  + 'L'|| 0 ,
                        description: "Consumo total de agua"
                    },
                    {
                        value: response.adherence || '10/10' ,
                        description: "Aderencia"
                    },
                ]
            })
          };

          
          useEffect(() => { getData() }, [])
          useEffect(() => updateStatistics, [selects])

          

    return (
        <Layout initialSelect="Dashboard">
             <Filter data={data} onChange={x => setSelects(x)}/>
             <Container>
                <DataContainer>
                     {
                        titles.singleValues?.map((item, i) => (
                            <BoxDataContainer key={i}>
                                    <p>{item.value}</p>
                                    <p>{item.description}</p>
                            </BoxDataContainer>
                        ))
                     }
                </DataContainer>
                <Row>
                <GraficoPizza
    name={'Uso de ferramentas'}
    data={[
        ['ferramenta', 'quantidade'],
        ...(data.statistics.activityCountByTool
            ? Object.entries(data.statistics.activityCountByTool).map(([key, value]) => [key, value])
            : [])
    ]}
/>
<GraficoPizza
    name={'Uso de agua por atividade'}
    data={[
        ['ferramenta', 'quantidade'],
        ...(data.statistics.waterConsumptionByActivity
            ? Object.entries(data.statistics.waterConsumptionByActivity).map(([key, value]) => [key, value])
            : [])
    ]}
/>


                </Row>
                <Row>
                    <GraficoPizza name={'Atividades do cronograma'} data={
                        [
                            ['tipo', 'quantidade'],
                            ['atividades dentro do cronograma', data?.statistics?.scheduledActivityCount],
                            ['atividades fora do crnograma', data?.statistics?.unscheduledActivityCount],

                        ]
                    }/>
                    <Barra name="Atividades por placa" data={[
                        ['Quantidade', 'Placas'],
                        ...(data.statistics.activityCountByPlate
                            ? Object.entries(data.statistics.activityCountByPlate).map(([key, value]) => [key, value])
                            : [])
                    ]}/>
                    
                </Row>
             </Container>
        </Layout>
    )
}

export default Dashboard