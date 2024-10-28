import { TextInput, TextInputProps } from "react-native"; 
//com isso eu posso acessar o theme que criei de estilização - aqui é outra forma de acessar sem ser pelo style
import {useTheme} from 'styled-components/native'
import {Container} from './styles';

//dessa forma eu passo logo tudo do tipo de TextInputProps q ja é um tipo defino do react q tem tudo
export function Input({...rest}: TextInputProps){
    //const para acessar o theme
    // const theme = useTheme(); MAS POSSO DESTRUTURAR PARA PEGAR APENAS A INFORMÇÃO DE ESTILIZAÇAOO QUE QUERO SEM PEGAR TODAS
    const {COLORS} = useTheme();
    return(
        <Container 
         placeholderTextColor={COLORS.GRAY_300}
        {...rest}
        />
    )
}