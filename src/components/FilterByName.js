
const FilterByName = (props) => {
    const handleChange = (ev) => {
      props.handleFilterName(ev.target.value); // la función handleFilterGenderse ejecuta en esta función (lifting), por eso se especifica el ev.target.value aquí, y así le envía los datos a la madre.
    };
}
    export default FilterByName;