import "../template/style/App.scss";
import { useState, useEffect } from "react";
import getDataFromAPI from "../services/api";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [dataApi, setDataApi] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      setDataApi(cleanData);
    });
  }, []);

  const handleFilterName = (value) => {
    setFilterByName(value);
  };

  

  const CharactersFiltered = dataApi.filter((character) => {
    
      return character.name.toLowerCase().includes(filterByName.toLowerCase())

  });


  const { pathname } = useLocation();

  const dataUrl = matchPath("/detail/:characterId", pathname);
  //console.log(dataUrl);
  const characterId = dataUrl !== null ? dataUrl.params.characterId : null;
  const characterFound = dataApi.find(
    (user) => user.id === parseInt(characterId)
  );

  return (
    <div className="App">
      <img src="https://i.pinimg.com/originals/be/42/d8/be42d893690195636c47a571b70b4190.jpg" alt="Rick & Morty" className="title"/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters handleFilterName={handleFilterName} filterByName={filterByName} />
              <CharactersList characters={CharactersFiltered} filterByName={filterByName} />
            </>
          }
        />

        <Route
          path="/detail/:characterId"
          element={<CharacterDetail character={characterFound} />}
        />
      </Routes>
    </div>
  );
}

export default App;
