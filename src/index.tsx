import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';

const App = (): JSX.Element => {
  return (
    <div>
      <HomePage/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));