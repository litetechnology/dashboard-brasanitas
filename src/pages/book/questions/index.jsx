import { AiOutlineFontColors, AiOutlineInfoCircle, AiOutlineSecurityScan, AiOutlinePlus, AiOutlineUser} from 'react-icons/ai';
import { useState } from "react";

import Button from '../../../components/button';
import Input from '../../../components/input';
import { EditContainer, BoxContainer, Box, Question, LabelContainer, Value } from '../styles';
import Navinfo from '../../../components/navinfo';
import formatDateTime from '../../../services/formatDate';
import Dropdown from '../../../components/Dropdown';


const Questions = ({data, onBack, updateQuestion, getBook}) => {

    const [edit, setEdit] = useState(false);

    const CreateAndEdit = ({questionData, update}) => {

        const [ form, setForm ] = useState(update ? questionData : { author: "", description:"", observation:"", status:"", lastUpdate: Date.now()});
    
        const send = async () => {
            var questions = data?.questions || [];
            if (update){
                var index = questions.indexOf(x => x?._id == data?._id);
                questions[index] = {...form};
            } else {
                questions = [...questions, {...form}]
            }
            await updateQuestion({id: data._id, data: {...data, questions}}) 

             setEdit(false) 
             getBook();
        }
    
        return (
            <EditContainer>
                <Input Icon={AiOutlineInfoCircle} placeholder='Descrição da questão' value={form.description} onInput={(x) => setForm({...form, description: x})} />
                <Input Icon={AiOutlineUser} placeholder='Responsavel' value={form.author} onInput={(x) => setForm({...form, author: x})} />
                <Input Icon={AiOutlineSecurityScan} placeholder='Observações' value={form.observation} onInput={(x) => setForm({...form, observation: x})} />
                <Dropdown
                    options={['em andamento', 'não iniciado', 'concluido']}
                    name={form.status ? form.status : 'SELECIONE O STATUS'}
                    onChange={(x) => setForm({...form, status: x[0]})}
                    width='25vw'
                    oneSelect

                />
                <div className="buttons">
                  <Button center name='CANCELAR' onButton={() => setEdit(false)}/>
                  <Button center name={update ? 'ATUALIZAR' : 'CRIAR'} onButton={() => send()}/>
                </div>
            </EditContainer>
        )
    }

    return (
        <>
        <Navinfo
            name={'Questões'}
            size={data?.questions.lenght || 0}
            onButton={() => setEdit({questionData:null, update: false})}
            buttonName={'Nova questão'}
            subname={'questões'}
            Icon={AiOutlinePlus}
        />
            {
                edit ? <CreateAndEdit {...edit}/> :
                <EditContainer>
                <BoxContainer>
                    {
                        data?.questions && data.questions.map((item, index) => {
                            return (
    
                                    <Box key={index} onClick={() => setEdit({questionData: item, updat: true})}>
                                        <Question>
                                            <LabelContainer><span className='waterSpan'>{index}  -  </span>{item.description}</LabelContainer>
                                        </Question>
                                        <Question>
                                            <LabelContainer>Data de criação</LabelContainer>
                                            <Value>{formatDateTime(item?.date)}</Value>
                                        </Question>
                                        <Question>
                                            <LabelContainer>Responsavel</LabelContainer>
                                            <Value>{item?.author}</Value>
                                        </Question>
                                        <Question>
                                            <LabelContainer>Observações</LabelContainer>
                                            <Value>{item?.observation || 'sem observações.'}</Value>
                                        </Question>
                                        <Question>
                                            <LabelContainer>Status de conclusão</LabelContainer>
                                            <Value>{item?.status || 'não iniciado'}.</Value>
                                        </Question>                                   
                                    </Box>
                            )
                        })
                    }
                    {
                        !data?.questions && (
                            <Box>
                                <Question>
                                      <Value>Nenhuma questão criada.</Value>
                                </Question>
                            </Box>
                        )
                    }
                </BoxContainer>
                
                <div className="buttons">
                  <Button center name='CANCELAR' onButton={() => onBack()}/>
                </div>
            </EditContainer>
            }
        </>
    )
}

export default Questions;