import './Sigup.sass'
import { Row, Col, Container } from 'reactstrap';
import Form from '../../../web/components/Form/Form'; 
import imgBack from '../../../source/OIP.jpg'; 


export default function SignupPage() {
    // Função para tratar o envio do formulário
    const handleSignupSubmit = (email: string, password: string) => {
        console.log('Cadastro com:', email, password);
        //lógica de cadastro aqui (ex: chamada a API)
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
                            <Form mode="signup" onSubmit={handleSignupSubmit} />
                        </div>
                    </Col>
                </Row>
            </Container>  
        </main>
    );                
}