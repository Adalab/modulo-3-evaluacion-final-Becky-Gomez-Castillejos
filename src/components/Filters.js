import FilterByName from './FilterByName';
import FilterByEpisode from "./FilterByEpisode";

const Filters = (props) => {
    return (
      <>
      <FilterByName handleFilterName={props.handleFilterName} filterByName={props.filterByName}/>
      <FilterByEpisode handleNumberEpisode={props.handleNumberEpisode} filterByEpisode={props.filterByEpisode}></FilterByEpisode>

      </>
      

    )
  };
  export default Filters;                   