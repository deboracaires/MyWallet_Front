import {IoExitOutline} from "react-icons/io5";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

import { ContainerPrincipalPage, Content, HeaderPrincipalPage, BottomPrincipalPage, NewRegister, Balance } from "../../styles/principalPageStyle";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/userContext";
import { getFinancialEvents, getSum } from "../../services/api.services";
import { useNavigate } from "react-router";

export default function PrincipalPage() {
    
    const [transactions, setTransactions] = useState([]);
    const [text, setText] = useState('Carregando...');
    const [balance, setBalance] = useState([]);

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        getFinancialEvents(config)
            .then((res) => {
                setTransactions(res.data);
                setText("Não há registros de entrada ou saída")
            })
            .catch((err) => console.log(err));
        getSum(config)
            .then((res) => setBalance(res.data))
            .catch((err) => console.log(err));
        
    }, [user.token]);

    let color = {};

    if(balance.sum < 0){
        color = {color: '#C70000'};
    }else{
        color = {color: '#03AC00'};
    } 

    return (
        <ContainerPrincipalPage>
            <HeaderPrincipalPage>
                <h1>Olá, {user.name}</h1>
                <div>
                    <IoExitOutline color="#fff" size="35px"></IoExitOutline>
                </div>
            </HeaderPrincipalPage>
            <Content>
                {
                    transactions.length === 0 ?
                    (
                        <h1>{text}</h1>
                    )
                    :
                    (
                        transactions.map((transaction, index) => (console.log(transaction)))
                    )
                }
                <Balance>
                    <p>SALDO</p>
                    {
                        balance.length === 0 ?
                        (
                            <h2>carregando...</h2>
                        )
                        :
                        (
                            <h2 style={color}> {balance.sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                        )
                    }
                </Balance>
            </Content>
            <BottomPrincipalPage>
                <NewRegister onClick = {() => navigate('/registro-entrada')}>
                    <FiPlusCircle color="#fff" size="22px" ></FiPlusCircle>
                    <p>Nova entrada</p>
                </NewRegister>
                <NewRegister  onClick = {() => navigate('/registro-saida')}>
                    <FiMinusCircle color="#fff" size="22px" ></FiMinusCircle>
                    <p>Nova saída</p>
                </NewRegister>
            </BottomPrincipalPage>
        </ContainerPrincipalPage>
    );
}