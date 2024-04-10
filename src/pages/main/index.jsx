import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState} from 'react';
import { FiArrowRight } from "react-icons/fi";

import { Container, Image, TitleContainer, TitleBoxContainer, InfoContainer, InfoRow, InfoBox } from './styles';
import image from '../../assets/images/home-gradient.png';
import Carroussel from './carroussel';
import api from '../../services/api';

const Main = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const { id } = useParams();

    const getUser = async () => {
        try {
            const response = await api.post("/auth/get", { id });
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (id) getUser();
    }, [])

    return (
                    <Container>
                        <TitleContainer>
                            <Image src={image} alt="image" />
                            <TitleBoxContainer>
                                <h1>Controle de atividades Brasanitas</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lectus a nisl iaculis volutpat. Etiam dictum varius nulla non dictum. Vivamus rhoncus posuere porttitor. Cras luctus, quam non consectetur fermentum, enim velit finibus tortor, non cursus tortor massa at urna. Sed rutrum faucibus lacus vel malesuada.</p>
                                <button onClick={() => id ? navigate(`/signin?id=${id}&name=${user?.name}`) : navigate('/signin')} >ACESSAR <FiArrowRight size={20}/> </button>
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