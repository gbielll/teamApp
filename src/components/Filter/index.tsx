import { TouchableOpacityProps } from 'react-native'
import { Container, Title, FilterStyleProps } from './styles'

//posso extender dois tipos de tipagem para meu dados
//nessa caso expoto uma impagem q criei no style mais a do Touchable, permitando que meus dado tb tenham esse compartamento
//digo tb q é do tipo FilterStyleProps - que permite ter todos os dados do FilterStyleProps (que é so aquele valor de isActive por enqunto) nesses componentes
type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

/* ta vendo que eu to passando o isActive aqui mesmo n tando na
Props ai em cima? é pq eu to extendo tb do (TouchableOpacityProps &  FilterStyleProps)
nesse filter o isActive ta la dentro, por isso devo informar aqui tb, eu consifgo e devo infromar*/

export function Filter({ title, isActive = false, ...rest }: Props) {
    return (
        <Container
            isActive={isActive} //sempre tenho q passar todas as props q defirnir aqui ao chamar esse componente, mas como o isAcive é opcional ? (la no style) eu posso nao passar, alem tb pq ja defino como falso. se eu passar é mais pra dizer q é V
            {...rest}
        >
            <Title>
               {title}
            </Title>
        </Container>
    )
}