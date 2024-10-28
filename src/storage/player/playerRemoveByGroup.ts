import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerRemoveByGroup(playerName: string, group: string) {
   try {
    
   //vou pegar todo mundo do grupo
   const storage = await playersGetByGroup(group);
   //agor vou filtar com o nome - pegando todos e armazenado no filterred menos o nome q quero remover
   const filtered = storage.filter(player => player.name !== playerName);
   const players = JSON.stringify(filtered); // retorno todo mundo em  um string
     
   await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players); // apos remover adciono de voltar geral mas sem o cara que excluir
} catch (error) {
    throw error;
   }   
}