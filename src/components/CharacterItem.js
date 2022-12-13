
function CharacterItem(props) {
    console.log(props);
    return (
      <li className="card">
        <a href={props.character.id}>
          <img
            className="card__img"
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          />
  
          <h4 className="card__title">
            {props.character.name} 
          </h4>
          <p className="card__description">
            {props.character.specie}
          </p>
        </a>
      </li>
    );
  }
  export default CharacterItem;