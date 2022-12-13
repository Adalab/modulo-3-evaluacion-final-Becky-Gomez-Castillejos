import '../template/style/App.scss';
import { useState, useEffect } from 'react';
import getDataFromAPI from '../services/api';
import CharactersList from './CharactersList';
import Filters from './Filters';

function App() {

  const [dataApi, setDataApi] = useState([]);
  const [name, setName] = useState("");
  const [filterByName, setFilterByName] = useState('');


  //USEEFFECT

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      setDataApi(cleanData);
    });
  }, []);

  //FUNCIONES HANDLE
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };


  const handleInputName = (ev) => {
    setName(ev.target.value);
  }

  const handleFilterName = (value) => {
    setFilterByName(value);
  };

  return (
    <div className="App">
    <h1 className="title">Rick & Morty</h1>
    <form action="" className="formulario" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input className="input" type="text" id="name" onChange={handleInputName} value={name}/>
    </form>
    <Filters handleFilterName={handleFilterName} />
    <CharactersList characters={dataApi} />
    </div>
  );
}

export default App;
