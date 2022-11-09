import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import storage from './utils/storage.js';
import { setAuthorizationHeader } from './api/client.js';

const accessToken = storage.get('Auth');
setAuthorizationHeader(accessToken);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App isInitiallyLogged={!!accessToken} />
  </React.StrictMode>
);
