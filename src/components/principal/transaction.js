import styled from "styled-components";

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

const ContainerTransaction = styled.div `
    display: flex;
    padding-left: 4vw;
    margin-top: 2vh;
    position: relative;
    
    
    h3{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
    }
    h4{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        height: 19px;
        margin: 1px solid #fff;
        color: #000000;
        width: 40vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 4vw;
    }
    
    h5{
        position: absolute;
        right: 0vw;
        width: 20vw;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    h5:hover{
        overflow: visible;
    }
`;