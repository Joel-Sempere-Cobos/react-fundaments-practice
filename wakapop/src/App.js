import { useState } from 'react';
import './App.css';
import AdvertsPage from './components/adverts/AdvertsPage.js';
import LoginPage from './components/auth/LoginPage.js';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  return (
    <div className="App">
      {isLogged ? <AdvertsPage onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
