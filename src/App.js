import { createGlobalStyle } from "styled-components";
import Router from "./components/Router";

const GlobalStyle = createGlobalStyle`
  body {
    all:unset;
    color: hsl(4, 6%, 90%);
    background-color: #3a3834;
    font-family: 'Lato', sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
