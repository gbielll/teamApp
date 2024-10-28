import { Container, Title, ButtonTypeStyleProps} from './styles'
import { TouchableOpacityProps, Text } from 'react-native'

//defino os tipos com tudo o q o TouchableOpacityProps, mesmo o CONTANIR LA NO STYLE SENDO DEFINIDO COMO TOUCHABLEopacity, eu tenho q garantir que os componente title tb sejam
type Props = TouchableOpacityProps &{
    title: string;
    //eu deixo opcional o tipo, pq ja vou deixar como pricipal o primary
    //assim eu reaproveito a tipagem  do ButtonTypeStyleProps - pq tava mais pra fazer conf de estilos por isso ta no styles.ts - q fiz no estilo
    //é opcional pq se eu n for usar o Vermelho button vai ser o Verde button
    type?: ButtonTypeStyleProps //afirmo que o type vai ser tb do tipo ButtonTypeStyleProps q pode ser PRIMARY OU SECUNDY
}
 //eu deixo opcional o tipo, pq ja vou deixar como pricipal o primary
export function Button ({title, type ='PRIMARY', ...rest}: Props){
    return(
        <Container type={type} {...rest}> 
         {/* eu devo passar o type pq na estilização dele ele espera um type pq é do tipo q definir q tem yum type*/}
         <Title>
            {title}
         </Title>
        </Container>
    )
}