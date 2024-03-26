import './Sigup.sass';
import { Row, Col } from 'reactstrap';
import Form from '../../../web/components/Form/Form'; 
import imgBack from '../../../source/pexels-johannes-plenio-1103970.jpg'; 

export default function SignupPage() {
    // Função para tratar o envio do formulário
    const handleSignupSubmit = (email: string, password: string) => {
        console.log('Cadastro com:', email, password);
        //lógica de cadastro aqui (ex: chamada a API)
    };

    return (
        <main className='container-sigup'>
            <Row xs={2}>
                <Col  className='col-1-img'>
                    <img src={imgBack} alt='1' /> 
                </Col>

                <Col className='col-2-form-sigup'>
                    <Form mode="signup" onSubmit={handleSignupSubmit} />
                </Col>
            </Row>
        </main>
    );                
}
