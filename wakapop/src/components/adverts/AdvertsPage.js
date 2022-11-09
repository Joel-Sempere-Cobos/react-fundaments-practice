import { useEffect, useState } from 'react';
import { getAdverts } from './service.js';

const AdvertsPage = ({ onLogout }) => {
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
          <button onClick={onLogout}>Logout</button>
          <h1>Listado de anuncios</h1>
          <ul>
            {adverts.map((advert) => (
              <li key={advert.id}>
                <ul>
                  <li>
                    <img width="30%" src={advert.photo} alt="Product" />
                  </li>
                  <li>
                    <strong>{advert.name}</strong>
                  </li>
                  <li>{forSale(advert.sale)}</li>
                  <li>Precio: {advert.price}€</li>
                  <li>Tags: {advert.tags}</li>
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
