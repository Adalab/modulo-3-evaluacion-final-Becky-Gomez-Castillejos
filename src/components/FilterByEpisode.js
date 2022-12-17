const FilterByEpisode = (props) => {
  const episodes = (ev) => {
    return props.handleNumberEpisode(ev.target.value);
  };

  return (
    <form>
      <label htmlFor="Episodes">Episodes</label>
      <input
        type="number"
        id="Episodes"
        value={props.filterByEpisode}
        onChange={episodes}
      />
    </form>
  );
};
export default FilterByEpisode;
