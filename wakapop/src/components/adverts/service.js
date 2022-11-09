import client from '../../api/client.js';

const advertsUrl = '/v1/adverts';

export const getAdverts = () => {
  const url = advertsUrl;
  return client.get(url);
};
