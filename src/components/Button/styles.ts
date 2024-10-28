import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

//CRIO UM TIPAGEM JA EXPOTANDO ELA
// defino dois tipos de button um primary e outro secondary e exporto ele
export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

//defino o tipo 
type Props = {
    type: ButtonTypeStyleProps;
}

//aqui o meu style vai ser baseado no tipo q definir ai em cima <Props>
//mas onde eu for usar esse Container eu devo passar algum type pra ele ( que nesse caso é o primay e secund)
//pq ele é do typo Props (nome q definir)  e fica aguardando esse valor
export const Container = styled(TouchableOpacity) <Props> `

  min-height: 56px;
  min-width: 56px; 
  /*aqui faço a condição pros dois tipos de button ao qual vou exportar*/
  background-color: ${({ theme, type }) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK // Coloque a cor de fundo para 'SECONDARY' aqui
  };

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

//consigo destrututar mais aind para n ficar repetindo esse{({ theme }) => 
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`
