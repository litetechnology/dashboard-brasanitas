import React, { useState } from 'react';

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
	}
]
const Filter = ({data, onChange}) => {

	const [selects, setSelects] = useState({local:[], plate:[], tool:[], users:[], allActivities:[], start:'', end:''});
return (
		<Container>
			<div className="item">
				<MultiSelectDropdown name='Local' options={data.local ? data.local?.map(x => x?.name) : []} onChange={(x) => onChange({...selects, local: x}) & setSelects({...selects, local: x})}/>
			</div>
			<div className="item">
				<MultiSelectDropdown name='Ferramenta'  options={data.tool ? data.tool?.map(x => x?.name) : []} onChange={(x) => onChange({...selects, tool: x}) & setSelects({...selects, tool: x})}/>
			</div>
			<div className="item">
				<MultiSelectDropdown name='Responsavel'  options={data.users ? data.users?.map(x => x?.name) : []} onChange={(x) => onChange({...selects, users: x}) & setSelects({...selects, users: x})}/>
			</div>
			<div className="item">
				<MultiSelectDropdown name='Atividade'  options={data.allActivities ? data.allActivities?.map(x => x) : []} onChange={(x) => onChange({...selects, allActivities: x}) & setSelects({...selects, allActivities: x})}/>
			</div>

			<div className="item">
				<DateInput  autoDate onChange={(x) => onChange({...selects, start: x}) & setSelects({...selects, start: x})}/>
			</div>
			<div className="item">
				<DateInput  autoDate onChange={(x) => onChange({...selects, end: x}) & setSelects({...selects, end: x})}/>
			</div>
		</Container>
	)

}

export default Filter

