import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Container } from './styles'
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { useEffect, useState, useCallback } from 'react';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';



export function Grups() {
  //sempre deixe explicito o tipo de array com o <>
  const [groups, setGroups] = useState<string[]>([]);

  //aqui consigo ter acesso a todas as rotas globais que declarai
  //vou pegar as oções de dentro do import do useNavigation e amarzenar oq eu quero numa const
  // navigator.navigate('players', {group: 'Galera'})
  const navigation = useNavigation();

  function handleNewGroup() {
    //aqui consigo acessar as rotas disponíveis com o const.navigate
    navigation.navigate('new');
  }

  //metodo para buscar os grupos armazendos ja no dispositivo

  async function fetchGroup() {
    try {
      //nesse date vai receber todos os dados ja armazenados  la no storage
      const data = await groupsGetAll();
      setGroups(data); //esse setGroups é o estado q atualiza a lista desse componente
    } catch (error) {
      console.log(error)
    }
  }

  //essa função apos eu clicar na turma ele me leva para atela onde ta o nome do pessoal 
  function handlerOpenGroup(group: string) {
    navigation.navigate('players', { group }); //envio o nome da turma
  }

  /*ele sempre executada decorrente toda vez q o calor de dentro do array mudar (se eu mudar de tela e voltar, ele nao executa de novo pq ele ja executou). se for vazio executa apenas uma vez
  useEffect(()=>{
   fetchGroup(); 
  },[])*/
  //para evitar esse erro de redenrizar apenas uma vez e depois nao redenrizar com o useEfection apos mudar de tela usamos outros dois hook - useCallback(memoriza as referenciar para garantir q a execução nao seja executada varias vezes)  e useFocusEffect
  //ele executa toda vez q chama essa tela diferente do useEffection q so execiuta uma vez
  useFocusEffect(useCallback(() => {
    fetchGroup();
  }, []))

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={item => item} //uso so item como id pq na lista so tem string, mas cuidado - LEMBREM  Q ESSE ITEM É SEMPRE REFERENCIADO PELO OQ VEM DE DATA
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => handlerOpenGroup(item)} //funçãoo para abrir a tela com o grupo e seus jogadores, eu mando o item pq essa função espara o nome da turma para enviar para tela de players para la setar o nome da turma da tela
          />
        )}
        //ISSO ESTILIZA O LISTEMPTYCOMPONET  - && SE TAL COISA FOR V ENTAO FAÇA
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty
            message=" Que tal cadastrar uma primeira turma?"
          />
        )}
      />

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </Container>
  );
}








/*defino aqui de novo com os nomes das rotas q tenho dispinpivel
type RootParamList = {
  //tem q ser  o mesmo nome das rotas q definir no app.route
  groups: undefined, //como esse componente n tem parametro para enviar eu deixo em undefined
  new: undefined,
  players: { //aqui eu tenho parametros para passar, logo eu passo o componende que vai receber esses parametros
    group: string; // aquela ideial de passar valores por rota para outra tela - navigator.navigate('players', {group: 'Galera'})
  }
}

type Props = {
  //defino o navigtion com o comando do react onde as confi (NativeStackNavigationProp) falo que é do tipo das rotas que tenho
  //RootParamList e aviso em que tela eu to'groups'
  navigation: NativeStackNavigationProp<RootParamList, 'groups'>
}

/*Posso acessar as rotas através das props fornecidas pelo contexto do index 
(o componente pai que gerencia as rotas e disponibiliza o container de navegação).
export function Grups({ navigation }: Props) {*/