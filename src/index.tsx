import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/HomePage';
import { createGlobalStyle } from 'styled-components';
import { RESOURCES } from './assets/css/Resources';

const GlobalStyles = createGlobalStyle`
  html {
    --background: ${RESOURCES.lightgray};
  }
`;

const App = (): JSX.Element => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));