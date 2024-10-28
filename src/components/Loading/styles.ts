import styled from "styled-components/native";


export const Container = styled.View `
   flex: 1;
   justify-content: center;
   align-items: center;

   background-color: ${({theme})=> theme.COLORS.GRAY_600};

`

//aqui usamos o ActivityIndicator que é a bolinha de carregamento
//com esse atrrs (usaremos o atrrs quase sempre em componentes que nao sao os padroes do react para estilizar ele) eu estilizo a bolinha, mas pra usar o theme tenho que sempre
//desestruturar ele
//nisso o attrs é usado para estilizar esses componentes entre ()  e o destruturação do theme fican dentro dele do attrs
export const LoadIndicator = styled.ActivityIndicator.attrs(({theme})=>({
   color: theme.COLORS.GRAY_100
}))``;