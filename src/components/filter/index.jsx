// Filter.jsx
import React, { useState } from 'react';
import { subMonths, format, addMonths } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import MultiSelectDropdown from '../Dropdown';
import { Container } from './styles';
import DatePicker from '../date';


const Filter = ({ filters, setFilters, onChange }) => {

  return (
    <Container>
      <div className="item">
        <DatePicker onChange={x => setFilters({...filters, start: x}) & onChange({...filters, start: x})} date={filters.start} />
      </div>
      <div className="item">
        <DatePicker onChange={x => setFilters({...filters, end: x}) & onChange({...filters, end: x})} date={filters.end} />
      </div>
    </Container>
  );
};

export default Filter;
