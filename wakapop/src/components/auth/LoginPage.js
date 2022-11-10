import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { login } from './service.js';
import './LoginPage.css';

const LoginPage = ({ onLogin, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      const to = location.state?.from?.pathname || '/';
      navigate(to, { replace: true });
    } catch (error) {
      setError(error);
      setIsFetching(false);
    }
  };

  const isButtonEnabled = () => email.length && password.length && !isFetching;

  return (
    <div className="form-page-container">
      <h1>Login to Wakapop</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="email-form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChangeEmail}
            value={email}
            autoFocus
          />
        </div>
        <div className="password-form">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChangePassword} value={password} />
        </div>

        <div className="rememberMe-form">
          <label htmlFor="rememberMe">Remember me</label>
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            onChange={handleRememberMe}
            checked={rememberMe}
          />
        </div>
        <div className="submit-form">
          <button type="submit" disabled={!isButtonEnabled()}>
            Login
          </button>
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
