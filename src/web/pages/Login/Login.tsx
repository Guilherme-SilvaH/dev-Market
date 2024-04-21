
import './Login.sass'
import { Row, Col, Container } from 'reactstrap';
import Form from '../../components/Form/Form'; 
import imgBack from '../../../source/OIP.jpg'; 
import React, { useState } from 'react';
import axios from 'axios';


export default function Login() {
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignupSubmit =  async (username:string , email: string, password: string) => {
        console.log('Login with:',username, email, password,);
        try {
            const response = await axios.post('http://localhost:3000/api/login', { 
                email: email,
                password: password,
            });
            console.log('login successful', response.data);
            setErrorMessage(''); // Clear any previous error messages
        } catch (error) {
            console.error('Error registering user', error);
            setErrorMessage('Falha ao fazer o login. Por favor, tente novamente.'); //
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
                            <Form mode="login" onSubmit={handleSignupSubmit} />
                        </div>
                    </Col>
                </Row>
            </Container>  
        </main>
    );                
}