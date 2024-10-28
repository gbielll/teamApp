import { createNativeStackNavigator } from '@react-navigation/native-stack'
//pegar as rotas - depencias
//const NativeStack = createNativeStackNavigator();
//mas vou destruturar apenas os tipos de rota q quero para n retornar todas
const { Navigator, Screen } = createNativeStackNavigator();
//o navigation é o nosso contexto de navegação - livro todo


import { Grups } from '@screens/Groups/index';
import { Players } from '@screens/Players';
import { NewGroup } from '@screens/NewGroup';

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                //ele carrega a primeira rota definida - logo essa é a princiapl - mas se eu queiser oura posso definir um initialRouterName ='componente' no navigator
                name="groups" //nome da rota quando eu chamar
                component={Grups} //componente que será renderizado - tenho q importar
            />

            <Screen
                name="new" //nome da rota quando eu chamar
                component={NewGroup} //componente que será renderizado - tenho q importar
            />

            <Screen
                name="players" //nome da rota quando eu chamar
                component={Players} //componente que será renderizado - tenho q importar
            />
        </Navigator>
    )
}