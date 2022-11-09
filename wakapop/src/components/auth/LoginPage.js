import { useState } from 'react';
import { login } from './service.js';

const LoginPage = ({ onLogin, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, password }).then(() => onLogin());
  };

  const isDisabled = () => !(email.length && password.length);

  return (
    <div>
      <h1>Login to Wakapop</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" onChange={handleChangeEmail} value={email} />
        <input type="password" name="password" onChange={handleChangePassword} value={password} />
        <button type="submit" disabled={isDisabled()}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
