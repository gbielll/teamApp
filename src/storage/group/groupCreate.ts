import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/AppError";

//vou receber os valoes quando eu chemar esse componente por essa string newGroup
export async function groupCreate(newGroup: string) {
    try {
        //vou rertonar aquela função q fiz q retonar todos os dados sem ter o risco de sobrscrever - o get
        const storedGroups = await groupsGetAll(); // retorno para storedGroups uma função que cirei em outro commponente

        //verificar se ja exste uma turma criada com o memso nome
        //verifico se ja existe um nome parececido com o () ele 
        //pega o valor de dentro do newGroup e validar se ja ha um nome dentro de storedGroups
        //qm faz isso tudo é o includes. logo O groupAlreadyExists é um valor booelano V OU F
        const groupAlreadyExists = storedGroups.includes(newGroup)
        if (groupAlreadyExists) {
            throw new AppError("Ja existe um grupo com esse nome"); //vou passar esse erro como construtor para essa class, assim posso acessar em outros ligares
            //esse erro é nosso, ele é interativo pq nos q criamos, doferenre do erro q da mesmo no error do catch
            
            //nom disso e´que la no componente NewGroup quando eu chamo esse compnente aqui
            //para criar, cai aqui nessa validação e se houver um grupo ele cai nessa exerção e retonar la no try catth esse erro - por isso o trrow (retorna o erro onde chamou)
        }

        //eu vou salvar os novos dados mais os ja existente e transformar tudo isso para um texto 
        const storage = JSON.stringify([...storedGroups, newGroup]);

        //esse comando que salvar de forma local no celular e decvo informa uma chave
        //acesso o local onde vou salvar e passo o que vou salvar
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    } catch (error) {
        throw error; //aqui eu lanço o erro para quem chamou
    }
}