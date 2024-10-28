//esse arquvio serve para salvar os dados sem um sobreescrver o outro
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";


export async function groupsGetAll() {
    try {
        //aqui vou buscar as informações que ja estao armazenadas no dispoitivo
        //esse get vai acessar minha chave e pegar todos os conteudos ja salvo la dentro
        const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
        //destrutura o obj q vem tudo em string
        /*aqui eu crio um obj do tipo string[] (um array de string) e falo que é igual (recebe)
          ai q vem - ele pode receber um storage ja destruturado(passo ele como  um obj) se n for vazio se n ele receber um array vazio
          pq esse group so pode receber uma string ou um []
        */
        const groups: string[] = storage ? JSON.parse(storage) : [];
        //agora atendo os dados eu retorno pra qm chamar essa função em outro componente
        return groups
    } catch (error) {
        throw error; 
    }
}