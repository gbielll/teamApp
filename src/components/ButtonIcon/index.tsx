import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import {MaterialIcons} from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
    //isso permite eu visualizar os icones
    icon: keyof typeof MaterialIcons.glyphMap; // aqui eu defino a tipagem de icon baseado em outra tipagem de incon que retonar para ele todos os icones
    type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon
                name={icon}
                type={type}
            />
        </Container>
    )
}
