import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

//digo q esse conatiner sera uma view (como styled.view) e estilizo ela
//justamente defino o tipo com o  styled.tipo pq eu vou chamar depois como Tag ai tenho q saber q tag é

//esse safeareaview sempre é usando em view que estejam no header para ter o cuidados com as diferneteas telas
export const Container = styled(SafeAreaView)`
   flex: 1;
    /* Faço aqui a destruturação de theme */
     /* Faço aqui a destruturação de theme */
   background-color: ${({ theme }) => theme.COLORS.GRAY_600};
   padding: 24px;
`;
