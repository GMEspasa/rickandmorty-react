import { useContext } from "react";
import { StateContext } from "../StateContext";

import Character from "./Character";
import FilterByName from "./FilterByName";
/*
const CharactersList = () => {
  const { stateData } = useContext(StateContext);

  return (
    <div className="list-container">
      <FilterByName />
      <ol className="list-character">
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
*/

const CharactersList = () =>{
  const { stateData, page } = useContext(StateContext);
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Rick and Morty</h2>
        <FilterByName />
        <div className="number-page">
            {`Page ${page}`}
          </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 list-conatiner">
          {stateData?.map((element, i) => (
            <Character 
            key={i}
            status={element.status} 
            name={element.name} 
            species={element.species} 
            image={element.image}/>
          ))}
        </div>
      </div>
    </div>
  )
};

export default CharactersList;