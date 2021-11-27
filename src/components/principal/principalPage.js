import {IoExitOutline} from "react-icons/io5";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

import { ContainerPrincipalPage, Content, HeaderPrincipalPage, BottomPrincipalPage, NewRegister } from "../../styles/principalPageStyle";

export default function PrincipalPage() {
    return (
        <ContainerPrincipalPage>
            <HeaderPrincipalPage>
                <h1>Olá, fulano</h1>
                <div>
                    <IoExitOutline color="#fff" size="35px"></IoExitOutline>
                </div>
            </HeaderPrincipalPage>
            <Content>

                    
            </Content>
            <BottomPrincipalPage>
                <NewRegister >
                    <FiPlusCircle color="#fff" size="22px" ></FiPlusCircle>
                    <p>Nova entrada</p>
                </NewRegister>
                <NewRegister>
                    <FiMinusCircle color="#fff" size="22px" ></FiMinusCircle>
                    <p>Nova saída</p>
                </NewRegister>
            </BottomPrincipalPage>
        </ContainerPrincipalPage>
    );
}