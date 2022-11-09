import { useState } from 'react';
import { login } from './service.js';

const LoginPage = ({ onLogin, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const handleRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login({ email, password }, rememberMe);
    onLogin();
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
        <div>
          <label htmlFor="rememberMe">Remember me</label>
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            onChange={handleRememberMe}
            checked={rememberMe}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
