import styled from 'styled-components';

export const Container = styled.header`
  background: var(--primary);
  height: 10rem;
  padding-top: 3.5rem;

  @media (max-width: 750px) {
    padding-top: 2rem;
    height: 12rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 750px) {
    flex-direction: column;
    height: 8rem;
  }
`;

export const HeaderButton = styled.button`
  padding: 0 2rem;
  height: 3rem;

  border: none;
  background: var(--gray-light);
  border-radius: 0.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;