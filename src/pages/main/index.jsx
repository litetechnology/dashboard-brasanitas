import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import React from 'react';

import { Container, Image, TitleContainer, TitleBoxContainer } from './styles';
import image from '../../assets/images/home-gradient.png';
import c1 from '../../assets/images/c1.png';
import c2 from '../../assets/images/c2.png';
import c3 from '../../assets/images/c3.png';
import c4 from '../../assets/images/c4.png';

const Main = () => {
    const navigate = useNavigate();

    return (
                    <Container>
                        <TitleContainer>
                            <Image src={image} alt="image" />
                            <TitleBoxContainer>
                                <h1>Controle de atividades Brasanitas</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lectus a nisl iaculis volutpat. Etiam dictum varius nulla non dictum. Vivamus rhoncus posuere porttitor. Cras luctus, quam non consectetur fermentum, enim velit finibus tortor, non cursus tortor massa at urna. Sed rutrum faucibus lacus vel malesuada.</p>
                                <button>ACESSAR <FiArrowRight size={20}/> </button>
                            </TitleBoxContainer>
                        </TitleContainer>

                    </Container>
    )
}
//<button onClick={() => navigate('/dashboard')}>Ir para dashboard</button>

export default Main