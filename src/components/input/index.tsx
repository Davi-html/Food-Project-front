import {Container} from './styles'

interface InputProps {
    name: string
    minLength: number
}

export function Input({name, minLength}:InputProps){

    return(
        <Container 
         placeholder={name}
         minLength={minLength}
        >
        </Container>
        
    )
}