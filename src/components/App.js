import '../template/style/App.scss';
import { useState, useEffect } from 'react';
import getDataFromAPI from '../services/api';
import CharactersList from './CharactersList';
import Filters from './Filters';

function App() {

  const [dataApi, setDataApi] = useState([]);
  const [filterByName, setFilterByName] = useState('');


  //USEEFFECT

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      setDataApi(cleanData);
    });
  }, []);

  //FUNCIONES HANDLE

  const handleFilterName = (value) => {
    setFilterByName(value);
  };

  const CharactersFiltered = dataApi.filter((character) => {
    return character.name.includes(filterByName);
  });

  return (
    <div className="App">
    <h1 className="title">Rick & Morty</h1>
    
    <Filters handleFilterName={handleFilterName} />
    <CharactersList characters={CharactersFiltered} />
    </div>
  );
}

export default App;
