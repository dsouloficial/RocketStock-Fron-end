import { useNavigate } from "react-router-dom";

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { Container, Header, Item } from "./styles";
import { Button } from '../../components/Button';

export function Product() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const products = Array(20)
    .fill({ name: 'Produto' })
    .map((item, index) => (`${item.name} ${index + 1}`));

  return (
    <Container>
      <Header>
        <h1>Produtos</h1>

        <nav>
          {
            [USER_ROLE.ADMIN].includes(user.role) && <Button title="Cadastrar" />
          }
          <Button title="Voltar" onClick={() => navigate('/')} />
        </nav>
      </Header>

      {
        products.map((product) => (
          <Item key={product}>
            <span>{product}</span>
          </Item>
        ))
      }
    </Container>

  )
}