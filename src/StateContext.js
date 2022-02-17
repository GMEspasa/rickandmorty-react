import { createContext, useState } from "react";

export const StateContext = createContext({
  stateData: {},
  setStateData: () => {},
});

const StateProvider = ({ children }) => {
  const [stateData, setStateData] = useState([]);
  const [characterSelected, setCharacterSelected] = useState("");
  const [page, setPage] = useState(1);
  const [home, setHome] = useState(false);

  return (
    <StateContext.Provider
      value={{
        stateData,
        setStateData,
        page,
        setPage,
        characterSelected,
        setCharacterSelected,
        home,
        setHome,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
