import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.text};
  height: auto;
  min-height: 30vh;
  border-radius: 5px;
  border: 0.1px solid rgba(238, 238, 238, 0.20);
  margin-top: 10vh;
`;

export const DayColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  flex: 1;
  &:nth-child(even) {
    background-color: #464646;
  }
`;

export const DayLabel = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
  color: ${({ theme, isCurrentDay }) => (isCurrentDay ? theme.colors.text : theme.colors.secondaryText)};
  background-color: ${({ theme, isCurrentDay }) => (isCurrentDay ? theme.colors.primary : '#202020')};
  border-right: 0.1px solid rgba(238, 238, 238, 0.10);
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10px 10px;
  margin-bottom: 30px;
`;

export const Event = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px;
  border-radius: 2px;
  margin-bottom: 10px;
  width: 80%;
  text-align: center;
  cursor: pointer;
`;