import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { IssuesContextProvider } from './context/IssuesContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <IssuesContextProvider>
          <Router />
        </IssuesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
