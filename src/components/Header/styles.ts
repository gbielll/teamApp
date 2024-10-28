import styled from "styled-components/native";
//icones
import {CaretLeft} from 'phosphor-react-native'

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;


//eu uso o touchanleOpacity pata tornar o BackIcon (que era apenas um button) em algo clicável
export const BackButton = styled.TouchableOpacity`
  flex: 1 /*macete para empurrar as coisas*/
`;


//esse componentes apos o styled. sao os componnetes padroes que representa i que eu quero 
//estilizar, se nao é um componente do react native eu posso usar com (para informar ele)
export const BackIcon = styled(CaretLeft).attrs(({theme})=>({
  size:32,
  color: theme.COLORS.WHITE,
  marginTop: 20
}))``;