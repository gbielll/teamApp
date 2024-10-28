import { TouchableOpacity } from "react-native"; // Importa o componente de botão TouchableOpacity do React Native
import styled from "styled-components/native"; // Importa a biblioteca styled-components para criação de estilos personalizados

// Define o tipo FilterStyleProps, que será utilizado para os estilos e aceita a propriedade opcional "isActive"
export type FilterStyleProps = {
    isActive?: boolean; // Variável booleana que indica se o botão está ativo (true) ou não (false)
}

// Define o Container como um componente estilizado usando TouchableOpacity, passando o tipo FilterStyleProps
// esse container vai ficar esperando um isActive  = V OU F
// EU USSO ESSE && EM VALORES BOOLEANOS se é V (entao) &&
//se for falso ele coloca sem borda tranparente
export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  /* consigo destruturar o isActive pq esse onst é do tipo FILTERSTYLEPROPS*/
  border: 1px solid ${({ theme, isActive }) => isActive ? theme.COLORS.GREEN_700 : 'transparent'};
  border-radius: 4px;
  
  margin-right: 12px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;
  margin-top: 10px;

`

export const Title = styled.Text`
    /* deixar sempre o textoo em caixa alta*/
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD}; 

    /* Define o tamanho da fonte em pixels, conforme o tema */
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px; 

    /* Define a cor do texto como branco, acessando pelo objeto COLORS */
    color: ${({ theme }) => theme.COLORS.WHITE}; 
`

