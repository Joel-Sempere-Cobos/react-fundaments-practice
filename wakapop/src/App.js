import { useState } from 'react';
import './App.css';
import AdvertsPage from './components/adverts/AdvertsPage.js';
import LoginPage from './components/auth/LoginPage.js';
import storage from './utils/storage.js';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => {
    setIsLogged(false);
    storage.remove('Auth');
  };

  return (
    <div className="App">
      {isLogged ? <AdvertsPage onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
