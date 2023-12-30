import React, { useState } from 'react';
import { DateInputContainer, Input } from './styles';

const DatePicker = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    if (onChange) onChange(event.target.value);
  };

  return (
    <DateInputContainer>
      <Input
        onChange={handleDateChange}
        value={selectedDate}
        type="date"
        placeholder="Selecione uma data"
      />
    </DateInputContainer>
  );
};

export default DatePicker;
