import { useEffect, useState } from 'react';
import Layout from '../layout/Layout.js';
import { getAdverts } from './service.js';
import './AdvertsPage.css';
import { Link } from 'react-router-dom';
import Filters from './Filters.js';

const AdvertsPage = ({ onLogout }) => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const adverts = await getAdverts();
      setAdverts(adverts);
    };
    execute();
  }, []);

  const forSale = (sale) => {
    return sale ? 'Vendo' : 'Compro';
  };

  return (
    <Layout onLogout={onLogout}>
      <div className="advertsPage">
        {adverts.length ? (
          <div>
            <h1>Listado de anuncios</h1>
            <Filters />
            <ul>
              {adverts.map((advert) => (
                <li key={advert.id}>
                  <Link className="advert-detail-link" to={`/adverts/${advert.id}`}>
                    <ul className="advert-container">
                      {/* <li>
                        <img width="50%" src={advert.photo} alt="Product" />
                      </li> */}
                      <li>
                        <strong>{advert.name}</strong>
                      </li>
                      <li>{forSale(advert.sale)}</li>
                      <li>Precio: {advert.price}€</li>
                      <li>Tags: {advert.tags.join(', ')}</li>
                    </ul>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <Filters />
            No hay anuncios. <Link to="/adverts/new">¡Publica el primer anuncio!</Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdvertsPage;
