import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Currencies } from './components/Currencies';

export function App() {
  return (
    <>
      <Header />
      <Currencies />
      <GlobalStyle />
    </>
  );
};
