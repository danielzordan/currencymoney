import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Currencies } from './components/Currencies';
import { FinanceProvider } from './FinanceContext';

export function App() {
  return (
    <FinanceProvider>
      <Header />
      <Currencies />
      <GlobalStyle />
    </FinanceProvider>
  );
};
