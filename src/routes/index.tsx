import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { View } from 'react-native'
import{useTheme} from 'styled-components/native'

//dentro desse navigationcontainer é onde a gnte carrega nossas rotas de aplicação ja criadas que vamos usar

//aqui ta o contexto das rotas logo esse arquvio q deve ta sendo chamado no APP RAIZ como princpal
export function Routes() {
    //aqui vou fazer o macete para nao ficar aquela tela branca quando muda de tela
    //vou pegar as cores do theme de uma forma destruturada
    const {COLORS} = useTheme();
    return (
        <View style={{flex: 1, backgroundColor: COLORS.GRAY_600}}>
            <NavigationContainer>
                {/* assim eu providencio a rota para todos nossas componentes ( é o pai que libera as rotas do filho) - e como filho dele temos as rotas que criamo*/}
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}

