import { useEffect, useState } from 'react';
import Layout from '../layout/Layout.js';
import { getAdverts } from './service.js';
import './AdvertsPage.css';

const AdvertsPage = ({ onLogout }) => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const adverts = await getAdverts();
      setAdverts(adverts);
    };
    execute();
  }, [adverts]);

  const forSale = (sale) => {
    return sale ? 'Vendo' : 'Compro';
  };

  return (
    <Layout onLogout={onLogout}>
      <div className="advertsPage">
        {adverts.length ? (
          <div>
            <h1>Listado de anuncios</h1>
            <ul>
              {adverts.map((advert) => (
                <div className="advert-container">
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
                      <li>Tags: {advert.tags.join(', ')}</li>
                    </ul>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          'No hay anuncios'
        )}
      </div>
    </Layout>
  );
};

export default AdvertsPage;
