import './Filters.css';

const Filters = () => {
  return (
    <form className="adverts-filters-container">
      <div className="adverts-filters">
        <div>
          <label htmlFor="byName">Por nombre</label>
          <input type="text" name="byName" id="byName" />
        </div>

        <div>
          <fieldset className="filter-fieldset-radio">
            <legend>Tipo de anuncio:</legend>

            <label htmlFor="bySell">Venta</label>
            <input type="radio" name="bySell" id="bySell" />

            <label htmlFor="byBuy">Compra</label>
            <input type="radio" name="bySell" id="byBuy" />

            <label htmlFor="All">Todos</label>
            <input type="radio" name="bySell" id="All" />
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
          />
          <input
            type="number"
            name="byPrice"
            id="byPriceMax"
            placeholder="Precio máximo"
            onWheel={(event) => event.currentTarget.blur()}
          />
        </div>

        <div>
          <label htmlFor="byTags">Por tags</label>
          <select name="byTags" id="byTags" defaultValue="none">
            <option value="none">---</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="mobile">Mobile</option>
            <option value="motor">Motor</option>
            <option value="work">Work</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Filters;
