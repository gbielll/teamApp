//componente que pegga o grupo filtrado pleo time


import {playersGetByGroup} from './playersGetByGroup'

//nessa função vou precisasr enviar quando eu chamar ele dois valores
//nome do grupo e nome do time

export async function playersGetByGroupAndTeam(group:string, team: string){

    try {
        //aqui eu chamo a função do outro componente que contem todos os grupos e armazeno no storage
        //mas essa função pede um parametro que é o nome do grupo
         const storage = await playersGetByGroup(group); 

         //aqui eu chamo todos os jogadores, mas faço um filtro com o storage (peguei todos os jogadores no comando ai em cime da função playergetbygroup)
         /* quando os jogadores sao salvos, eles sao salvos como um obj q tem o nome, group e team,
         ai eu vou chamar a função do componente que salva todos esses jogadores (la no storage), mas esse componente (esse aqui desse arquivis)
         espera um parametro (na vrdd dois) que é o team, ai eu faço uma filtragem para retonar apenas desse team (o team que chega aqui ness componente) e armazeno tudo
         na const players*/

         const player = storage.filter(player => player.team === team);
         
         return player;
         
    } catch (error) {
        throw error;
    }
}