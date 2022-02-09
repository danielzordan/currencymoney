import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  background: var(--primary);

  margin: 2rem;
  border-radius: 0.5rem;

  padding: 0.5rem 1rem 1rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--orange);
`;

export const Source = styled.a`
  color: var(--orange);
  width: 8rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 1rem;
  justify-items: stretch;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);  
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;