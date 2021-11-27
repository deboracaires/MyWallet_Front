import styled from 'styled-components';

const ContainerPrincipalPage = styled.div `
    margin: 25px 6.5vw 0 6.5vw;
    display: flex;
    flex-direction: column;
`;

const HeaderPrincipalPage = styled.div `
    width: 87vw;
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    
    justify-content: space-between;
    h1 {
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #fff;
    }
    div{
        display: flex;
    }
    div:hover{
        cursor: pointer;
    }
    
`
const Content = styled.div `
    width: 87vw;
    height: 59vh;
    background-color: #fff;
    border-radius: 5px 5px 0 0;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding-bottom: 2vh;
    position: relative;
    h1 {
        width: 50vw;
        height: 46px;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        text-align: center;
        color: #868686;
        position: absolute;
        left: 20vw;
        top: 40%;
    }
   
`;

const Balance = styled.div `
    
    height: 6vh;
    background-color: #fff;
    z-index: 10;
    
    width: 87vw;
    border-radius: 0 0 5px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3vw;
    p{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
        
    }
    h2{
        font-weight: normal;
        font-size: 17px;
        line-height: 20px;
    }
`;

const BottomPrincipalPage = styled.div `
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
    div:hover{
        cursor: pointer;
    }
`;

const NewRegister = styled.div `
    width: 41vw;
    height: 17.1vh;
    background: #A328D6;
    border-radius: 5px;
    padding: 9px 0 9px 3vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
        width: 20vw;
        font-weight: bold;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
`;

export {
    ContainerPrincipalPage,
    HeaderPrincipalPage,
    Content,
    Balance,
    BottomPrincipalPage,
    NewRegister,
};
