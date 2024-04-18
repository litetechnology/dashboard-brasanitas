import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState} from 'react';
import { FiArrowRight, FiLogOut } from "react-icons/fi";

import { Container, Image, TitleContainer, TitleBoxContainer, InfoContainer, InfoRow, InfoBox, ButtonsContainer } from './styles';
import image from '../../assets/images/home-gradient.png';
import Carroussel from './carroussel';
import api from '../../services/api';
import Card from '../../components/card';

const Main = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [click, setClick] = useState(true);

    const getUser = async () => {
        try {
            const response = await api.get("/auth/me");
            setUser(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    };

    const onLogout = async () => {
        localStorage.clear();
        navigate('/');
    }

    useEffect(() => {
        var save = localStorage.getItem('save')
        if (!save) setClick(false);
        getUser();
    }, [])

    return (
                    <Container>
                        {
                            !click && <Card name={user?.name} onClick={() => setClick(true) & localStorage.setItem('save', true)}/>
                        }
                        <TitleContainer>
                            <Image src={image} alt="image" />
                            <TitleBoxContainer>
                                <h1>Controle de atividades complexo Vargem Grande</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lectus a nisl iaculis volutpat. Etiam dictum varius nulla non dictum. Vivamus rhoncus posuere porttitor. Cras luctus, quam non consectetur fermentum, enim velit finibus tortor, non cursus tortor massa at urna. Sed rutrum faucibus lacus vel malesuada.</p>
                                <ButtonsContainer>
                                    <button onClick={() => navigate('/shared/operation') } >OPERAÇÃO<FiArrowRight size={20}/> </button>
                                    <button onClick={() => navigate('/shared/segurance')} >SEGURANÇA<FiArrowRight size={20}/> </button>
                                    {
                                        user?.admin && <button onClick={() => navigate('/dashboard')} >DASHBOARD<FiArrowRight size={20}/> </button>
                                    }
                                    <button className="logout" onClick={onLogout} >SAIR<FiLogOut size={20}/> </button>
                                </ButtonsContainer>
                            </TitleBoxContainer>
                        </TitleContainer>

                        <Carroussel/>

                        <InfoContainer>
                            <InfoRow>
                                <InfoBox>
                                    <span>1.</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquid cupiditate, iste distinctio aliquam magni odit nemo aut nobis eaque animi voluptatum repellat ratione qui atque nam officia at quos.</p>
                                </InfoBox>
                                <InfoBox>
                                    <span>2.</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquid cupiditate, iste distinctio aliquam magni odit nemo aut nobis eaque animi voluptatum repellat ratione qui atque nam officia at quos.</p>
                                </InfoBox>
                            </InfoRow>

                            <InfoRow>
                                <InfoBox>
                                    <span>3.</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquid cupiditate, iste distinctio aliquam magni odit nemo aut nobis eaque animi voluptatum repellat ratione qui atque nam officia at quos.</p>
                                </InfoBox>
                                <InfoBox>
                                    <span>4.</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquid cupiditate, iste distinctio aliquam magni odit nemo aut nobis eaque animi voluptatum repellat ratione qui atque nam officia at quos.</p>
                                </InfoBox>
                            </InfoRow>

  
                        </InfoContainer>

                    </Container>
    )
}
//<button onClick={() => navigate('/dashboard')}>Ir para dashboard</button>

export default Main