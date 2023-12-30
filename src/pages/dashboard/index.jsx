import React from 'react';

import Layout from '../../components/layout';
import Filter from '../../components/filter';
import { Container } from './styles';


const Dashboard = () => {

    return (
        <Layout initialSelect="Dashboard">
             <Filter />
        </Layout>
    )
}

export default Dashboard