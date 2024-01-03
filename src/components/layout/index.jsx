import { AiOutlineHome, AiOutlineFileProtect, AiOutlineSolution, AiOutlinePushpin, AiOutlineIdcard} from "react-icons/ai";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

import { Container, Background, Menu, MenuSelector } from './styles';
import logo from '../../assets/images/logos.png';

const menuOptions = [
	{
		name: "Dashboard",
		icon: AiOutlineHome,
		route: "/dashboard"
	},
	{
		name: "Relatório",
		icon: AiOutlineFileProtect,
		route: "/relatorio"
	},
	{
		name: "Formulário",
		icon: AiOutlineSolution,
		route: "/formulario"
	},
	{
		name: "Locais",
		icon: AiOutlinePushpin,
		route: "/local"
	},
	{
		name: "Equipe",
		icon: AiOutlineIdcard,
		route: "/equipe"
	},

]
const Layout = ({children, initialSelect='dashboard'}) => {

const [select, setSelect] = useState(initialSelect);
const navigate = useNavigate();

return (
		<Container>
			<ToastContainer
			position="top-right"
			autoClose={2500}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
			/>
			<Menu>
				<div className="header">
					<img src={logo} alt="logos" />
				</div>
				<div className="buttons">
					{
						menuOptions.map((menu, index) => {
							var Icon = menu.icon;
							return (
								<MenuSelector key={index} onClick={() => navigate(menu.route)} select={menu.name==select}>
									<Icon color='#eeeeee' size={24}/>
									<p>{menu.name}</p>
								</MenuSelector>
							)
						})
					}
				</div>
			</Menu>
			<Background>
					{children}
			</Background>
		</Container>
	)

}

export default Layout

