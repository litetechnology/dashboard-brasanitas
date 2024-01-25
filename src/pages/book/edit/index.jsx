import { AiOutlineFontColors, AiOutlineInfoCircle, AiOutlineSecurityScan } from 'react-icons/ai';
import { useState } from "react";

import Button from '../../../components/button';
import Input from '../../../components/input';
import { EditContainer } from '../styles';


const CreateAndEdit = ({data, update, onBack, createQuestion, updateQuestion}) => {

    const [ form, setForm ] = useState(update ? data : { name: "", description:"", observation:""});

    const send = async () => (update ? await updateQuestion({...form, id: data.id}) : await createQuestion(form)) & onBack();

    return (
        <EditContainer>
            <Input Icon={AiOutlineFontColors} placeholder='Identificador da questão' value={form.name} onInput={(x) => setForm({...form, name: x})} />
            <Input Icon={AiOutlineInfoCircle} placeholder='Descrição da questão' value={form.description} onInput={(x) => setForm({...form, description: x})} />
            <Input Icon={AiOutlineSecurityScan} placeholder='Observações' value={form.observation} onInput={(x) => setForm({...form, observation: x})} />
            <div className="buttons">
              <Button center name='CANCELAR' onButton={() => onBack()}/>
              <Button center name={update ? 'ATUALIZAR' : 'CRIAR'} onButton={() => send()}/>
            </div>
        </EditContainer>
    )
}

export default CreateAndEdit;