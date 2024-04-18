import React, { useEffect, useState } from 'react';
import { Row } from "../../styles";
import Combo from '../../charts/combo';
import Table from '../../../../components/table';
import formatDate from '../../../../services/formatDate';
import LineChart from '../../charts/line';
import Button from '../../../../components/button';
import { AiOutlineRollback  } from "react-icons/ai"

const ScheduledCount = ({data, onBack}) => {
    const [group, setGroup] = useState([]);
    const [table, setTable] = useState({titles: ['ordem', 'atividades dentro do cronograma', 'atividades fora do cronograma', 'equipamentos', 'placa', 'data'], values:[]})

      const getData = async () => {
        const initialCount = {};
      
        await Promise.all(
          data.map(async (item) => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const monthYear = `${month}/${year}`; // Representação do mês como "mês/ano"
            const generalActions = [...item.actions, ...item.forActions];
            console.log(generalActions)
      
      
            if (!initialCount[monthYear]) {
              initialCount[monthYear] = {};
            }
      
            generalActions.forEach((action) => {
              initialCount[monthYear][action] = (initialCount[monthYear][action] || 0) + 1;
            });
          })
        );

        return console.log(initialCount)
      
        var allNames = Object.values(initialCount).flatMap(x => Object.keys(x));
        allNames = Array.from(new Set(allNames));
      
        const titles = ["Mes", ...allNames];
      
        const months = Object.keys(initialCount).sort((a, b) => {
          const [monthA, yearA] = a.split('/').map(Number);
          const [monthB, yearB] = b.split('/').map(Number);
          if (yearA !== yearB) {
            return yearA - yearB;
          }
          return monthA - monthB;
        });
      
        const newData = [
          titles,
          ...months.map((monthYear) => {
            const tools = initialCount[monthYear] || {};
            const toolsArray = allNames.map((tool) => tools[tool] || 0); 
            return [monthYear, ...toolsArray];
          }),
        ];
        var tableData = data.map((x,i) => [i+1, x.actions.join(),  x.forActions?.join(), x.tool?.join(), x.plate?.name,  formatDate(x.date, false)])
        setTable({...table, values: tableData})
        setGroup(newData);
      };
      
      
      

      useEffect(() => {
        getData()
      }, [])

    return (
        <>
            <Row>
              <Button name="VOLTAR" Icon={AiOutlineRollback } onButton={onBack}/>
            </Row>
            <Row>
              <Combo activitiesData={group} />
            </Row>
            <Row>
              <LineChart activitiesData={group} />
            </Row>
            <Row>

            <Table width="100%" data={table} onMenu={() => {}}/>
            </Row>
        </>
    )
}

export default ScheduledCount;
