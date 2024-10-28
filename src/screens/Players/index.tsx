import { Container, Form, HeaderList, NumbersOfPlayrs } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useState,useRef } from "react";
import { PlayerCard } from "@components/PlayCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

//acessar o paremtro que enviei por rota pra ca - lembra q esse componente na rota eu falei q devria passar um paremetro
import { useRoute, useNavigation } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAnTeam";
import { PLayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";

// mesmo eu passando os paramentros por rota eu devo informar o tipo

type RouteParams = {
    group: string;
}



export function Players() {
    //estado para guardar o nome da pessoa e depois validar para saber se nao é vazio
    const [newPlayerName, setNewPlayerName] = useState('');

    //cria const para saber se o botton ta ativado ou n do TIME A...
    const [team, setTeam] = useState('Time A') //deixo o time a ja marcado de inicio para ter alguem selecionado ao chegar na tela
    //estado para armzenar o numero de jogadores
    //aqui eu digo q o tipo dessa cost é justamente aquela q eu criei
    //se eu so dier q é um array vazio, ele fica sem saber do q é o array
    //por isso devo informar o tipo
    const [players, setPlayers] = useState<PLayerStorageDTO[]>([]);

    //com esse routes eu consifo acessar as rotas passadas
    //lembra q eu passei pra esse rota um valor com o parametro? psr.., eu consigo acessar, destruturando, o paremetro por esse hook
    const route = useRoute();
    //mas vou destruturar para melhor o acessor - se n ia ter usar aqui {route.params.group}
    const { group } = route.params as RouteParams; // com esse as RouteParams(nome da tipagem) eu informo o tipo

    //apos eu deleter o grupo eu retorno para atela inicial
    const navigation = useNavigation();

    //add os player e exibir erros
    async function handleAddPlayer() {
        //condição para o nome do jogador nao ser vazio
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('Nova Pessoa', 'Ei, seu safado! Informa um nome aí.');
        }

        //no meu DTR eu informo q o player ele tem nnome e time
        //com isso eu crio um obj com o nome e o time do jogador para ser enviado ao storage
        const newPlayer = {
            name: newPlayerName,
            team
        }

        try {

            //essa função é do storare que criei para adcionar os jogadores
            //nela (no componete) ele espera dois paremetros
            // um paramentro é um jogador (obj com nome e team) e outro paremtro que é apenas o nome
            await playerAddByGroup(newPlayer, group);

            //retornar todos os jogadores ja cadatsradas na função que criei no storage
            //lembra que nesse componente ele argudar parametro que é o nome do grupo
            //mas nesse grupo ele salva todas as pessoas mas n separa pelo time
            //const players = await playersGetByGroup(group);

            setNewPlayerName('');

            //mesmo o use efection carregando essa pagina, ele so carrega uma vez, entao para garantir q ele carregue toda vez q o team for atualizado, vamos chamar aqui a função
            fetchPlayersByTeam();



        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message); //error personalizado
            } else {
                console.log(error); //esse erro ja é do proprio cod caso nao reconhecermos - erro mais genêrico
                Alert.alert('Nova pessoa', "Erro ao adcionar nova pessoa. Tente novamente mais tarde.");
            }
        }
    }

    //filtrar os times
    async function fetchPlayersByTeam() {
        try {
            //vou chmar a função que eu fiz que faz a filtragem de team por grupo e chamo ela aqui
            //lembre-se q essa função pede dois paramentros e eu envio logo eles aqui
            const playersByTeam = await playersGetByGroupAndTeam(group, team);

            //tendo ja os jogadores filtrados no comnado a cime, eu seto eles no setPlayers q é o states que mostra na tela
            setPlayers(playersByTeam);

        } catch (error) {
            console.log(error);
            Alert.alert('Pessoas', 'Não foi possível carregar as pessoas filtradas do time selecionado')
        }
    }

    //remover pessoa

    async function handlePlayerRemove(playerName: string){
        try {
            //envio o nome e a função para essa função para filtrar e remover
            await playerRemoveByGroup(playerName, group);
            //atualizar o estado da função que exibe na tela
            fetchPlayersByTeam();
        } catch (error) {
            console.log(error);
            Alert.alert('Remover Pessoa', 'Não foi possível remover essa pessoa.');
        }
    }

    async function groupRemove() {
        try {
            await groupRemoveByName(group);
            navigation.navigate('groups')
        } catch (error) {
            console.log(error);
            Alert.alert('Remover grupo', 'Não foi posssível remover o grupo.');
        }
    }

    async function handleGroupRemove() {
        Alert.alert(
            'Remover',
            'Deseja remover o grupo?',
            [
                {text: 'Não', style: 'cancel'},
                {text: 'Sim', onPress:() => groupRemove()}
            ]
        )
    }


    //eu querro q os jogadoes aparecem na tela toda vez q eu abrir a interface
    //use nao pode ser ascn pq ele n aceita, melhor criar uma função ascn e chamar aqui
    useEffect(() => {
        fetchPlayersByTeam()
    }, [team]) // ou seja toda vez q o team mudar o useEffection executa de novo, justanene para garantir 


    return (
        <Container>
            <Header showBackButton />
            {/*passo o showbackButton, se eu so passar assim ele ja entender q é V - eu definir ele como false, mas passando ele fica V*/}
            <Highlight
                // aqui eu uso o hook route, ja destruturado, com isso eu acesso o parametro q enviei por rota pra esse componente
                title={group}
                subtitle="adicione a galera e separe os times"
            />

            <Form>
                <Input
                    onChangeText={setNewPlayerName} //funça~i que atualiaza o input e tudo oq for digitado será armazenado no newPlayerName 
                    placeholder="Nome da pessoa"
                    autoCorrect={false} //desabilota o corretor
                    value={newPlayerName} 
                    returnKeyType="done"//fecha o input depois q termino de figitar as coisas
                /> 
                {/*Vou passar como props o nome do icone que quero usar para ficar mais dinâmico*/}
                <ButtonIcon
                    icon="add"
                    onPress={handleAddPlayer} //função que adcionar o play
                />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']} // Array de times que será exibido na lista
                    keyExtractor={item => item} // Define uma chave única para cada item (o próprio nome do time)
                    renderItem={({ item }) => (
                        <Filter
                            title={item} // Exibe o nome do time no componente Filter
                            isActive={item === team} // Define o time como ativo se ele for igual ao valor atual de 'team' - como padrao no setTeam ta o 'time a' logo a list q redenrizar o time a vai aparecer ele com a bordar VERDE

                            // Altera o estado 'team' para o time selecionado ao clicar
                            // A condição 'isActive' é atualizada para refletir o time ativo
                            onPress={() => setTeam(item)}// Ao clicar, atualiza o estado `team` para Time A ou Time B
                        />
                    )}
                    horizontal // Exibe a lista de forma horizontal
                />
                <NumbersOfPlayrs>
                    {players.length}
                </NumbersOfPlayrs>
            </HeaderList>

            <FlatList
                data={players} //esses players é um array onde tem um obj dos jogadores - nome -team e grou´p 
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item.name}
                        onRemove={() => handlePlayerRemove(item.name)}
                    />
                )}

                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Não há pessoas nesse time."
                    />
                )}

                //tirar o barragem do lado
                showsVerticalScrollIndicator={false}
                //UX - NO FINAL DA LSTA VOU TER ESSE ESPAÇAMENTO
                //POSSOO PASSAR UM ARRAY DE ESTILOS
                //alem disso esse comando estiliza o fletlist 
                contentContainerStyle={[
                    { paddingBottom: 50 },
                    players.length === 0 && { flex: 1 } // se a lista for vazia vou centralizar o texto
                ]}
            />

            <Button
                title="Remover Turma"
                type="SECONDARY"
                onPress={handleGroupRemove}
            />
        </Container>
    )
}