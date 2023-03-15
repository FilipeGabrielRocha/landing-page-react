import './App.css';
import { AppRoutes } from './pages/routes';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
  }

  ul{
    list-style-type: none;
  }

  a{
    text-decoration: none;
    color: #000;
  }
  html{
    font-size: 62.5%;
  }
`

export default App;
