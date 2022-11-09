import client, { setAuthorizationHeader } from '../../api/client.js';

export const login = (credentials) => {
  return client
    .post('/auth/login', credentials)
    .then(({ accessToken }) => setAuthorizationHeader(accessToken));
};
