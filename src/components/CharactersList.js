import { useContext } from "react";
import { StateContext } from "../StateContext";

import Character from "./Character";
import FilterByName from "./FilterByName";

const CharactersList = () => {
  const { stateData } = useContext(StateContext);

  return (
    <div>
      <FilterByName />
      <ol>
        {stateData?.map((element, i) => (
          <Character key={i} 
          status={element.status} 
          name={element.name} 
          species={element.species} 
          image={element.image}/>
        ))
        }
      </ol>
    </div>
  
  );
};

export default CharactersList;
