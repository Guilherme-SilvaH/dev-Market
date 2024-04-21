"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reactstrap_1 = require("reactstrap");
function Form({ mode, onSubmit }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const target = event.target;
        const email = target.email.value;
        const password = target.password.value;
        const confirmepassword = target.confirmepassword.value;
        onSubmit(email, password, confirmepassword);
    };
    return (<form onSubmit={handleSubmit}>
            <div id='container-titles'>
                <h1>{mode === 'login' ? 'Login' : 'signup'}</h1>
                <h2>Comece sem pagar nada</h2>
            </div>

            {mode === 'signup' ? (<reactstrap_1.Form>
                    <reactstrap_1.Label for="Email">Username</reactstrap_1.Label>
                    <reactstrap_1.Input type="text" name="username" id="exampleusername" placeholder="username"/>
                </reactstrap_1.Form>) : (<></>)}
            
            <reactstrap_1.Form>
                <reactstrap_1.Label for="Email">Email</reactstrap_1.Label>
                <reactstrap_1.Input type="email" name="email" id="exampleEmail" placeholder="example@gmail.com"/>
            </reactstrap_1.Form>

            <reactstrap_1.Form>
                <reactstrap_1.Label for="Password">Password</reactstrap_1.Label>
                <reactstrap_1.Input type="password" name="password" id="examplePassword" placeholder="1234@dDev"/>
            </reactstrap_1.Form>
            {mode === 'login' ? (<></>) : (<reactstrap_1.Form>
                    <reactstrap_1.Label for="confirmepassword">Password</reactstrap_1.Label>
                    <reactstrap_1.Input type="password" name="confirmepassword" id="exampleconfirmepassword" placeholder="Confirme the Passoword"/>
                </reactstrap_1.Form>)}
            {mode === 'login' ? (<></>) : (<reactstrap_1.Form check>
                    <reactstrap_1.Label check>
                        <reactstrap_1.Input type="checkbox"/>{' '}
                        Ao criar uma conta significa que você concorda com nossos Temos de Serviço e Política de Privacidade 
                    </reactstrap_1.Label>
                </reactstrap_1.Form>)}
            <reactstrap_1.Button className='container-button' type="submit">
                {mode === 'login' ? 'Login' : 'Sign Up'}
            </reactstrap_1.Button>
            {mode === 'login' ? (<p className='container-p'>Não tem uma conta? <a href="/">Cadastre-se</a></p>) : (<p className='container-p'>Já tem uma conta? <a href="/login">Login</a></p>)}
        </form>);
}
exports.default = Form;
