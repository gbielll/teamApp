import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PLayerStorageDTO } from "./PlayerStorageDTO";

//pegar os players amarzenados
import { playersGetByGroup } from './playersGetByGroup'

/*aqui vou ter q passar duas informações - quem é o jogador (nome e seu time (no dtr) e gropo) isso será armazenado
no newPlayer que é do tipo PlayerStoregeDTO - fiz essa tipagem em outro arquivo, assim posso reutilizá-la.
e tb devo informar o grup q é do tipo de um string */
export async function playerAddByGroup(newPlayer: PLayerStorageDTO, group: string) {
    try {

        /* PASSOS
          - RECEBO TODOS OS JOAGDORES
          - FACO A VALIDAÇAO E ENTRA NO IF- SE O FI FOR V ELE PARA A EXCUÇÃO
          - SE O IF N FOR V ELE ADCIONA
          */

        //vou agora pegar os players armazenados
        //chamo mas passando um parametro q é justamente o grupo q eu recebo nesse compnente - ideia de paramentros
        const storedPlayers = await playersGetByGroup(group)

        //O storedPlayers ai em cima ele recebe todos os jogadores do grupo
        //vou fazser um filtro nele para saber se tem jogadores iguais
        //os acontece é: eu crio aqui um filtro player para peccorrer, faço a validação se player.name (esse name é dos nomes)
        //ja existente no storedPlayers, e vejo se é igual ao newPlayer.name (newPlayer sao os jogadores novos q chegam nesse componente e esse name é pq esse newPlayer
        //é do tipo DTR q crie e la tem o tipo nome
        //ai se exister alguem com o nome cadastrado, essa const recebe esse nome
        const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name)

        if (playerAlreadyExists.length > 0) { // se al lista dor maior q 0 é pq tem jogador e ele oara a excução aqui
            throw new AppError('Essa pessoa ja está adcionado em um time.');
        }

        //caso tudo dê certo eu aciono no storage o novo play e os ja existente para nao sobrepor
        //esse stringify tranforma tufo pra texto
        const storage = JSON.stringify([...storedPlayers, newPlayer]);


        /* a logica ao passar a chave como string montada é q eu vou manipular  
        o nome da chave de acordo com o group q chegar PLAYER_COLLECTION-group
        assim eu armazeno nessa chave um array de players */

        //aqui tb eu passo o storage q ta com o j=novo jogador e os antigos tb
        //obs que o comando é set aqui ´´ara setar e la no componente get é GET para pegar
        //de dentro dessa chave os valores (joagdores adcionados)
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

    } catch (error) {
        throw (error);
    }
}