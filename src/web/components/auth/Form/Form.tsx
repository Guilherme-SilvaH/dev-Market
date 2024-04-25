import React, { useState } from 'react';
import { FormEvent } from 'react';
import { Button, Form as FormGroup, Input, Label } from 'reactstrap';

interface FormProps {
    mode: string;
    onSubmit: (name: string, email: string, password: string, confirmedPassword: string) => void;
}

export default function Form({ mode, onSubmit }: FormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(name, email, password, confirmedPassword);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div id='container-titles'>
                <h1>{mode === 'signup' ? 'Sign Up' : 'Login'}</h1>
                <h2>Comece sem pagar nada</h2>
            </div>

            {mode === 'signup' && (
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input value={name} type="text" onChange={(e) => setName(e.target.value)} placeholder="username" />
                </FormGroup>
            )}

            <FormGroup>
                <Label for="email">Email</Label>
                <Input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" />
            </FormGroup>

            <FormGroup>
                <Label for="password">Password</Label>
                <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="1234@dDev" />
            </FormGroup>

            {mode === 'signup' && (
                <FormGroup>
                    <Label for="confirmedPassword">Confirm Password</Label>
                    <Input value={confirmedPassword} type="password" onChange={(e) => setConfirmedPassword(e.target.value)} placeholder="Confirm the Password" />
                </FormGroup>
            )}

            {mode === 'signup' && (
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />
                        Ao criar uma conta significa que você concorda com nossos Temos de Serviço e Política de Privacidade
                    </Label>
                </FormGroup>
            )}

            <Button className='container-button' type="submit">
                {mode === 'signup' ? 'Sign Up' : 'Login'}
            </Button>

            {mode === 'login' ? (
                <p className='container-p'>Não tem uma conta? <a href="/signup">Cadastre-se</a></p>
            ) : (
                <p className='container-p'>Já tem uma conta? <a href="/login">Login</a></p>
            )}
        </form>
    );
}