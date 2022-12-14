import '../template/style/App.scss';
import { useState, useEffect } from 'react';
import getDataFromAPI from '../services/api';
import CharactersList from './CharactersList';
import Filters from './Filters';
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

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
    return character.name.toLowerCase().includes(filterByName.toLowerCase());
  });

  const { pathname } = useLocation();

  const dataUrl = matchPath('/detail/:characterId', pathname);
  console.log(dataUrl);
  const characterId = dataUrl !== null ? dataUrl.params.characterId : null;
  const characterFound = dataApi.find((user) => user.id === parseInt(characterId));
  

  return (
    <div className="App">
    <h1 className="title">Rick & Morty</h1>
    <Routes>
      <Route
      path= "/"
      element={
        <>
            <Filters handleFilterName={handleFilterName} />
            <CharactersList characters={CharactersFiltered} />
        </>
       
      }
      />
       
      <Route 
        path="/detail/:characterId"
        element={<CharacterDetail character={characterFound} />} />

    </Routes>
    
    </div>
  );
}

export default App;
