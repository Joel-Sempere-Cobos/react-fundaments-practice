import { useState } from 'react';
import { login } from './service.js';

const LoginPage = ({ onLogin, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);
  const resetError = () => setError(null);

  const handleRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetError();
      setIsFetching(true);
      await login({ email, password }, rememberMe);
      onLogin();
    } catch (error) {
      setError(error);
      setIsFetching(false);
    }
  };

  const isButtonEnabled = () => email.length && password.length && !isFetching;

  return (
    <div>
      <h1>Login to Wakapop</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" onChange={handleChangeEmail} value={email} />
        <input type="password" name="password" onChange={handleChangePassword} value={password} />
        <button type="submit" disabled={!isButtonEnabled()}>
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
      {error && (
        <div className="error-message" onClick={resetError}>
          {error.message}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
