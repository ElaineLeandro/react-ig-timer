
import { ButtonContainer } from "./Button.styles";

interface ButtonProps{
    variant?: 'primary' | 'secondary' |'denger' | 'success'
}
export function Button({variant='primary'}: ButtonProps){
    return(
      <ButtonContainer variant={color}>Olá</ButtonContainer>
    )
}