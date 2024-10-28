import 'styled-components';
import theme from 'src/theme';

//extender a tipagem da pagina de themes q criei COM O STYLED-COMPONENT
declare module 'styled-components/native'{
    //crio uma tipgem baseada no tipo do meu thema
    type ThemeType = typeof theme;  //tipo de ThemeTYPE EU DEFININO PELO TYPEOF Q AVISO Q É DO TIPO Q CRIEI

    //informo qual o coteudo do meu thema, extendnedo ele
    export interface DefaultTheme extends ThemeType{} //VOU extender o que criei
}

//AGORA POSSO USAR ESSE THEME TODAS VEZ Q EU IMPOTAR O import{useTheme} from 'styled-components/native' NO COMPONENTE E DESTRUTURAR ELE