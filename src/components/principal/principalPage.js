import {IoExitOutline} from "react-icons/io5";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

import { ContainerPrincipalPage, Content, HeaderPrincipalPage, BottomPrincipalPage, NewRegister, Balance } from "../../styles/principalPageStyle";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/userContext";
import { getFinancialEvents, getSum } from "../../services/api.services";
import { useNavigate } from "react-router";
import Transaction from "./transaction.js";
import Swal from "sweetalert2";
import { validateUser } from "../../validations/nameAndTokenValidation";

export default function PrincipalPage() {
    
    const [transactions, setTransactions] = useState([]);
    const [text, setText] = useState('Carregando...');
    const [balance, setBalance] = useState([]);

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const { token, name} = validateUser(user);

    if(token === null) {
        Swal.fire({
            html: `<h1 style = 'color: #fff'>Sessão expirada! Faça login novamente!</h1>`,
            width: '95%',
            background: '#8C11BE',
            confirmButtonColor: '#A328D6',
        });
        navigate('/');
    }

    function cleanLocal(){
        sessionStorage.clear();
        setUser('');
        navigate('/');
    }
    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${user?user.token:token}`
            }
        }
        getFinancialEvents(config)
            .then((res) => {
                setTransactions(res.data);
                setText("Não há registros de entrada ou saída")
            })
            .catch(() => {
                Swal.fire({
                    html: `<h1 style = 'color: #fff'>Sessão expirada! Faça login novamente!</h1>`,
                    width: '95%',
                    background: '#8C11BE',
                    confirmButtonColor: '#A328D6',
                });
                navigate('/');
            });
        getSum(config)
            .then((res) => setBalance(res.data))
            .catch(() => {
                Swal.fire({
                    html: `<h1 style = 'color: #fff'>Sessão expirada! Faça login novamente!</h1>`,
                    width: '95%',
                    background: '#8C11BE',
                    confirmButtonColor: '#A328D6',
                });
                navigate('/');
            });
    }, [user, token, navigate]);

    let color = {};

    if(balance.sum < 0){
        color = {color: '#C70000'};
    }else{
        color = {color: '#03AC00'};
    } 

    return (
        <ContainerPrincipalPage>
            <HeaderPrincipalPage>
                <h1>Olá, {name}</h1>
                <div>
                    <IoExitOutline color="#fff" size="35px" onClick={() => cleanLocal()}></IoExitOutline>
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
                        transactions.map((transaction, index) => <Transaction key={index} transaction={transaction}/>)
                    )
                }
            </Content>
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