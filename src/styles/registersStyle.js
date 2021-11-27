import styled from 'styled-components';

const ContainerRegister = styled.div `
    margin: 25px 6.5vw 0 6.5vw;
    display: flex;
    flex-direction: column;
`;

const HeaderRegister = styled.div `
    width: 87vw;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    h1 {
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #fff;
    }
`;

const Input = styled.input `
    width: 86vw;
    height: 58px;
    border-radius: 5px;
    margin-bottom: 13px;
    padding-left: 15px;
    font-size: 20px;
    line-height: 23px;
    color: #000; 
    border: none;
    ::placeholder {
        
        color: #000; 
    }
`;

const Button = styled.button `
    width: 86vw;
    height: 46px;
    background-color: #a328d6;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    line-height: 23px;
    font-weight: 700;
    border: none;
`

export {
    ContainerRegister,
    HeaderRegister,
    Input,
    Button,
}