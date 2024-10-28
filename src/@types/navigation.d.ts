export declare global{ // deixar global os nomes das rotas para conseguir acessar
    namespace ReactNavigation{
        interface RootParamList{
            //tem q ser  o mesmo nome das rotas q definir no app.route
            groups: undefined, //como esse componente n tem parametro para enviar eu deixo em undefined
            new: undefined,
            players:{ //aqui eu tenho parametros para passar, logo eu passo o componende que vai receber esses parametros
                group: string; // aquela ideial de passar valores por rota para outra tela - navigator.navigate('players', {group: 'Galera'})
            }
        }
    }
}