import { ButtonIcon } from '@components/ButtonIcon';
import {Container, Icon, Name} from './styles'
//vou reaproveitar o componente q criei dinamico de icon
type  Props = {
    name: string;
    //vou deixar a função para remover - mas quando eu chamar essa função vou ter q passar todas essas props ate a função
    onRemove: ()=> void;
}

export function PlayerCard({name, onRemove}: Props){
    return(
        <Container>
            <Icon name= "person"/>
            <Name>
                {name}
            </Name>
            <ButtonIcon
             icon = "close"
             type="SECUNDARY"
             //essa prop é mandada la no ...rest, pra eu n ficar colocando varias coisas no type no button icon
             //é justamente aqui que chama a função... com o OnPress por isso eu mando a função pra ca
             onPress={onRemove}
            />
        </Container>
    )
}