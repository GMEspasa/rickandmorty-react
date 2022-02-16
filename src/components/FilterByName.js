import { useContext, useEffect, useState } from "react";
import { StateContext } from "../StateContext";

const FilterByName = () => {

    const { setStateData, URL} = useContext(StateContext);

    const [ inputName, setInputName ] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      const currentName = e.target.name.value;
      setInputName(currentName);
    };
          
    useEffect(() => {
      const fetchCharacterName = async () => {
        try {
          let response = await fetch(URL+`/?name=${inputName}`);
          let data = await response.json();
          setStateData(data.results);

        } catch (e) {
          console.error(e);
        }
      };
      fetchCharacterName();
    }, [inputName, setStateData, URL]);

    const handelResetName = () =>{
      setInputName('');
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" >
        </label>
        <input type='text' className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" name="name" placeholder="Search character name..." ></input>
        <button type='submit' className="w-1/5 mx-2 px-1 border ring-indigo-500 sm:text-sm border-gray-300 rounded-md" name="button-submit">Enter</button>
        <button type='reset' className="w-1/5 mx-2 px-1 border ring-indigo-500 sm:text-sm border-gray-300 rounded-md" name="button-reset" onClick={handelResetName}>Reset</button>
      </form>
    </div>
  );
};

export default FilterByName;
