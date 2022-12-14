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
  const [errorMessage, setErrorMessage] = useState("");

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

  const error = () => {
    if(CharactersFiltered !== filterByName) {
      return setErrorMessage("No coincide con ninguno de los personajes");
    }
  }

  const { pathname } = useLocation();

  const dataUrl = matchPath("/detail/:characterId", pathname);
  console.log(dataUrl);
  const characterId = dataUrl !== null ? dataUrl.params.characterId : null;
  const characterFound = dataApi.find(
    (user) => user.id === parseInt(characterId)
  );

  return (
    <div className="App">
      <img src="https://i.pinimg.com/originals/be/42/d8/be42d893690195636c47a571b70b4190.jpg" alt="Rick & Morty" className="title"/>
      <p>{errorMessage}</p>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters handleFilterName={handleFilterName} />
              <CharactersList characters={CharactersFiltered} />
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
