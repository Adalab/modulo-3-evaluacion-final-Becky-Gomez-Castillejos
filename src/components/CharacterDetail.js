
function CharacterDetail(props) {
    console.log(props);
    return (
      <li className="card__detail">
          <img
            className="card__img"
            src={props.character.photo}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          />
  
          <h4 className="card__title">
            {props.character.name} 
          </h4>
          <p className="card__description">
            {props.character.specie}
          </p>
          <p>
            {props.character.planet}
          </p>
          <p>
            {props.character.episodes}
          </p>
          <p>
            {props.character.status}
          </p>
      </li>
    );
  }
  export default CharacterDetail;