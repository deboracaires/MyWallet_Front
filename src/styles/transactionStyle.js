import styled from "styled-components";

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
`;

export {
    ContainerTransaction,
}