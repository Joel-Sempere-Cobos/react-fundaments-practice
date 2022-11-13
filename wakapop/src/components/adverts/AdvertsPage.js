import { useEffect, useState } from 'react';
import Layout from '../layout/Layout.js';
import { getAdverts } from './service.js';
import './AdvertsPage.css';
import { Link } from 'react-router-dom';
import Filters from './Filters.js';

const AdvertsPage = ({ onLogout }) => {
  const [adverts, setAdverts] = useState([]);
  const [filters, setFilters] = useState([]);
  adverts.tags ? console.log(Array.from(adverts[0].tags)) : console.log('na');

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

  const getAdvertsFilter = (filters) => {
    setFilters(filters);
  };

  let filteredAdverts = adverts;

  filteredAdverts = adverts.filter((advert) => {
    return (
      !filters.length ||
      ((filters[0] === '' || filters[0] === advert.name) &&
        (filters[1] === '' || filters[1] === advert.sale) &&
        (filters[2] === null || filters[2] <= advert.price) &&
        (filters[3] === null || filters[3] >= advert.price)) /* &&
        (filters[4] === [] || filters[4] === Array.from(advert.tags)) */
    );
  });

  return (
    <Layout onLogout={onLogout}>
      <div className="advertsPage">
        {adverts.length ? (
          <div>
            <h1>Listado de anuncios</h1>
            <Filters getAdvertsFilter={getAdvertsFilter} />
            <ul>
              {filteredAdverts.map((advert) => (
                <li key={advert.id}>
                  <Link className="advert-detail-link" to={`/adverts/${advert.id}`}>
                    <ul className="advert-container">
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
