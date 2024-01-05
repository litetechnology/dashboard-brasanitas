import { AiOutlinePlus, AiOutlineFontColors, AiOutlineRetweet, AiOutlineFontSize} from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import {toast} from 'react-toastify';

import formatDate from '../../services/formatDate';
import Navinfo from '../../components/navinfo';
import Button from '../../components/button';
import Layout from '../../components/layout';
import Table from '../../components/table';
import Input from '../../components/input';
import { EditContainer } from './styles';
import api from '../../services/api';
import Dropdown from '../../components/Dropdown';

import WeeklyTimeline from '../../components/timeline';

const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
function calculateDaysSinceCreation(creationDate) {
  const createdDate = new Date(creationDate);
  const today = new Date();
  const differenceInMs = today.getTime() - createdDate.getTime();
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  return differenceInDays;
}

const Plate = () => {
  const [data, setData] = useState({titles: ['nome', 'data de criação', 'valido durante', 'expira em'], response:[],values:[]});
  const [onEditTimeline, setOnEditTimeline] = useState(false);  
  const [onTimeline, setOnTimeline] = useState(false);  
  const [onEdit, setOnEdit] = useState(false);  
  const [action, setAction] = useState(false);  

    const getPlates = async () => {
      try {

        var response = await api.get('/plate/');
        response = response.data;
        setData({
          ...data,
          values: response.map(item => {
            const name = item.name;
            const creationDate = formatDate(item.date);
            const daysSinceCreation = calculateDaysSinceCreation(item.date);
            return [name, creationDate, item.validateSize == 0 ? '' : `${item.validateSize} dias`, item.validateSize == 0 ? 'não expira' : `${item.validateSize - daysSinceCreation} dias`];
          }),
          response: response
        });
     
      } catch (e) {
        toast.error("Erro interno ao puxar veículos")
      }
    };

    useEffect(() => {
      getPlates()
    }, [])

    const getRandomColor = () => {
      const colors = ['#24c08b', '#43d0a4', '#d8e77f', '#7695a6', '#5e7d8d', '#5e7d8d', '#a5c6d7', '#ffaa89', '#fe775b', '#fe5d44', '#ffc3a0', '#e7d9e8', '#d429a2', '#74cad2', '#4da5ad', '#5e7d8d', '#a5c6d7', '#bddef0', '#8ba038', '#bed068', '#513a90', '#3e0b77', '#003bd4', '#0049e7', '#9bd882', '#3b7728', '#69b8ef'];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const deletePlate = async (local) => {
      try {
    
        const response = await toast.promise(
          api.delete('/plate/delete', { data: { id: local._id } }),
          {
            pending: 'Apagando veículo',
            success: 'Veículo apagado com sucesso',
            error: 'Erro interno ao apagar veículo'
          }
        );
        getPlates();

      } catch (e) {
        //console.log(e);
      }
    };

    const copyPlateId = (id) => {
      navigator.clipboard.writeText(id);
      toast.success('ID copiado com sucesso');
    };
    

    const CreateAndEdit = () => {

      const [validateSize, setValidateSize] = useState('');  
      const [updated, setUpdated] = useState(false);
      const [name, setName] = useState('');  

      var update = typeof onEdit != 'boolean';
      if (!updated && update) setName(onEdit.name) & setUpdated(true);

      const sendData = async () => {
        try {
            if (update) {

              const response = await toast.promise(
                api.put('/plate/update', { id: onEdit._id, data: { name: name } }),
                {
                  pending: 'Atualizando veículo',
                  success: 'Veículo atualizado com sucesso',
                  error: 'Erro interno ao atualizar veículo'
                }
              );

            } else {

              const response = await toast.promise(
                api.post('/plate/create', { name: name}),
                {
                  pending: 'Salvando veículo',
                  success: 'Veículo salvo com sucesso',
                  error: 'Erro interno ao salvar veículo'
                }
              );

            }
            getPlates();
            setUpdated(false);
            setOnEdit(false);
            setName("");
          
        } catch (e) {
          //console.log(e)
        }
      }

      return (
        <>
        <Navinfo name={'Veiculos'} subname={'veiculo (s)'} size={data?.values?.length} buttonName={'Novo veículo'} Icon={AiOutlinePlus} onButton={() => setOnEdit(true)}/>
        <EditContainer>
            <Input Icon={AiOutlineFontColors} placeholder='Nome do veículo' value={name} onInput={(x) => setName(x)} />
            <Input Icon={AiOutlineRetweet} placeholder='Expiração do funcionário, 0 por padrão' value={validateSize} onInput={(x) => setValidateSize(x)} />
            <div className="buttons">
              <Button center name='CANCELAR' onButton={() => setOnEdit(false)}/>
              <Button center name={update ? 'ATUALIZAR' : 'CRIAR'} onButton={sendData}/>
            </div>
        </EditContainer>
        </>
      )
    }
    const CreateAndEditTimeline = () => {

      const [validateSize, setValidateSize] = useState('');  
      const [description, setDescription] = useState('');  
      const [updated, setUpdated] = useState(false);
      const [name, setName] = useState('');  
      const [days, setDays] = useState([]);  

      if (!updated && action) {
        setValidateSize(action?.validateSize ? action.validateSize : 0)
       setDescription(action?.description)
       setName(action?.name)
       setDays(action?.days)
       setUpdated(true)
      }

      const sendData = async () => {
        try {
          var plate = data.response[onTimeline];

          if (action){    

           plate.timeline =  [...plate.timeline.filter(x=> x._id != action._id), {
            validateSize: validateSize ? validateSize : 0,
            description,
            name,
            days,
            color: action ? action?.color : getRandomColor(),
            date: action ? action?.date : Date.now()
          }]
              console.log(plate.timeline)
          } else {

            plate.timeline = [...plate.timeline, {
              validateSize: validateSize ? validateSize : 0,
              description,
              name,
              days,
              color: action ? action?.color : getRandomColor(),
              date: action ? actiom?.date : Date.now()
            }]
          }

           
          const response = await toast.promise(
            api.put('/plate/update', { id: plate._id, data: { ...plate  } }),
            {
              pending: 'Salvando atividade',
              success: 'Atividade atualizado com sucesso',
              error: 'Erro interno ao atualizar atividade'
            }
          );
  
            getPlates();
            setUpdated(false);
            setOnEditTimeline(false);
            setName("");
            setDays([])
            setDescription("")
          
        } catch (e) {
          console.log(e)
        }
      }

      return (
        <EditContainer>
            <Input Icon={AiOutlineFontColors} placeholder='Nome da atividade' value={name} onInput={(x) => setName(x)} />
            <Input Icon={AiOutlineFontSize} placeholder='Descrição' value={description} onInput={(x) => setDescription(x)} />
            <Input Icon={AiOutlineRetweet} placeholder='Expiração da atividade, 0 por padrão' value={validateSize} onInput={(x) => setValidateSize(x)} />
            <Dropdown options={daysOfWeek} days={days} width='25vw' onChange={(x) => setDays(x)}/>
            <div className="buttons">
              <Button center name='CANCELAR' onButton={() => setOnEditTimeline(false)}/>
              <Button center name={action ? 'ATUALIZAR' : 'CRIAR'} onButton={sendData}/>
            </div>
        </EditContainer>
      )
    }

    const TableContainer = () => (
        <>
                <Navinfo name={'Veiculos'} subname={'veiculo (s)'} size={data?.values?.length} buttonName={'Novo veículo'} Icon={AiOutlinePlus} onButton={() => setOnEdit(true)}/>
                <Table width="100%" data={data} onRow={(index) => setOnTimeline(index)} onMenu={({type, index}) => {
                  var currentData = data.response[index]
                  switch(type){
                    case 'edit':
                      setOnEdit(currentData);
                    break
                    case 'delete':
                      deletePlate(currentData);
                    break
                    case 'copy':
                      copyPlateId(currentData?._id);
                    break

                  }
                }}/>
        </>
    )

    const TimelineContainer = () => {

      const [timelineData, setTimelineData] = useState({titles: ['nome', 'data de criação', 'valido durante', 'expira em'], response:[],values:[]})
      
      useEffect(() => {
        setTimelineData({
          ...timelineData,
          values: data.response[onTimeline].timeline.map(item => {
            const name = item.name;
            const creationDate = formatDate(item.date);
            const daysSinceCreation = calculateDaysSinceCreation(item.date);
            return [name, creationDate, item.validateSize == 0 ? '' : `${item.validateSize} dias`, item.validateSize == 0 ? 'não expira' : `${item.validateSize - daysSinceCreation} dias`];
          }),
          response: data.response[onTimeline].timeline
        });

      },[])

      const deleteAction = async (action) => {
        try {
          
          var plate = data.response[onTimeline];
          plate.timeline = plate.timeline.filter(x => x._id != action._id);
          const response = await toast.promise(
            api.put('/plate/update', { id: plate._id, data: { ...plate  } }),
            {
              pending: 'Apagando atividade',
              success: 'Atividade apagada com sucesso',
              error: 'Erro interno ao apagar atividade'
            }
          );
          getPlates();
  
        } catch (e) {
          //console.log(e);
        }
      };
  
      const copyActionId = (id) => {
        navigator.clipboard.writeText(id);
        toast.success('ID copiado com sucesso');
      };
    
      
      return (
        <>
            <Navinfo name={'Cronograma - ' + data.response[onTimeline].name} subname={'atividades (s)'} size={data.response[onTimeline].timeline.length} buttonName={'Nova atividade'} Icon={AiOutlinePlus} onButton={() => setOnEditTimeline(true)}/>
            {
              onEditTimeline ? 

      
                <CreateAndEditTimeline/> 

              :
              <>
              
              <WeeklyTimeline onTimeline={(e) => setAction(e) & setOnEditTimeline(true)} timeline={data.response[onTimeline].timeline} />
              <Table width="100%" data={timelineData} onMenu={({type, index}) => {
                  var currentData = data.response[onTimeline].timeline[index]
                  switch(type){
                    case 'edit':
                      setAction(currentData);
                      setOnEditTimeline(true)
                    break
                    case 'delete':
                      deleteAction(currentData);
                    break
                    case 'copy':
                      copyActionId(currentData?._id);
                    break

                  }
                }}/>
              </>
            }
        </>
      )

    }



    return (
      <Layout initialSelect='Veiculos'>
          {
            onEdit && <CreateAndEdit/>
          }
          {
            !onEdit && typeof onTimeline == 'number' ? <TimelineContainer/> : <TableContainer/>
          }
      </Layout>
  )


}

export default Plate