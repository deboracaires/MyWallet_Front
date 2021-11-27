import Swal from "sweetalert2"
import { validateEmail, validatePassword } from "./validateInputData"

function signUpValidate(name, email, password, confirmPassword) {
    if (name.length < 5) {
      Swal.fire({
        html: `<h1 style = 'color: #fff'>Digite uma senha com no mínimo 5 caracteres</h1>`,
        width: '95%',
        background: '#8C11BE',
        confirmButtonColor: '#A328D6',
      }); 
      return false;
    } else if (!validateEmail(email)) {
        Swal.fire({
            html: `<h1 style = 'color: #fff'>Email inválido!</h1>`,
            width: '95%',
            background: '#8C11BE',
            confirmButtonColor: '#A328D6',
        });
        return false;
    }  else if (!validatePassword(password)) {
        Swal.fire({
            html: `<h1 style = 'color: #fff'>Senha inválida! A senha precisa ter no mínimo 8 caracteres, uma letra
             maiúscula, uma letra minúscula e um número</h1>`,
            width: '95%',
            background: '#8C11BE',
            confirmButtonColor: '#A328D6',
        });
        return false;
    }   else if (password !== confirmPassword) {
        Swal.fire({
            html: `<h1 style = 'color: #fff'>As senhas não coincidem! Tente novamente!</h1>`,
            width: '95%',
            background: '#8C11BE',
            confirmButtonColor: '#A328D6',
        });
        return false;
    } 
    return true;
}

export {
    signUpValidate,
}