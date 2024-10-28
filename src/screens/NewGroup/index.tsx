import { Header } from '@components/Header'
import { Container, Content, Icon } from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react'
import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'

export function NewGroup() {
    //recuperar o estados ds props passada por rotas do players
    const [group, setGroup] = useState('');

    const navigation = useNavigation();

    async function handleNew() {
        try {
            //validar se foi digitado algo para salvar
            if (group.trim().length === 0) {//esse trim() remove espaços
                return Alert.alert('Novo Grupo', 'Informe o nome da turma.')
            }// se essa fcondição for V ele faz esse retorno e para a escução


            //chamo a função de criaar o grups e passo o valor em string q falei
            await groupCreate(group); //esse group é o nome dos grup q crio
            //aqui como eu definir q a rota players ao ser chamada deve passar um paramentro, entao aqui eu vou passar o paramentro q é dgitado no input
            navigation.navigate('players', { group }); //viu q o nome é igual? eu posso passar apenas group q o react native entende q é group : group

        } catch (error) {
            //aqui eu retorno o meu erro dinamico que fiz, mas valido se esse erro é meu mesmo
            //daquela class q criei de erro, se for meu eu consigo personalizar esse erro com um alert - se for um erro do proprio sostema n consigo

            //lembra q o erro é chamado la no componente da função do groupCreate e retornado pra ca pro catch com throw
            if (error instanceof AppError) { // pego o erro e valido se é instaciado (se é erro do meu  AppError) com o instanceof
                Alert.alert('Novo Grupo', error.message)
            } else {
                //caso n seja um erro genérico meu - nao consigo acessar oq tem no meu AppError - onde ta minhas mensgaem 
                //nisso eu passo um erro genperico
                Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo');
                console.log(error)
            }

        }
    }

    return (
        <Container>
            <Header showBackButton />
            {/*passo o showbackButton, se eu so passar assim ele ja entender q é V - eu definir ele como false, mas passando ele fica V*/}
            <Content>
                <Icon />
                <Highlight
                    title="Nova turma"
                    subtitle="crie a turma para adcinar as pessoas"
                />
                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroup} //pegar o valor digitado e armazenar no group
                />

                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    )
}