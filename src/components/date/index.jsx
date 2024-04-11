// DatePicker.jsx
import React, { useState, useEffect } from "react";
import { DateInputContainer, Input } from "./styles";
import { format } from 'date-fns'; 
import ptBR from 'date-fns/locale/pt-BR';

const DatePicker = ({ onChange, date = "", color = "#333", width = '200px', autoDate = false }) => {
  const [selectedDate, setSelectedDate] = useState(autoDate ? format(new Date(), 'yyyy-MM-dd') : date);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    onChange(selectedDate);
  };

  useEffect(() => {
    if (autoDate) {
      setSelectedDate(format(new Date(), 'yyyy-MM-dd'));
    }
  }, [autoDate]);

  return (
    <DateInputContainer>
      <Input
        onChange={handleDateChange}
        value={selectedDate}
        type="date"
        color={color}
        width={width}
        placeholder="Selecione uma data"
      />
    </DateInputContainer>
  );
};

export default DatePicker;
