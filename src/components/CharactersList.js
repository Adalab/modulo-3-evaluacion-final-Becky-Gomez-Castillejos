import CharacterItem from "./CharacterItem";

// Fichero para pintar array
const CharactersList = ({ characters }) => {
    const CharactersElements = characters.map((character) => {
      return <CharacterItem character={character} />;
    });
  
    return (
      <section>
        <ul>{CharactersElements}</ul>
      </section>
    );
  };
  
  export default CharactersList;