import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/HomePage';

const App = (): JSX.Element => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));