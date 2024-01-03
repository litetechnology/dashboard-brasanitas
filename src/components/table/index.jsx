import React, { useEffect, useState } from 'react';
import { AiOutlineEllipsis, AiOutlineCopy, AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import { TableContainer, Table, Menu, MenuItem} from './styles';

const DarkTable = ({ width, data, onMenu}) => {
  const [clickIcon, setClickIcon] = useState(null);

  return (
    <TableContainer width={width}>
      <Table>
        <thead>
          <tr>
            {data.titles.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          <th></th>
          </tr>
        </thead>
        <tbody>
          {data.values.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, columnIndex) => (
                <td key={columnIndex}>{value}</td>
              ))}
              <td>
                <AiOutlineEllipsis 
                color='#eeeeee' 
                size={24} 
                className='icon'
                onClick={() => setClickIcon(rowIndex == clickIcon ? null : rowIndex)}
                />
               {
                clickIcon == rowIndex && (
                  <Menu>
                    <MenuItem onClick={() => onMenu({type: 'copy', index: rowIndex})}>
                      <AiOutlineCopy size={24}/>
                      <p>Copiar ID</p>
                    </MenuItem>
                    <MenuItem onClick={() => onMenu({type: 'edit', index: rowIndex})}>
                      <AiOutlineEdit size={24}/>
                      <p>Editar</p>
                    </MenuItem>
                    <MenuItem onClick={() => onMenu({type: 'delete', index: rowIndex})}>
                      <AiOutlineDelete size={24}/>
                      <p>Apagar</p>
                    </MenuItem>

                  </Menu>
                )
               }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default DarkTable;