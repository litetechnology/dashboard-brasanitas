import React, { useState, useEffect } from "react";
import { DateInputContainer, Input } from "./styles";
import { format, parseISO, getDay } from 'date-fns';

const FormDate = ({ onChange, date = "", color = "#333", width = '200px', autoDate = false }) => {
  const [selectedDate, setSelectedDate] = useState(autoDate ? format(new Date(), 'yyyy-MM-dd') : date);

  useEffect(() => {
    if (onChange) {
      const parsedDate = parseISO(selectedDate);
      const formattedDate = format(parsedDate, 'dd/MM/yyyy');
      const dayOfWeekIndex = getDay(parsedDate);
      const dayOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][dayOfWeekIndex];
      onChange(formattedDate, dayOfWeek);
    }
  }, [selectedDate, autoDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  useEffect(() => {
    if (autoDate) {
      setSelectedDate((prevDate) => {
        const currentDate = format(new Date(), 'yyyy-MM-dd');
        if (prevDate !== currentDate) {
          return currentDate;
        }
        return prevDate;
      });
    }
  }, [autoDate]);

  return (
    <DateInputContainer>
      <Input
        onChange={handleDateChange}
        value={autoDate && !date ? selectedDate : date}
        type="date"
        color={color}
        width={width}
        placeholder="Selecione uma data"
      />
    </DateInputContainer>
  );
};

export default FormDate;