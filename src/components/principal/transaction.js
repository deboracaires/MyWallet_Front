import { ContainerTransaction } from "../../styles/transactionStyle.js";

export default function Transaction({transaction}){
    
    const strDate = transaction.date.slice(0, -14);
    const date = strDate.split('-');

    const value = Number(transaction.value);

    let color = {};

    if(transaction.type === 'OUTCOME'){
        color = {color: '#C70000'};
    }else{
        color = {color: '#03AC00'};
    }
    
    
    return(
        <ContainerTransaction>
            <h3>{`${date[2]}/${date[1]}`}</h3>
            <h4>{transaction.description}</h4>
            <h5 style={color}>{value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>
        </ContainerTransaction>
    );
}
