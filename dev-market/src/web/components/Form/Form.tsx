import React from 'react';
import { FormEvent } from 'react';
import { Button, Form as FormGroup, Input, Label } from 'reactstrap';

interface FormProps {
    mode: string;
    onSubmit: (username: string, email: string, password: string, confirmepassword: string) => void;
}

export default function Form({ mode, onSubmit }: FormProps) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            username: {value: string}
            email: { value: string };
            password: { value: string };
            confirmepassword: { value: string };
        };
        const username = target.username.value
        const email = target.email.value;
        const password = target.password.value;
        const confirmepassword = target.confirmepassword.value
        onSubmit(username, email, password,confirmepassword);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div id='container-titles'>
                <h1>{mode === 'login' ? 'Login' : 'signup'}</h1>
                <h2>Comece sem pagar nada</h2>
            </div>

            {mode === 'signup' ? (
                <FormGroup>
                    <Label for="Email">Username</Label>
                    <Input type="text" name="username" id="exampleusername" placeholder="username" />
                </FormGroup>
            ) : (
               <></>
            )}
            
            <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="example@gmail.com" />
            </FormGroup>

            <FormGroup>
                <Label for="Password">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="1234@dDev" />
            </FormGroup>
            {mode === 'login' ? (
                <></>
            ) : (
                <FormGroup>
                    <Label for="confirmepassword">Password</Label>
                    <Input type="password" name="confirmepassword" id="exampleconfirmepassword" placeholder="Confirme the Passoword" />
                </FormGroup>
            )}
            {mode === 'login' ? (
                <></>
            ) : (
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Ao criar uma conta significa que você concorda com nossos Temos de Serviço e Política de Privacidade 
                    </Label>
                </FormGroup>
            )}
            <Button className='container-button' type="submit" >
                {mode === 'login' ? 'Login' : 'Sign Up'}
            </Button>
            {mode === 'login' ? (
                <p className='container-p'>Não tem uma conta? <a href="/">Cadastre-se</a></p>
            ) : (
                <p className='container-p'>Já tem uma conta? <a href="/login">Login</a></p>
            )}
        </form>
    );
}