import { Currency, CurrencyProps, CurrencyLabelProps } from '../Currency'; 
import { Content, Container, Divider, Header, Source } from './styles';

import { api } from '../../api';
import { useEffect, useState } from 'react';

type resultProp = {
  [key: string]: CurrencyProps | string;
  source: string;
};

export function Currencies(){
  const [currencies, setCurrencies] = useState<CurrencyLabelProps[]>([]);
  const [source, setSource] = useState('');

  useEffect(() => {
    const result: resultProp = api.results.currencies;
    const resultParsed = Object.keys(result)
      .filter((key) => key !== 'source')
      .map((key) => ({ ...(result[key] as object), label: key}));
    
    setSource(result.source);
    setCurrencies(resultParsed as CurrencyLabelProps[]);
  }, []);

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