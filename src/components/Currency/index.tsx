import { 
  Container, 
  Content, 
  CurrencyContent, 
  LabelContainer, 
  Label,
  Values,
  Variation,
  ValuesLabel,
} from './styles';

export type CurrencyProps = {
  name: string;
  buy: number | null;
  sell: number | null;
  variation: number | null;
}
export interface CurrencyLabelProps extends CurrencyProps {
  label: string;
}

interface ICurrency {
  data: CurrencyLabelProps
}

export const Currency: React.FC<ICurrency> = ({data}) => {
  return <Container>
    <Content>
      <LabelContainer>
        <Label>
          {data.label}
        </Label>
      </LabelContainer>
      <CurrencyContent>
        <ValuesLabel>
            BUY: <Values>{data.buy || '----'}</Values>
        </ValuesLabel>

        <ValuesLabel>
            SELL: <Values>{data.sell || '----'}</Values>
        </ValuesLabel>
        <ValuesLabel>
          VAR: 
          <Variation positive={!!(data.variation) && data.variation > 0}>
            {data.variation}
          </Variation>
        </ValuesLabel>
      </CurrencyContent>
    </Content>
  </Container>
}