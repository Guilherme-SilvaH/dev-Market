
import './Login.sass'
import { Row, Col, Container } from 'reactstrap';
import Form from '../../components/Form/Form'; 
import imgBack from '../../../source/OIP.jpg'; 
import React from 'react';


export default function Login() {
    // Função para tratar o envio do formulário
    const handleSignupSubmit = (username:string , email: string, password: string) => {
        console.log('Cadastro com:',username, email, password,);
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
                            <Form mode="login" onSubmit={handleSignupSubmit} />
                        </div>
                    </Col>
                </Row>
            </Container>  
        </main>
    );                
}