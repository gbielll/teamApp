import { Container, Title, SubTitle } from './styles'

//deixar o Title dinmico para receber os "texto deles"
type Props ={
  title: string;
  subtitle: string;   
}

export function Highlight({title, subtitle}: Props) {
    return (
        <Container>
            <Title>
                {title}
            </Title>

            <SubTitle>
                {subtitle}
            </SubTitle>
        </Container>
    )
}