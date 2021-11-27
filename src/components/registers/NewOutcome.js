import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import UserContext from "../../contexts/userContext";
import { postFinancial } from "../../services/api.services.js";
import { ContainerRegister, HeaderRegister, Input, Button } from '../../styles/registersStyle';
import { validateUser } from "../../validations/nameAndTokenValidation";

export default function NewOutcome(){
    
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const { token } = validateUser(user);

    if(token === null) {
        Swal.fire({
            html: `<h1 style = 'color: #fff'>Sessão expirada! Faça login novamente!</h1>`,
            width: '95%',
            background: '#8C11BE',
            confirmButtonColor: '#A328D6',
        });
        navigate('/');
    }

    function saveTransaction(e){
        e.preventDefault();
        
        const type = 'OUTCOME';

        const config = { headers: { "Authorization": `Bearer ${user?user.token:token}` } }

        const body = { value, description, type };

        postFinancial(body, config)
            .then(() => navigate('/principal'))
            .catch(() => {
                Swal.fire({
                    html: `<h1 style = 'color: #fff'>Sessão expirada! Faça login novamente!</h1>`,
                    width: '95%',
                    background: '#8C11BE',
                    confirmButtonColor: '#A328D6',
                });
                navigate('/');
            });
    }
    
    return(
        <ContainerRegister>
            <HeaderRegister> 
                <h1>Nova saída</h1>
            </HeaderRegister>
            <form onSubmit={saveTransaction}>
                <Input placeholder="Valor" type="number" min={0} value={value} onChange={e => setValue(e.target.value)} ></Input>
                <Input placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}></Input>
                <Button type="submit"> Salvar saída</Button>
            </form>
        </ContainerRegister>
    );
}