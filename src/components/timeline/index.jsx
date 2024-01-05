import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.text};
  height: auto;
  min-height: 30vh;
  border-radius: 5px;
  border: 0.1px solid  rgba(238, 238, 238, 0.20);
  margin-top: 10vh;
`;

const DayColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  flex: 1;
  &:nth-child(even) {
    background-color: #464646;
  }
`;

const DayLabel = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
  color: ${({ theme, isCurrentDay }) => (isCurrentDay ? theme.colors.text : theme.colors.secondaryText)};
  background-color: ${({ theme, isCurrentDay }) => (isCurrentDay ? theme.colors.primary :'#202020')};
  border-right: 0.1px solid  rgba(238, 238, 238, 0.10);
  //background-color: #151515;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10px 10px;
  margin-bottom: 30px;
`;

const Event = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 8px;
  border-radius: 2px;
  margin-bottom: 10px;
  width: 80%;
  text-align: center;
`;

const getRandomColor = () => {
  const colors = ['#F37021'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getCurrentDay = () => {
  const today = new Date().getDay();
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  return daysOfWeek[today];
};

const WeeklyTimeline = ({ timeline }) => {
  const currentDay = getCurrentDay();

  return (
    <TimelineContainer>
      {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((day, index) => (
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
    </TimelineContainer>
  );
};

export default WeeklyTimeline;
