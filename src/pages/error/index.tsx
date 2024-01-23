import { Container } from './styles'
import errorLogo from '../../assets/errorPage.png'

export function ErrorPage(){
    return (
        <Container>
            <div>
                <img src={errorLogo}/>
            </div>
            <div className='text'>
                <h1>Error 404 - Page not found</h1>
                <p>The requested page does not exist</p>
            </div>
        </Container>
    )
}