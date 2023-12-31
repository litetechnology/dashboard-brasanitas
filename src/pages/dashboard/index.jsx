import React, { useState } from 'react';

import Layout from '../../components/layout';
import Filter from '../../components/filter';
import { Container, DataContainer, BoxDataContainer, Row} from './styles';

import GraficoPizza from './charts/pizza';
import Barra from './charts/barra';

const Dashboard = () => {

    const [data, setData] =  useState({
        singleValues: [
            {
                value: "190",
                description: "Total de atividades prevista"
            },
            {
                value: "178",
                description: "Atividades realizadas"
            },
            {
                value: "12",
                description: "Atividades não realizadas"
            },
            {
                value: "10",
                description: "Atividades não planejadas"
            },
            {
                value: "6.000L",
                description: "Consumo médio de agua"
            },
            {
                value: "78.000L",
                description: "Consumo total de agua"
            },
            {
                value: "9.6/10",
                description: "Aderencia"
            },
        ]
    })

    return (
        <Layout initialSelect="Dashboard">
             <Filter />
             <Container>
                <DataContainer>
                     {
                        data.singleValues.map((item, i) => (
                            <BoxDataContainer key={i}>
                                    <p>{item.value}</p>
                                    <p>{item.description}</p>
                            </BoxDataContainer>
                        ))
                     }
                </DataContainer>
                <Row>
                    <GraficoPizza name={'Uso nas atividades'} data={
                        [
                            ['tipo', 'quantidade'],
                            ['bico de pato', 78],
                            ['mangote', 28],
                            ['mangote ab', 25]
                        ]
                    }/>
                    <GraficoPizza name={'Conclusão das atividades'} data={
                        [
                            ['tipo', 'quantidade'],
                            ['concluida', 178],
                            ['não concluida', 12],

                        ]
                    }/>
                </Row>
                <Row>
                    <GraficoPizza name={'Cronograma'} data={
                        [
                            ['tipo', 'quantidade'],
                            ['atividades não planejadas', 10],
                            ['atividades planejadas', 178],

                        ]
                    }/>
                    <Barra name="Conclusão por local" data={[
                        ['Categorias', 'Valores'],
                        ['local 1', 30],
                        ['local 2', 50],
                        ['local 3', 20]
                    ]}/>
                    
                </Row>
             </Container>
        </Layout>
    )
}

export default Dashboard