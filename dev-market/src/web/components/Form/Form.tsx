import { FormEvent } from 'react';
import { Button, Form as FormGroup, Input, Label } from 'reactstrap';

interface FormProps {
    mode: string;
    onSubmit: (email: string, password: string) => void;
}

export default function Form({ mode, onSubmit }: FormProps) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
        <form onSubmit={handleSubmit}>
            <div id='container-titles'>
                <h1>{mode === 'login' ? 'Login' : 'Cadastro'}</h1>
                <h2>Comece sem pagar nada</h2>
            </div>

            <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="example@gmail.com" />
            </FormGroup>

            <FormGroup>
                <Label for="Password">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="123456789" />
            </FormGroup>

            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Check me out
                </Label>
            </FormGroup>

            <Button className='container-button' type="submit" >
                {mode === 'login' ? 'Login' : 'Sign Up'}
            </Button>
            {mode === 'login' ? (
                <p className='container-p'>Não tem uma conta? <a href="/signup">Cadastre-se</a></p>
            ) : (
                <p className='container-p'>Já tem uma conta? <a href="/login">Login</a></p>
            )}
        </form>
    );
}