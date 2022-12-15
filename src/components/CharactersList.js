import CharacterItem from "./CharacterItem";

// Fichero para pintar array
const CharactersList = ({ characters, filterByName }) => {
    const CharactersElements = characters.map((character) => {
      return <CharacterItem character={character} />;
          
    });
  
    if (characters.length !== 0){
      return (
        <section>
          <ul className='list'>{CharactersElements}</ul>
        </section>
          
      )
      } else {
          return(
              <section>
                  <p>No existe ningún personaje que coincida con el texto {filterByName}</p>
              </section>
          )
      }
  };
  
  export default CharactersList;