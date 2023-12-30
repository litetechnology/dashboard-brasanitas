import React from 'react';

import MultiSelectDropdown from '../Dropdown';
import { Container } from './styles';
import DateInput from '../date';


const data = [
	{
		name:"Local",
		options:[
			"local 1",
			"local 2",
			"local 3",
		],
		selects:[]
	},
	{
		name:"Turno",
		options:[
			"diurno",
			"noturno"
		],
		selects:[]
	},
	{
		name:"Tipo de atividade",
		options:[
			"tipo 1",
			"tipo 2",
			"tipo 3",
		],
		selects:[]
	},
	{
		name:"Placa",
		options:[
			"SHC-4C33",
			"SII-1E26",
			"RUS-3J70",
			"SFR-5A67",
			"RVD-8J97",
			"RVB-4I19"
		],
		selects:[]
	},
	{
		name:"Conclusão",
		options:[
			"concluida",
			"não Concluida",
		],
		selects:[]
	}
]
const Filter = () => {

return (
		<Container>
			{
				data.map((item, i) => {
					return (
						<div className="item" key={i}>
							<MultiSelectDropdown { ...item}/>
						</div>
					)
				})
			}
			<div className="item">
				<DateInput/>
			</div>
			<div className="item">
				<DateInput/>
			</div>
		</Container>
	)

}

export default Filter

