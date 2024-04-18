import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Container, TitlesContainer, TitleBox, Row } from './styles';
import formatNumber from '../../services/formatNumber';
import Layout from '../../components/layout';
import Filter from '../../components/filter';
import GraficoPizza from './charts/pizza';
import api from '../../services/api';
import { processData } from './services/processor';
import Combo from './charts/combo';
import Barra from './charts/barra';
import Loading from '../../components/loading';
import Button from '../../components/button';

import ScheduledCount from './subpages/scheduleCount';
import ActionByPlate from './subpages/actionByPlate';
import ActionByTool from './subpages/actionByTool';

const titles = ['Total de atividades', 'Atividades dentro do cronograma', 'Atividades fora do cronograma', 'Consumo médio de água', 'Consumo total de água', 'Aderência'];

const Dashboard = () => {
    
    const [data, setData] = useState({ local: [], plate: [], tool: [], users: [], form: [] });
    const [visibleData, setVisibleData] = useState({ titles, actionBytool: [], filteredData:[], actionByPlate: [], scheduledCount: [] });
    const [filters, setFilters] = useState({ start: '', end: '' });
    const [secondPage, setSecondPage] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const updateVisibleData = async (response, filterOption) => {
        const processedData = await processData({ filters: filterOption ? filterOption : filters, data: response ? response : data });
        setVisibleData(processedData);
        setLoaded(true);
    };
        
    const getData = async () => {
        try {
            const responses = await Promise.all([
                api.get('/local/'),
                api.get('/plate/'),
                api.get('/tool/'),
                api.get('/users/'),
                api.get('/form/')
            ]);
                
            const [local, plate, tool, users, form] = responses.map(response => response.data);
            await updateVisibleData({ local, plate, tool, users, form});
            setData({ local, plate, tool, users, form});
        } catch (error) {
            toast.error("Erro interno ao puxar os dados do formulário")
            console.log(error);
        }
    };

    useEffect(() => { getData() }, []);

    if (!loaded) return <Loading layout />;

    const SecondPageComponent = () => {
        switch(secondPage){
            case 1:
                return <ActionByTool data={visibleData.filteredData} onBack={() => setSecondPage(null)}/>
            break
            case 2:
                return <ActionByPlate data={visibleData.filteredData} onBack={() => setSecondPage(null)}/>
            break
            case 3:
                return <ScheduledCount data={visibleData.filteredData} onBack={() => setSecondPage(null)}/>
            break
        }
    }
    return (
        <Layout initialSelect="Dashboard" disable>

            <Filter filters={filters} setFilters={setFilters} onChange={x => updateVisibleData(null, x)}/>
            <Container>
                {secondPage == null ? (
                    <>
                        <TitlesContainer>
                            {titles.map((item, index) => (
                                <TitleBox key={index}>
                                    <p>{visibleData.titles[index] || 0}</p>
                                    <p>{item}</p>
                                </TitleBox>
                            ))}
                        </TitlesContainer>
                        <Row>
                            <GraficoPizza
                                name='Tipo de atividade'
                                data={[
                                    ['ferramenta', 'quantidade'],
                                    ...visibleData.actionBytool
                                ]}
                                onClick={() => setSecondPage(1)}
                            />
                            <GraficoPizza
                                name='Atividades realizadas por veiculo'
                                data={[
                                    ['veiculo', 'quantidade'],
                                    ...visibleData.actionByPlate
                                ]}
                                onClick={() => setSecondPage(2)}
                            />

                        </Row>
                        <Row>
                            <GraficoPizza
                                name='Atividades do cronograma'
                                data={[
                                    ['tipo', 'quantidade'],
                                    ...visibleData.scheduledCount
                                ]}
                                onClick={() => setSecondPage(3)}
                            />
                        </Row>
                    </>
                ) : (
                <SecondPageComponent/>
                )}
            </Container>
        </Layout>
    );
}

export default Dashboard;
