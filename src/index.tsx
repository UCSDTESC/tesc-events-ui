import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

const App = (): JSX.Element => {
  return (
    <div>
      <ProfilePage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));