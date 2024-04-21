"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./Login.sass");
const reactstrap_1 = require("reactstrap");
const Form_1 = __importDefault(require("../../components/Form/Form"));
const OIP_jpg_1 = __importDefault(require("../../../source/OIP.jpg"));
function Login() {
    // Função para tratar o envio do formulário
    const handleSignupSubmit = (email, password) => {
        console.log('Cadastro com:', email, password);
    };
    return (<main className="landing-page">
            <reactstrap_1.Container fluid className="container-row">
                <reactstrap_1.Row>
                    <reactstrap_1.Col id="col-1-ab">
                        <img src={OIP_jpg_1.default} alt='1'/> 
                    </reactstrap_1.Col>
                    <reactstrap_1.Col id='col-2-ab'>
                        <div className='div-form'>
                            <Form_1.default mode="login" onSubmit={handleSignupSubmit}/>
                        </div>
                    </reactstrap_1.Col>
                </reactstrap_1.Row>
            </reactstrap_1.Container>  
        </main>);
}
exports.default = Login;
