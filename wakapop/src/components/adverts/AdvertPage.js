import { useEffect, useState } from 'react';
import Layout from '../layout/Layout.js';
import { deleteAdvertById, getAdvertById } from './service.js';
import './AdvertsPage.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const AdvertPage = ({ onLogout }) => {
  const [advert, setAdvert] = useState('');
  const [deleteAd, setDeleteAd] = useState(false);
  const [deletedAd, setDeletedAd] = useState(false);
  const location = useLocation();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const execute = async () => {
      try {
        const advert = await getAdvertById(id);
        setAdvert(advert);
      } catch (error) {
        if (error.status === 404) {
          const to = location.state?.from?.pathname || '/404';
          navigate(to, { replace: true });
        }
      }
    };
    execute();
  }, [id, navigate, location]);

  const forSale = (sale) => {
    return sale ? 'Vendo' : 'Compro';
  };

  const askDeleteAd = () => {
    setDeleteAd(!deleteAd);
  };

  const handleDeleteAd = () => {
    deleteAdvertById(id);
    setDeletedAd(true);
    setTimeout(() => {
      navigate('/adverts');
    }, 1000);
  };

  return (
    <div>
      <Layout onLogout={onLogout}>
        <div className="advertsPage">
          <h1>Detalle del anuncio</h1>

          <ul className="advert-container">
            <li>
              <div>{!advert.photo && 'No hay foto'}</div>
              {advert.photo && (
                <img width="50%" className="photo-container" src={advert.photo} alt="Product" />
              )}
            </li>
            <li>
              <strong>{advert.name}</strong>
            </li>
            <li>{forSale(advert.sale)}</li>
            <li>Precio: {advert.price}€</li>
            <li>Tags: {advert.tags ? advert.tags.join(', ') : advert.tags}</li>
          </ul>
          <div className="delete-button">
            {!deleteAd && <button onClick={askDeleteAd}>Borrar anuncio</button>}
            {deleteAd && (
              <div className="delete-confirmation">
                <p> ¿Seguro? No podrás recuperar este anuncio.</p>
                <div>
                  <button onClick={handleDeleteAd}>Confirmar</button>
                  <button onClick={askDeleteAd}>Cancelar</button>
                </div>
              </div>
            )}
            {deletedAd && <div>¡El anuncio ha sido borrado!</div>}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AdvertPage;
