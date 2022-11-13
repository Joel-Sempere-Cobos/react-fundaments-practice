import './Filters.css';
/* import Slider from 'rc-slider';
 */ import 'rc-slider/assets/index.css';
import { useState } from 'react';

const Filters = () => {
  const [name, setName] = useState('');
  const [sale, setSale] = useState(null);
  const [tags, setTags] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  console.log(name);
  console.log(sale);
  console.log(tags);
  console.log(minPrice);
  console.log(maxPrice);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeSale = (event) => {
    const isForSale = event.target.value;
    setSale(isForSale);
  };

  const handleChangeTags = (event) => {
    const tagsArray = Array.from(event.target.selectedOptions);
    let tags = tagsArray.map((option) => {
      return option.value;
    });
    tags = tags.filter((tag) => tag !== '');

    setTags(tags);
  };

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  const handleChangeMaxPrice = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const isDisabled = () =>
    (!name && !tags.length && sale === '' && !minPrice && !maxPrice) || isFetching;

  return (
    <form className="adverts-filters-container" onSubmit={handleSubmit}>
      <div className="adverts-filters">
        <div>
          <label htmlFor="byName">Por nombre</label>
          <input type="text" name="byName" id="byName" onChange={handleChangeName} />
        </div>

        <div>
          <fieldset className="filter-fieldset-radio" onChange={handleChangeSale}>
            <legend>Tipo de anuncio:</legend>

            <label htmlFor="bySell">Venta</label>
            <input type="radio" name="bySell" id="bySell" value={true} />

            <label htmlFor="byBuy">Compra</label>
            <input type="radio" name="bySell" id="byBuy" value={false} />

            <label htmlFor="All">Todos</label>
            <input type="radio" name="bySell" id="All" value="" />
          </fieldset>
        </div>

        <div className="byPrice">
          <label htmlFor="byPrice">Por precio</label>
          <input
            type="number"
            name="byPrice"
            id="byPriceMin"
            placeholder="Precio mínimo"
            onWheel={(event) => event.currentTarget.blur()}
            onChange={handleChangeMinPrice}
          />
          <input
            type="number"
            name="byPrice"
            id="byPriceMax"
            placeholder="Precio máximo"
            onWheel={(event) => event.currentTarget.blur()}
            onChange={handleChangeMaxPrice}
          />

          {/* <Slider value={[0, 1000]} range /> */}
        </div>

        <div>
          <label htmlFor="byTags">Por tags</label>
          <select
            name="byTags"
            id="byTags"
            style={{ padding: '20px' }}
            multiple
            onChange={handleChangeTags}
          >
            <option value="" id="none">
              ---
            </option>
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

        <button type="submit" disabled={isDisabled()}>
          Filtrar
        </button>
      </div>
    </form>
  );
};

export default Filters;
