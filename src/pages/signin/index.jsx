import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {toast} from 'react-toastify';

import { Container, FormContainer, Title, Form, InputGroup, Label, Input, Forgot, Sign } from './styles';
import setAuthToken from '../../services/setAuthToken';
import api from '../../services/api';

const LoginForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialName = searchParams.get('name') || ''; 
    const redirect = searchParams.get('redirect'); 
    const [name, setName] = useState(initialName);
    const [password, setPassoword] = useState();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!name || !password) return toast.error("Complete todos os campos.")
    
            const response = await toast.promise(
              api.post('/auth/signin', { name, password }),
              {
                pending: 'Efetuando login',
                success: 'Login realizado com sucesso',
                error: 'Erro ao efetuar login'
              }
            );
            var token = response.data?.token;
            setAuthToken(token);
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('redirect', 'true');
            window.location.href = currentUrl.href;
          } catch (error) {
            if (error.response) {
                toast.error(error.response.data.msg);
            } else {
                toast.error("Erro interno ao autenticar");
            }
          }

    };

    useEffect(() => {
        if (redirect || localStorage.getItem("token")) return navigate("/dashboard");
    }, [])

    return (
        <Container>
            <FormContainer>
                <Title>Bem-vindo <span>{initialName}</span></Title>
                <Form onSubmit={handleFormSubmit}>
                    <InputGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="" value={name} onChange={(e) => setName(e.target.value)} />
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="" value={password} onChange={(e) => setPassoword(e.target.value)}/>
                        <Forgot>
                            <a rel="noopener noreferrer" href="#">Esqueceu a senha ?</a>
                        </Forgot>
                    </InputGroup>
                    <Sign type="submit">ACESSAR</Sign>
                </Form>
            </FormContainer>
        </Container>
    );
};

export default LoginForm;
