import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import Navinfo from '../../components/navinfo';
import Layout from '../../components/layout';
import { Container, EditContainer } from './styles';
import Table from '../../components/table';
import Input from '../../components/input';

const Local = () => {
  const [onEdit, setOnEdit] = useState(false);  
  const [input, setInput] = useState('');  
    const data = {
        titles: ["coluna 1", "coluna 2", "coluna 3", "teste"],
        values: [
          ["valor1", "valor2", "valor3", "olha"],
          ["valor1", "valor2", "valor3", "olha"],
          ["valor1", "valor2", "valor3", "olha"],
          ["valor1", "valor2", "valor3", "olha"],
          ["valor1", "valor2", "valor3", "olha"],

        ],
      };

    const CreateAndEdit = ({data}) => {
      return (
        <EditContainer>
            <Input Icon={AiOutlinePlus} placeholder='Nome do local' value={input} onInput={(x) => setInput(x)} />
        </EditContainer>
      )
    }

    return (
        <Layout initialSelect='Equipe'>
            <Navinfo name={'Locais'} subname={'locais'} size={5} buttonName={'Novo local'} Icon={AiOutlinePlus} onButton={() => setOnEdit(true)}/>
            {
              !onEdit ? <Table width="100%" data={data} onMenu={(x) => console.log(x)}/> : <CreateAndEdit/>
            }
        </Layout>
    )
}

export default Local