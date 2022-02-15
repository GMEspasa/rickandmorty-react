import { useContext } from "react";
import { StateContext } from "../StateContext";

import Character from "../components/Character";

const CharacterSpecs = () => {

  const { characterSelected } = useContext(StateContext);
  
  console.log(characterSelected);

  return (
    <div>
        <h1>{characterSelected}</h1>
      
    </div>
  )
}

export default CharacterSpecs