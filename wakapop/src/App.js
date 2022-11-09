import { useState } from 'react';
import './App.css';
import AdvertsPage from './components/adverts/AdvertsPage.js';
import LoginPage from './components/auth/LoginPage.js';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => setIsLogged(true);

  return (
    <div className="App">{isLogged ? <AdvertsPage /> : <LoginPage onLogin={handleLogin} />}</div>
  );
}

export default App;
