
const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilterName(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault(hola);
  }

  return (
    <>
      <form action="" className="formulary" onSubmit={handleSubmit}>
        <label htmlFor="name" className="text">Nombre:</label>
        <input
          className="input"
          type="text"
          id="name"
          value={props.filterByName}
          onChange={handleChange}
        />
      </form>
      
    </>
  );
};
export default FilterByName;
