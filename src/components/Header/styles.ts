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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.7rem;
  width: 10rem;
  height: 4rem;

  border: none;
  background: var(--green);
  border-radius: 0.5rem;

  color: var(--primary);
  font-size: 1.3rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;