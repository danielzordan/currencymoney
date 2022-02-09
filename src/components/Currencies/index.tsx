import { Currency } from '../Currency'; 
import { Content, Container, Divider, Header, Source } from './styles';

export function Currencies(){
  return (
    <Container>
      <Header>
        <Divider />
        <Source>Source: BRL</Source>
      </Header>
      <Content>
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
      </Content>
    </Container>
  );
}