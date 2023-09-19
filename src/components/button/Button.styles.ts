import styled , { css }from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'
interface ButtonContainerProps{
    variant: ButtonVariant
}

const buttonVariant = {
    primary:'purple',
    secondary: 'Orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height:48px;
    border-radius: 4px;
    border:0;
    margin: 8px;
    background-color: ${ props => props.theme['green-500']};
    color: ${props => props.theme.white}

  /* ${props =>{
    return css `background-color: ${buttonVariant[props.variant]}`
  }} */
`



