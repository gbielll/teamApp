import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted: string) {
    try {
        const storedGroups = await groupsGetAll(); //pego todos os grupo
        const groups =  storedGroups.filter(group => group!== groupDeleted);

        //aqui eu nao uso o remove pq eu quero manter os outros grupos cadastrados, so façõ atualizar o GROUP_COLLETION sem o grupo que nao quero

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
        //aqui eu filtro com o grupo a chave e deleto todo ele - removo o grupo de jogadores que etsao no playercolletion
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);


    } catch (error) {
        
    }
    
}