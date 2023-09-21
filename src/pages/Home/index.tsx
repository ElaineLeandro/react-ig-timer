import { Play } from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeContainer, Separator, StarCoutdownButton, TaskInput, MinutesAmountInput } from './stlyes'

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id='task'
                        list='task-suggestions'
                        type="text"
                        placeholder='Dê um nome para o seu projeto'
                    />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1" />
                        <option value="Atividade" />
                        <option value="Exercicios" />
                        <option value="Chocolate" />
                    </datalist>

                    <label htmlFor="minutesAmount">Durante</label>
                    <MinutesAmountInput
                        type='number'
                        id="minutesAmount"
                        placeholder='00' 
                        step={5}
                        min={5}
                        max={60}
                        />
                        



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
                    <Play size={24} />
                    começar
                </StarCoutdownButton>

            </form>
        </HomeContainer>

    )
}