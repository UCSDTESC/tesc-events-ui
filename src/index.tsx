import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/HomePage';
import Register from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';

const App = (): JSX.Element => {
  return (
    <div>
      <Register/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));