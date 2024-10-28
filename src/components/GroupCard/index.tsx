import { Container, Icon, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';
// Aqui você usa TouchableOpacityProps, que contém as propriedades de um TouchableOpacity.
type Props = TouchableOpacityProps & {
  title: string;
}

// O ...rest permite passar outras propriedades que não estão explicitamente no tipo Props.
export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
