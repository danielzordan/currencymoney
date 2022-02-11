import { useContext } from 'react';
import { Currency } from '../Currency'; 
import { Content, Container, Divider, Header, Source } from './styles';
import { FinanceContext } from '../../FinanceContext';

export function Currencies(){
  const { currencies, source } = useContext(FinanceContext);
  return (
    <Container>
      <Header>
        <Divider />
        <Source>Source: {source}</Source>
      </Header>
      <Content>
        {currencies.map(currency => <Currency data={currency} />)}
      </Content>
    </Container>
  );
}