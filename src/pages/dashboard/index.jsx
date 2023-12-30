import React from 'react';

import Layout from '../../components/layout';
import MultiSelectDropdown from '../../components/Dropdown';
import { Container } from './styles';


const Dashboard = () => {

    return (
        <Layout initialSelect="Dashboard">
            <MultiSelectDropdown options={['opção 1', 'opção 2', 'opção 3']}/>
        </Layout>
    )
}

export default Dashboard