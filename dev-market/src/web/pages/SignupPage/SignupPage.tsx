import './Sigup.sass';
import { Row, Col, Container } from 'reactstrap';
import Form from '../../../web/components/Form/Form'; 
import imgBack from '../../../source/pexels-johannes-plenio-1103970.jpg'; 


export default function SignupPage() {
    // Função para tratar o envio do formulário
    const handleSignupSubmit = (email: string, password: string) => {
        console.log('Cadastro com:', email, password);
        //lógica de cadastro aqui (ex: chamada a API)
    };

    return (
        <main className="landing-page">
            <Container className="container-row">
                <Row xs={2}>
                    <Col id="col-1-ab">
                        <img src={imgBack} alt='1' /> 
                    </Col>
                    <Col id='col-2-ab'>
                        <Form mode="signup" onSubmit={handleSignupSubmit} />
                    </Col>
                </Row>
            </Container>  
        </main>
    );                
}
