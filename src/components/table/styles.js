import styled from 'styled-components';

export const TableContainer = styled.div`
  width: ${({ width }) => (width ? width : '100%')};
  color: ${({ theme }) => theme.colors.secondaryText};
  border: 0.4px solid rgba(238, 238, 238, 0.25);
  border-radius: 5px;
  margin-top: 10vh;
  overflow: auto;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    word-wrap: break-word;
    padding-left: 2%;
    max-width: 150px;
    padding: 15px;
    padding-left: 40px;
    
    &:last-child {
      width: 50px;
      padding: 2px;
      position: relative; 
    }
  }

  th {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    font-weight: 600;
    text-align: left;
  }

  td {
    border-top: 0.1px solid rgba(238, 238, 238, 0.05);
    background-color: rgba(238, 238, 238, 0.020);

    &:nth-child(1) {
      color: ${({ theme }) => theme.colors.text};
      font-weight: 500;
    }

    .icon {
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        transform: scale(1.20);
        border-radius: 6.5px;
        transform: 0.2s;
        cursor: pointer;
      }
    }

  }
`;

export const Menu = styled.div`
  background-color: ${({theme}) => theme.colors.secondaryBackground};
  border: 0.1px solid  rgba(238, 238, 238, 0.20);
  transform: translateX(-50%) translateY(1px);
  border-radius: 2px;
  min-width: 130px;
  position: fixed; 
  z-index: 100;
  height: auto;
  width: auto;

`;

export const MenuItem = styled.div`
  color: ${({theme}) => theme.colors.text};
  justify-content: start;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
  transition: 0.25s;
  min-width: 100px;
  display: flex;
  width: auto;

  
  p{
    margin-left: 10px;
    width: auto;
  }
  
  &:hover{
    background-color: #262626;
  }
  
  &:last-child {
    color: rgba(255, 0, 0, 0.70); 
    p {
      color: rgba(255, 0, 0, 0.70);      
    }
  }
  
  &:last-child:hover{
    color: ${({theme}) => theme.colors.text};
    background-color: rgba(255, 0, 0, 0.60); 
    p{
      color: ${({theme}) => theme.colors.text};
    }
  }

`

