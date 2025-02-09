import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR}; /* Corrigido para usar o peso correto */
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: '#4A8B4A', // Usando a cor do tema para consistência
  weight: 'fill'
}))`
  margin-right: 20px;
`;
