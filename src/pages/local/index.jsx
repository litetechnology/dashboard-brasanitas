import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import Navinfo from '../../components/navinfo';
import Layout from '../../components/layout';
import { Container } from './styles';
import DarkTable from '../../components/table';


const Local = () => {
    const data = {
        titles: ["coluna 1", "coluna 2", "coluna 3", "teste"],
        values: [
          ["valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1valor1", "valor2", "valor3", "olha"],
          ["valor1", "valor2", "valor3", "olha"],
          ["valor1", "valor2", "valor3", "olha"],
          ["valor1", "valor2", "valor3", "olha"],
          ["valor1", "valor2", "valor3", "olha"],
          ["valor1", "valor2", "valor3", "olha"],

        ],
      };

    return (
        <Layout initialSelect='Equipe'>
            <Navinfo name={'Locais'} subname={'locais'} size={5} buttonName={'Novo local'} Icon={AiOutlinePlus}/>
            <DarkTable width="100%" data={data} onMenu={({type}) => alert(type)}/>
        </Layout>
    )
}

export default Local