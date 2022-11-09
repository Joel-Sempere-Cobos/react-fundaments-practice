import { useEffect, useState } from 'react';
import { getAdverts } from './service.js';

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  const forSale = (sale) => {
    return sale ? 'Vendo' : 'Compro';
  };

  return (
    <div className="advertsPage">
      {adverts.length ? (
        <div>
          <h1>Listado de anuncios</h1>
          <ul>
            {adverts.map((advert) => (
              <li key={advert.id}>
                <ul>
                  <li>{advert.name}</li>
                  <li>{forSale(advert.sale)}</li>
                  <li>{advert.price}</li>
                  <li>
                    <img width="30%" src={advert.photo} alt="Product photo" />{' '}
                  </li>
                  <li>{advert.tags}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        'No hay anuncios'
      )}
    </div>
  );
};

export default AdvertsPage;
