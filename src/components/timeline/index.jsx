import React from 'react';
import { Container, DayColumn, DayLabel, Event } from './styles';

const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const WeeklyTimeline = ({ timeline, onTimeline}) => {
  const currentDay = getCurrentDay();

  const getActivityColor = (activity) => {
    // Se a atividade tem uma cor definida, retorna essa cor, senão, retorna uma cor aleatória
    return activity.color || getRandomColor();
  };

  function getCurrentDay() {
    const today = new Date().getDay();
    return daysOfWeek[today];
  }

  return (
    <Container>
      {daysOfWeek.map((day, index) => (
        <DayColumn key={index}>
          <DayLabel isCurrentDay={currentDay === day}>{day}</DayLabel>
          {timeline
            .filter((event) => event.days && event.days.includes(day))
            .map((event, eventIndex) => (
              <Event key={eventIndex}  onClick={() => onTimeline(event)} style={{ backgroundColor: getActivityColor(event) }}>
                {event.name}
              </Event>
            ))}
        </DayColumn>
      ))}
    </Container>
  );
};

export default WeeklyTimeline;
