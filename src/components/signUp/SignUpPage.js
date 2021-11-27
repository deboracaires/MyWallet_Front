import { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { postSignUp } from '../../services/api.services';
import { Conteiner, Title, Input, Button, TextSignUp } from "../../styles/LoginAndSignUpStyle";
import { signUpValidate } from '../../validations/signUpValidate';

export default function SignUpPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    function signUp(e) {
        e.preventDefault();
        if (signUpValidate(name, email, password, confirmPassword)) {
            const body = { name, email, password };
            postSignUp(body)
                .then(() => {
                    Swal.fire({
                        html: `<h1 style = 'color: #fff'>Conta registrada com sucesso!</h1>`,
                        timer: 2000,
                        background: '#8C11BE',
                        timerProgressBar: true,
                        showConfirmButton: false,
                        position: 'top',
                    });
                    navigate('/')
                })
                .catch((err) => {
                    if (err.response.status === 409){ 
                        Swal.fire({
                            html: `<h1 style = 'color: #fff'>E-mail já cadastrado!</h1>`,
                            width: '95%',
                            background: '#8C11BE',
                            confirmButtonColor: '#A328D6',
                        });
                    } else if (err.response.status === 400){ 
                        Swal.fire({
                            html: `<h1 style = 'color: #fff'>Algum dado está inválido, tente novamente!</h1>`,
                            width: '95%',
                            background: '#8C11BE',
                            confirmButtonColor: '#A328D6',
                        });
                    } 
                });
        };
    }
    return (
        <Conteiner>
            <Title>MyWallet</Title>
            <form onSubmit={signUp}>
                <Input placeholder="Nome" value={name} onChange={e => setName(e.target.value)}></Input>
                <Input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)}></Input>
                <Input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}></Input>
                <Input placeholder="Confirme a senha" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></Input>
                <Button type="submit">Cadastrar</Button>
            </form>
            <TextSignUp onClick = {() => navigate('/')}>Já tem uma conta? Entre agora!</TextSignUp>
        </Conteiner>
    );
}
