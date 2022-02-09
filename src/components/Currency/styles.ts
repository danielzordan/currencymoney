import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 7rem;

  background: var(--gray-light);
  border-radius: 0.5rem;

  padding: 0.8rem;
`;

export const Content = styled.div`
  height: 100%;
  border-radius: 0.3rem;
  border: 1px solid var(--orange);
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;

  margin-left: 0.3rem;
  margin-top: -0.8rem;

  background: var(--gray-light);
`;

export const Title = styled.a`
  color: var(--orange);
`;