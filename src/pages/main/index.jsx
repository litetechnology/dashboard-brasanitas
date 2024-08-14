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
        <h1>Controle de Atividades - Complexo Vargem Grande</h1>
        <p>Painel projetado para fornecer controle abrangente sobre a operação.</p>
        <ButtonsContainer>
            <button onClick={() => navigate('/shared/operation')} >OPERAÇÃO<FiArrowRight size={20}/> </button>
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
            <p>O monitoramento contínuo permite identificar e solucionar falhas rapidamente, garantindo o bom funcionamento das operações.</p>
        </InfoBox>
        <InfoBox>
            <span>2.</span>
            <p>Relatórios detalhados oferecem insights estratégicos, auxiliando na tomada de decisões baseadas em dados.</p>
        </InfoBox>
    </InfoRow>

    <InfoRow>
        <InfoBox>
            <span>3.</span>
            <p>A interface intuitiva facilita a gestão das atividades diárias, otimizando processos e aumentando a eficiência operacional.</p>
        </InfoBox>
        <InfoBox>
            <span>4.</span>
            <p>Soluções integradas promovem uma visão unificada de todas as operações, permitindo um controle centralizado e eficaz.</p>
        </InfoBox>
    </InfoRow>
</InfoContainer>


                    </Container>
    )
}
//<button onClick={() => navigate('/dashboard')}>Ir para dashboard</button>

export default Main