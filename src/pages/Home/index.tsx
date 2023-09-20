import{ Play }from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeContainer, Separator, StarCoutdownButton , TaskInput, MinutesAmountInput} from './stlyes'

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput type="text" id="task" placeholder='Dê um nome para o seu projeto' />

                    <label htmlFor="minutesAmount">Durante</label>
                    <MinutesAmountInput 
                        type='number'
                        id="minutesAmount"
                        placeholder='00'/>


                    <span>minutos.</span>

                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StarCoutdownButton 
                    type="submit"
                    disabled
                >
                    <Play/>
                     começar
                </StarCoutdownButton>

            </form>
        </HomeContainer>

    )
}