// Filter.jsx
import React, { useEffect, useState } from 'react';
import { subMonths, format, addMonths } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import MultiSelectDropdown from '../Dropdown';
import { Container } from './styles';
import DatePicker from '../date';


const Filter = ({ filters, setFilters, onChange, data, onActionFilter=false}) => {
  const [list, setList] = useState([])

  useEffect(()=> {
    var newList = []
    data.plate.map(plate => plate.timeline.map(item => newList.push(item.name)))
    newList = [...new Set(newList)]
    setList(newList)
  },[])
  return (
    <Container>
      <div className="item">
        <DatePicker onChange={x => setFilters({...filters, start: x}) & onChange({...filters, start: x})} date={filters.start} />
      </div>
      <div className="item">
        <DatePicker onChange={x => setFilters({...filters, end: x}) & onChange({...filters, end: x})} date={filters.end} />
      </div>
      <div className="item">
        <MultiSelectDropdown options={data.local.map(x => x.name)} name='Local' onChange={x => setFilters({...filters, local: x}) & onChange({...filters, local: x})}/>
      </div>
      <div className="item">
        <MultiSelectDropdown options={data.plate.map(x => x.name)} name='Placa' onChange={x => setFilters({...filters, plate: x}) & onChange({...filters, plate: x})}/>
      </div>
      <div className="item">
       <MultiSelectDropdown options={data.users.map(x => x.name)} name='Responsavel' onChange={x => setFilters({...filters, users: x}) & onChange({...filters, users: x})}/>
      </div>
      {
        onActionFilter && (
      <div className="item">
       <MultiSelectDropdown options={list} name='Atividades' onChange={x => setFilters({...filters, actions: x}) & onChange({...filters, actions: x})}/>
      </div>
        )
      }
    </Container>
  );
};

export default Filter;
