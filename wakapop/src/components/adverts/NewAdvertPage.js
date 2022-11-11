import { useState } from 'react';
import Layout from '../layout/Layout.js';

const NewAdvertPage = ({ onLogout }) => {
  const [name, setName] = useState('');
  const [sale, setSale] = useState(null);
  const [tags, setTags] = useState([]);
  const [price, setPrice] = useState(null);
  const [photo, setPhoto] = useState(null);

  console.log(tags);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeSale = (event) => {
    const isForSale = event.target.value === 'sale' ? true : false;
    setSale(isForSale);
  };
  const handleChangeTags = (event) => {
    const tagsArray = Array.from(event.target.selectedOptions);
    const tags = tagsArray.map((option) => {
      return option.id;
    });

    setTags(tags);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleChangePhoto = (event) => {
    setPhoto(event);
  };

  return (
    <div>
      <Layout onLogout={onLogout}>
        <h1>Crea tu anuncio</h1>
        <form className="adverts-create-container">
          <div className="adverts-create">
            <div>
              <label htmlFor="Name">Nombre</label>
              <input type="text" name="Name" id="Name" onChange={handleChangeName} />
            </div>

            <div>
              <fieldset className="filter-fieldset-radio" onChange={handleChangeSale}>
                <legend>Tipo de anuncio:</legend>

                <label htmlFor="Sell">Venta</label>
                <input type="radio" name="Sell" id="Sell" value={'sale'} />

                <label htmlFor="Buy">Compra</label>
                <input type="radio" name="Sell" id="Buy" value={'buy'} />
              </fieldset>
            </div>

            <div className="Price">
              <label htmlFor="Price">Precio</label>
              <input
                type="number"
                name="Price"
                id="Price"
                onWheel={(event) => event.currentTarget.blur()}
                onChange={handleChangePrice}
              />

              {/* <Slider value={[0, 1000]} range /> */}
            </div>

            <div>
              <label htmlFor="Tags">Tags</label>
              <select
                style={{ padding: '20px' }}
                multiple
                onChange={handleChangeTags}
                name="Tags"
                id="Tags"
              >
                <option value="lifestyle" id="lifestyle">
                  Lifestyle
                </option>
                <option value="mobile" id="mobile">
                  Mobile
                </option>
                <option value="motor" id="motor">
                  Motor
                </option>
                <option value="work" id="work">
                  Work
                </option>
              </select>
            </div>
            <input type="file" name="photo" id="photo" />
          </div>
          <button type="submit">Publicar</button>
        </form>
      </Layout>
    </div>
  );
};

export default NewAdvertPage;
