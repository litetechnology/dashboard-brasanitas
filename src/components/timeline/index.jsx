import React from 'react';
import { Container, DayColumn, DayLabel, Event} from './styles';

const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const getRandomColor = () => {
	const colors = ['#9471e1', '#a8e4d2', '#619ee9', '#f78f70'];
	return colors[Math.floor(Math.random() * colors.length)];
};
  
   const getCurrentDay = () => {
	const today = new Date().getDay();
	return daysOfWeek[today];
};

  
const WeeklyTimeline = ({ timeline }) => {
  const currentDay = getCurrentDay();

  return (
    <Container>
      {daysOfWeek.map((day, index) => (
        <DayColumn key={index}>
          <DayLabel isCurrentDay={currentDay === day}>{day}</DayLabel>
          {timeline
            .filter((event) => event.day === day)
            .map((event, eventIndex) => (
              <Event key={eventIndex} style={{ backgroundColor: getRandomColor() }}>
                {event.name}
              </Event>
            ))}
        </DayColumn>
      ))}
    </Container>
  );
};

export default WeeklyTimeline;
