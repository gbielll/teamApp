import AsyncStorage from "@react-native-async-storage/async-storage";
//reaproveitar tipagem
import { PLayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "@storage/storageConfig";


//esse componente ao ser chamando deve recever um paramentro
export async function playersGetByGroup(group: string) {
    try {
        //vou salvar com uma chave dinâmica - essa chave sempre vai variar de acordo com o group q chega
        //OU SEJA VOU SALVAR TODOS OS JOGADRORES NO GRUPO QUE CHEGA - PQ ESSE GRUPO VAI SER UMA FORMA DINÂMICA PRA MUDAR A CHAVE
        //visu - mesmo aqui ele recendo apenas a chave é pq ele ta indo na chave e la dentro pegando os jogadores , pq no outro arquivo q eu adciono os jogadores nessa chave
        //aqui eu so faço acessar a chave e ver quem a la de a acordo com o grup q chega
       const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)
       
       //aqui eu vou criar players decorrente a tipagem (PLayerStorageDTO[] q eu crie em outro arquivo) - mas ai eu
       //vou armazenar nele o storage ai de cima se houver valor, se n eu coloco um array vazio
       const players : PLayerStorageDTO[] = storage ? JSON.parse(storage): [];
       
       return players;
    } catch (error) {
       throw error; 
    }
}