import { useState } from 'react'; // Import useState
import './Sigup.sass'
import { Row, Col, Container } from 'reactstrap';
import Form from '../../components/Form/Form'; 
import imgBack from '../../../source/OIP.jpg'; 
import React from 'react';


export default function SignupPage() {
    const [errorMessage, setErrorMessage] = useState('')
    // Função para tratar o envio do formulário
    const handleSignupSubmit = (email: string, password: string, confirmepassword: string) => {
        if (password === confirmepassword) {
            console.log('Cadastro com:', email, password,);
            setErrorMessage(''); 
        }else {
            return (
                setErrorMessage('As senhas não coincidem. Por favor, tente novamente.') // Set error message
            )
            
        }

    };

    return (
        <main className="landing-page">
            <Container fluid className="container-row">
                <Row>
                    <Col id="col-1-ab">
                        <img src={imgBack} alt='1' /> 
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