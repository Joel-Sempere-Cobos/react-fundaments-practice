import { useState } from 'react';
import './App.css';
import AdvertsPage from './components/adverts/AdvertsPage.js';
import LoginPage from './components/auth/LoginPage.js';
import { logout } from './components/auth/service.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdvertPage from './components/adverts/AdvertPage.js';
import NewAdvertPage from './components/adverts/NewAdvertPage.js';
import RequireAuth from './components/auth/RequireAuth.js';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };
  const handleLogout = () => {
    logout();
    setIsLogged(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        <Route
          path="/adverts"
          element={
            <RequireAuth isLogged={isLogged}>
              <AdvertsPage onLogout={handleLogout} />
            </RequireAuth>
          }
        />

        <Route
          path="/adverts/:id"
          element={
            <RequireAuth isLogged={isLogged}>
              <AdvertPage />
            </RequireAuth>
          }
        />
        <Route
          path="/adverts/new"
          element={
            <RequireAuth isLogged={isLogged}>
              <NewAdvertPage />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Navigate to="/adverts" />} />

        <Route path="/404" element={<div>Not fount 404</div>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
