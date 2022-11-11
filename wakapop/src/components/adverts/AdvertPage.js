import { useEffect, useState } from 'react';
import Layout from '../layout/Layout.js';
import { deleteAdvertById, getAdvertById } from './service.js';
import './AdvertsPage.css';
import { useNavigate, useParams } from 'react-router-dom';

const AdvertPage = ({ onLogout }) => {
  const [advert, setAdvert] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const execute = async () => {
      try {
        const advert = await getAdvertById(id);
        setAdvert(advert);
      } catch (error) {
        if (error.status === 404) {
          navigate('404');
        }
      }
    };
    execute();
  }, [id, navigate]);

  const forSale = (sale) => {
    return sale ? 'Vendo' : 'Compro';
  };

  const handleDeleteAd = () => {
    deleteAdvertById(id);
    navigate('/adverts');
  };

  return (
    <div>
      <Layout onLogout={onLogout}>
        <div className="advertsPage">
          <h1>Detalle del anuncio</h1>

          <ul className="advert-container">
            <li>
              <div>{!advert.photo && 'No hay foto'}</div>
              {advert.photo && <img width="50%" src={advert.photo} alt="Product" />}
            </li>
            <li>
              <strong>{advert.name}</strong>
            </li>
            <li>{forSale(advert.sale)}</li>
            <li>Precio: {advert.price}€</li>
            <li>Tags: {advert.tags}</li>
          </ul>
          <button onClick={handleDeleteAd}>Borrar anuncio</button>
        </div>
      </Layout>
    </div>
  );
};

export default AdvertPage;
