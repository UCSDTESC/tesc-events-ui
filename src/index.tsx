import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { AuthContext } from './auth/AuthContext';

const App = (): JSX.Element => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route element={<AuthenticatedRoute />}>
            <Route path='/profile' element={<ProfilePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

const AuthenticatedRoute = () => {
  const { authenticated } = useContext(AuthContext);
  if (!authenticated) return <Navigate to='/login' replace />

  return <Outlet />
}

ReactDOM.render(<App />, document.getElementById('root'));