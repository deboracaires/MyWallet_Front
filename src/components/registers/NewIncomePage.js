import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/userContext";
import { postFinancial } from "../../services/api.services.js";
import { ContainerRegister, HeaderRegister, Input, Button } from '../../styles/registersStyle';

export default function NewIncome(){
    
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    function saveTransaction(e){
        e.preventDefault();
        
        const type = 'INCOME';

        const config = { headers: { "Authorization": `Bearer ${user.token}` } }

        const body = { value, description, type };

        postFinancial(body, config)
            .then(() => navigate('/principal'))
            .catch((err) => console.log(err))

        

    }
    
    return(
        <ContainerRegister>
            <HeaderRegister> 
                <h1>Nova entrada</h1>
            </HeaderRegister>
            <form onSubmit={saveTransaction}>
                <Input placeholder="Valor" type="number" min={0} value={value} onChange={e => setValue(e.target.value)} ></Input>
                <Input placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}></Input>
                <Button type="submit"> Salvar entrada</Button>
            </form>
        </ContainerRegister>
    );
}