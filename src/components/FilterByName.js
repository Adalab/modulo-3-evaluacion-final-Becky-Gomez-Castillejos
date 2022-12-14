const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilterName(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  return (
    <>
      <form action="" className="formulario" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          className="input"
          type="text"
          id="name"
          onChange={handleChange}
        />
      </form>
      
    </>
  );
};
export default FilterByName;
