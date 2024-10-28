
//importar fonts
import {useFonts, Roboto_400Regular, Roboto_700Bold} from "@expo-google-fonts/roboto"
//bolinha de carregando
import { ActivityIndicator } from 'react-native';
import { Loading } from '@components/Loading'

//assim com o provider eu mando para todo mundo 
// q ta dentro dele, mas devo definir o theme (a pasta onde ta oq quero prover)
import theme from './src/themes'
import { ThemeProvider } from 'styled-components/native';

//importar a statubar
import { StatusBar } from 'react-native'
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';
import { Routes } from '@routes/index';

export default function App() {
  //logica da carregamento da font para deixar disponivel pata todos - tem q ta na raiz do projeto
  //as fontes nao carregam de primeira, demora um pouco, pra isso colocque em um vetor de estados
  //q verifica se a font foi carregada ou n, ai eu faço uma validação se ? ou : - ele é bolleano - v ou f
  const [fontsLoaded]=useFonts({Roboto_400Regular,Roboto_700Bold});
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
            //sempre em nível de app para ser providenciada para toda aplicação
        barStyle="light-content" // deixo branco os icondes
        backgroundColor="transparent" // tira a cor de fundo
        translucent //macete para poder visualizar os icones e deixar a cor da aplicação de fundo
      />
      { fontsLoaded? <Routes/> : <ActivityIndicator/>}
    </ThemeProvider>
  );
}

