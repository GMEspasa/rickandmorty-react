import { createContext, useState } from "react";

export const StateContext = createContext({
  stateData: {},
  setStateData: () => {},
});

const StateProvider = ({ children }) => {
  const [stateData, setStateData] = useState([]);
  const [characterSelected, setCharacterSelected] = useState('');
  const [ page, setPage ] = useState(1);
  const [ home, setHome ] = useState(false);

  const URL = "https://rickandmortyapi.com/api/character";
/*
  useMemo(() => {
    const fetchCharacters = async () => {
      try {
        let response = await fetch(URL);
        let data = await response.json();
        setStateData(data.results);

      } catch (e) {
        console.error(e);
      }
    };
    fetchCharacters();
  }, [setStateData]);
*/
  return (
    <StateContext.Provider value={{ stateData, setStateData, URL, page, setPage, characterSelected, setCharacterSelected, home, setHome }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
