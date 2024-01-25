import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineFileProtect, AiOutlineSolution, AiOutlinePushpin, AiOutlineIdcard, AiOutlineTool, AiOutlineCar, AiFillCaretDown , AiFillCaretUp, AiOutlineFileSearch } from "react-icons/ai";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { Container, Background, Menu, MenuSelector, Paste } from './styles';
import logo from '../../assets/images/logos.png';

const folders = [
  {
    name: "Operações",
    isOpen: false,
    items: [
      {
        name: "Visão Geral",
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
      {
        name: "Equipamentos",
        icon: AiOutlineTool,
        route: "/equipamentos"
      },
      {
        name: "Veiculos",
        icon: AiOutlineCar,
        route: "/veiculos"
      }
    ]
  },
  {
    name: "Segurança",
    isOpen: false,
    items: [
      {
        name: "Visão Geral",
        icon: AiOutlineHome,
        route: "/seguranca/geral"
      },
      {
        name: "Book",
        icon: AiOutlineFileSearch,
        route: "/book"
      }
    ]
  }
];
const Layout = ({ children, initialSelect = 'dashboard' }) => {
	const [select, setSelect] = useState(initialSelect);
	const [stateFolders, setStateFolders] = useState(folders);
	const navigate = useNavigate();
  
	const handleFolderClick = (index) => {
	  const updatedFolders = [...stateFolders];
	  updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
	  setStateFolders(updatedFolders);
	};
  
	const handleMenuItemClick = (menuItem) => {
	  navigate(menuItem.route);
	  setSelect(menuItem.name);
	};
  
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
			{stateFolders.map((folder, index) => (
			  <div key={index}>
				<Paste onClick={() => handleFolderClick(index)}>
				  {folder.isOpen ? (
					<AiFillCaretUp color="#eeeeee" size={20} />
				  ) : (
					<AiFillCaretDown color="#eeeeee" size={20} />
				  )}
				  <p>{folder.name}</p>
				</Paste>
				{folder.isOpen && folder.items.map((menu, subIndex) => {
				  const Icon = menu.icon;
				  return (
					<MenuSelector key={`${index}_${subIndex}`} onClick={() => handleMenuItemClick(menu)} select={menu.name === select}>
					  <Icon color="#eeeeee" size={24} />
					  <p>{menu.name}</p>
					</MenuSelector>
				  );
				})}
			  </div>
			))}
		  </div>
		</Menu>
		<Background>
		  {children}
		</Background>
	  </Container>
	);
  };
  
  export default Layout;