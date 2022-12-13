const getDataFromAPI = () => {
    return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.results.map((user) => {
          return {
            photo: user.image,
            name: user.name,
            specie: user.species,
          };
        });
        return cleanData;
      });
  };
  export default getDataFromAPI;