
const FilterByName = (props) => {
    const handleChange = (ev) => {
      props.handleFilterName(ev.target.value); 
    };

    return(
        
        <form action="" className="formulario" >
            <label htmlFor="name">Nombre:</label>
            <input className="input" type="text" id="name" onChange={handleChange} />
        </form>
        
    )
}
    export default FilterByName;