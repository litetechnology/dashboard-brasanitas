import React, { useState, useEffect} from 'react';
import { toast } from 'react-toastify';

import Layout from '../../components/layout';
import Filter from '../../components/filter';
import { Container, DataContainer, BoxDataContainer, Row} from './styles';

import GraficoPizza from './charts/pizza';
import Combo from './charts/combo';
import api from '../../services/api';
import Barra from './charts/barra';

const Segurance = () => {
    const [selects, setSelects] = useState({local:[], plate:[], tool:[], users:[], allActivities:[], start:'', end:''});
    const [data, setData] = useState({local:[], plate:[], tool:[], users:[], statistics:{}, allActivities:[]});
    const [titles, setTitles] =  useState({
        singleValues: [
            {
                value: '0',
                description: "Total de books"
            },
            {
                value: "0",
                description: "Questões realizadas"
            },
            {
                value: "0",
                description: "Questões não realizadas"
            },
            {
                value: '0',
                description: "Questões em andamento"
            },
            {
                value: "5/10",
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

          
          useEffect(() => { getData() }, [])
          

    return (
        <Layout initialSelect="Visão Geral">
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
    name={'Aderencia'}
    data={[
        ['ferramenta', 'quantidade'],
        ['não iniciada', 5],
        ['em andamento', 3],
        ['concluida', 10],
    ]}
/>
                <GraficoPizza
    name={'Aderencia'}
    data={[
        ['ferramenta', 'quantidade'],
        ['não iniciada', 5],
        ['em andamento', 3],
        ['concluida', 10],
    ]}
/>



                </Row>
                <Row>

                </Row>
             </Container>
        </Layout>
    )
}

export default Segurance