import { AiOutlineFontColors, AiOutlineInfoCircle, AiOutlineSecurityScan } from 'react-icons/ai';
import { useState } from "react";

import Button from '../../../components/button';
import Input from '../../../components/input';
import { EditContainer, BoxContainer, Box } from '../styles';


const CreateAndEdit = ({data, update, onBack, createQuestion, updateQuestion, getBook}) => {

    const [ form, setForm ] = useState(update ? data : { name: "", description:"", observation:""});

    const send = async () => (update ? await updateQuestion({id: data._id, data: {...form}}) : await createQuestion(form)) & onBack() & getBook();

    return (
        <EditContainer>
            <BoxContainer>
                <Box>
                    <Input color={'#262626'} Icon={AiOutlineFontColors} placeholder='Identificador da questão' value={form.name} onInput={(x) => setForm({...form, name: x})} />
                </Box>
            </BoxContainer>
            
            <div className="buttons">
              <Button center name='CANCELAR' onButton={() => onBack()}/>
              <Button center name={'SALVAR'} onButton={() => send()}/>
            </div>
        </EditContainer>
    )
}

export default CreateAndEdit;