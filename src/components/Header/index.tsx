import { HeaderContainer } from "./styles";
import {Timer, Scroll} from 'phosphor-react'

import logo from '../../assets/Logo.svg'

export function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="logo dois triângulos"/>
            <nav>
                <a href="">
                    <Timer size={24} />
                </a>
                <a href="">
                    <Scroll size={24}/>
                </a>
            </nav>
        </HeaderContainer>
    )
}