import { useState } from "react";
import { ContainerRegister, HeaderRegister, Input, Button } from '../../styles/registersStyle';

export default function NewIncome(){
    
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");


    function saveTransaction(e){
        e.preventDefault();
        
        //const signal = "+";

        //const config = { headers: { "Authorization": `Bearer ${token}` } }

        //const body = { value, description, signal};

        

    }
    
    return(
        <ContainerRegister>
            <HeaderRegister> 
                <h1>Nova entrada</h1>
            </HeaderRegister>
            <form onSubmit={saveTransaction}>
                <Input placeholder="Valor" type="number" value={value} onChange={e => setValue(e.target.value)} ></Input>
                <Input placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}></Input>
                <Button type="submit"> Salvar entrada</Button>
            </form>
        </ContainerRegister>
    );
}