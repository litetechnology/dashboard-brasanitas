// Filter.jsx
import React, { useState } from 'react';
import { subMonths, format, addMonths } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import MultiSelectDropdown from '../Dropdown';
import { Container } from './styles';
import DatePicker from '../date';

const data = [
  // Seus dados
];

const Filter = ({ data, onChange, startDate: initialStartDate = '', endDate: initialEndDate = '' }) => {
  const currentDate = new Date();
  const endDate = format(currentDate, 'yyyy-MM-dd');
  const startDate = subMonths(currentDate, 6);
  const startDateFormatted = format(startDate, 'yyyy-MM-dd');

  const adjustedEndDate = addMonths(currentDate, 1);
  const endOfMonth = new Date(adjustedEndDate.getFullYear(), adjustedEndDate.getMonth(), 0);
  const endDateFormatted = format(endOfMonth, 'yyyy-MM-dd', { locale: ptBR });

  const [selects, setSelects] = useState({
    local: [],
    plate: [],
    tool: [],
    users: [],
    allActivities: [],
    start: initialStartDate || startDateFormatted,
    end: initialEndDate || endDateFormatted
  });

  const handleStartDateChange = (date) => {
    setSelects({ ...selects, start: date });
    onChange({ ...selects, start: date });
  };

  const handleEndDateChange = (date) => {
    setSelects({ ...selects, end: date });
    onChange({ ...selects, end: date });
  };

  return (
    <Container>
      <div className="item">
        <DatePicker onChange={handleStartDateChange} date={selects.start} />
      </div>
      <div className="item">
        <DatePicker onChange={handleEndDateChange} date={selects.end} />
      </div>
    </Container>
  );
};

export default Filter;
