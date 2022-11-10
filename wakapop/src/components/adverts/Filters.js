const Filters = () => {
  return (
    <form className="adverts-filters">
      <input type="text" name="byName" id="byName" />
      <div>
        <label htmlFor="bySell">Venta</label>
        <input type="radio" name="bySell" id="bySell" />
        <label htmlFor="byBuy">Compra</label>
        <input type="radio" name="bySell" id="byBuy" />
        <label htmlFor="All">Todos</label>
        <input type="radio" name="bySell" id="All" />
      </div>

      <input type="range" name="byPrice" id="byPrice" />
      <select name="byTags" id="byTags">
        <option value="lifestyle">Lifestyle</option>
        <option value="mobile">Mobile</option>
        <option value="motor">Motor</option>
        <option value="work">Work</option>
      </select>
    </form>
  );
};

export default Filters;
