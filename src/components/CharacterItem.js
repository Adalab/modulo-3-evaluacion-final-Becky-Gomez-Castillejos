import { Link } from 'react-router-dom';

function CharacterItem(props) {
    console.log(props);
    return (
      <li className="card">
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
            <Link to= {`/detail/${props.character.id}`}>Ver detalles</Link>
          </p>
      </li>
    );
  }
  export default CharacterItem;