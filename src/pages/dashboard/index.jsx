import React, { useState, useEffect} from 'react';
import { toast } from 'react-toastify';

import { Container, TitlesContainer, TitleBox, Row} from './styles';
import formatNumber from '../../services/formatNumber';
import Layout from '../../components/layout';
import Filter from '../../components/filter';
import GraficoPizza from './charts/pizza';
import api from '../../services/api';
import { processData } from './services/processor';
import Combo from './charts/combo';
import Barra from './charts/barra';
import Loading from '../../components/loading';

const titles = ['Total de atividades', 'Atividades dentro do cronograma', 'Atividades fora do cronograma', 'Consumo médio de agua', 'Consumo total de agua', 'Aderencia'];
const Dashboard = () => {
    
    const [visibleData, setVisibleData] = useState({ titles });
    const [data, setData] = useState({ local:[], plate:[], tool:[], users:[], form: []});
    const [filters, setFilters] = useState({ start:'', end:'' });
    const [loaded, setLoaded] = useState(false);


        const updateVisibleData = async (response, filterOption) => {
            const processedData = await processData({ filters: filterOption ? filterOption: filters, data: response ? response : data });
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

          const updateFilters = async (value) => {
            setFilters(value);
            await updateVisibleData(value);
          };

          useEffect(() => { getData() }, [])

          if (!loaded) return <Loading layout />

    return (
        <Layout initialSelect="Dashboard" disable>
             <Filter filters={filters} setFilters={setFilters} onChange={x => updateVisibleData(null, x)}/>
             <Container>
                <TitlesContainer>
                    {
                        titles.map((item, index) => (
                            <TitleBox key={index}>
                                <p>{ visibleData.titles[index] || 0 }</p>
                                <p>{item}</p>
                            </TitleBox>
                        ))
                    }
                </TitlesContainer>
                <Row>


                </Row>
                <Row>

          
                </Row>
                <Row>

                </Row>
             </Container>
        </Layout>
    )
}

export default Dashboard