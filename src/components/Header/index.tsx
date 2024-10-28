import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoImg from '@assets/logo.png';


type Props = {
    showBackButton?: boolean;
    //vou adcionar isso caso eu queira colocar o bottom de voltar
    //esse ? é para dizer q é opticonal e o : é do tipo
}

//eu deixo como falso ate passar com props V ou F
//aqui eu desestruturo (deixando lofo como F - para nao mostrar a seta de voltar, ai se eu chmar ele (em outra tela) eu passo como V para mostrar) e informo : o tipo
export function Header({ showBackButton = false }: Props) {
    
    const navigation = useNavigation();
    
    //voltar
    function handleGoBack(){
        //apenas com ele eu vou voltando pilhas
        // navigation.goBack(); - entao user o navigation q eu posso escolher pra onde voltar
        // posso usar tb o navigation.popToTop() q volta pro início, mas assim eu n consifo expecificar a rota
        navigation.navigate('groups')

    }
    return (
        <Container>
            {showBackButton && // se o showBackButton for V entao mostre o que ta em baixo
                <BackButton onPress={handleGoBack}>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}