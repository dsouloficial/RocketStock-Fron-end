import { Container } from './styles';

export function Feature({ icon: Icon, title, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={42} />}

      <footer>
        {title}
      </footer>
    </Container>
  );
};