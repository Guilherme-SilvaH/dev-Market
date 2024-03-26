import React from 'react';
import { Button, FormGroup, Input, Label, Form as RsForm } from 'reactstrap';


// Definindo as props do componente
interface FormProps {
    mode: 'login' | 'signup';
    onSubmit: (email: string, password: string) => void;
}

export default function Form({ mode, onSubmit }: FormProps) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;
        onSubmit(email, password);
    };

    return (
        <>

        <div className='form-container'>
            <RsForm className='form'onSubmit={handleSubmit}>

            <h2>{mode === 'login' ? 'Login' : 'Cadastro'}</h2> 
                <FormGroup floating className='inputform'>
                    <Input
                        
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <Label for="email">Email</Label>
                </FormGroup>
                {' '}
                <FormGroup floating className='inputform'>
                    <Input
                        id="password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        required
                    />
                    <Label for="password">Password</Label>
                </FormGroup>
                {' '}
                <Button type="submit">
                    {mode === 'login' ? 'Login' : 'Sign Up'}
                </Button>
            </RsForm>
            {mode === 'login' ? (
                <p>Não tem uma conta? <a href="/signup">Cadastre-se</a></p>
            ) : (
                <p>Já tem uma conta? <a href="/login">Login</a></p>
            )}

        </div>
        </>
    );
}