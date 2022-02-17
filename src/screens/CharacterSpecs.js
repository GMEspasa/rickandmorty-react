import { useContext } from "react";
import { StateContext } from "../StateContext";

import Character from "../components/Character";

const CharacterSpecs = () => {
  const { characterSelected, setCharacterSelected, stateData } =
    useContext(StateContext);
  const [charFilterId] = stateData.filter(
    (element) => element.id === characterSelected
  );

  setCharacterSelected(characterSelected);

  return (
    <div className="w-1/4 character-specs-container">
      <Character
        name={charFilterId.name}
        status={charFilterId.status}
        species={charFilterId.species}
        image={charFilterId.image}
        gender={charFilterId.gender}
        home={true}
      />
      <div className="character-specs-info">
        <p>{`${charFilterId.name} appears in ${charFilterId.episode.length} episodes`}</p>
      </div>
    </div>
  );
};

export default CharacterSpecs;
