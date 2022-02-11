import styled from 'styled-components';

type VariationProps = {
  positive: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 6rem;

  background: var(--gray-light);
  border-radius: 0.5rem;

  padding: 0.8rem;
`;

export const Content = styled.div`
  height: 100%;
  border-radius: 0.3rem;
  border: 1px solid var(--orange);
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;

  margin-left: 0.3rem;
  margin-top: -0.8rem;

  background: var(--gray-light);
`;

export const Label = styled.p`
  color: var(--orange);
`;

export const CurrencyContent = styled.div`
  display: grid;
  grid-gap: 5rem;
  justify-items: stretch;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 750px) {
    grid-gap: 3rem;
  }

  padding: 1rem;
  font-size: 1.3rem;
`

export const ValuesLabel = styled.p`
  color: var(--font-color);
`;


export const Values = styled.p`
  color: var(--yellow);
`;

export const Variation = styled.p<VariationProps>`
  ${props => props.positive ? "color: var(--green);" : "color: var(--red);"};
`;