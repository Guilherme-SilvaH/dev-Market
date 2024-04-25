import { useState } from 'react';
import './Sigup.sass';
import { Row, Col, Container } from 'reactstrap';
import Form from '../../components/auth/Form/Form'; 
import imgBack from '../../../source/OIP.jpg'; 
import React from 'react';
import axios from 'axios';

export default function SignupPage() {
    const [errorMessage, setErrorMessage] = useState('');

    // Função para tratar o envio do formulário
    const handleSignupSubmit = async (username: string, email: string, password: string, confirmepassword: string) => {
        if (password !== confirmepassword) {
            setErrorMessage('As senhas não coincidem. Por favor, tente novamente.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/api/register', { 
                name: username, 
                email: email,
                password: password,
                confirmPassword: confirmepassword
            });
            console.log('User registered', response.data);
            setErrorMessage(''); // Clear any previous error messages
        } catch (error) {
            console.error('Error registering user', error);
            setErrorMessage('Falha ao registrar. Por favor, tente novamente.'); 
        }
    };

    return (
        <main className="landing-page">
            <Container fluid className="container-row">
                <Row>
                    <Col id="col-1-ab">
                        <img src={imgBack} alt='Background' /> 
                    </Col>
                    <Col id='col-2-ab'>
                        <div className='div-form'>
                            {errorMessage && <div className="error-message">{errorMessage}</div>}
                            <Form mode="signup" onSubmit={handleSignupSubmit} />
                        </div>
                    </Col>
                </Row>
            </Container>  
        </main>
    );                
}