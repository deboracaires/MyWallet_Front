import { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { postSignIn } from '../../services/api.services';
import { Conteiner, TitleLogin, Input, Button, TextSignUp } from "../../styles/LoginAndSignUpStyle";
import { signInValidate } from '../../validations/signInValidate';


export default function SignInPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function signUp(e) {
        e.preventDefault();
        if (signInValidate(email, password)) {
            const body = { email, password}
            postSignIn(body)
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    if (err.response.status === 401){ 
                        Swal.fire({
                            html: `<h1 style = 'color: #fff'>E-mail e/ou senha incorretos!</h1>`,
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
        }
    }
    return (
        <Conteiner>
            <TitleLogin>MyWallet</TitleLogin>
            <form onSubmit={signUp}>
                <Input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)}></Input>
                <Input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}></Input>
                <Button type="submit">Entrar</Button>
            </form>
            <TextSignUp onClick = {() => navigate('/sign-up')}>Primeira vez? Cadastre-se!</TextSignUp>
        </Conteiner>
    );
}