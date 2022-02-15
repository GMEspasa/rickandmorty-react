import { useContext, useEffect, useState } from "react";
import { StateContext } from "../StateContext";

import NextBackPage from "./NextBackPage";

const FilterByName = () => {

    const { setStateData, URL, page, setPage } = useContext(StateContext);

    //const [ number, setNumber ] = useState([]);
    const [ inputName, setInputName ] = useState('');

    

    const handleSubmit = (e) => {
      e.preventDefault();
      const currentName = e.target.name.value;
      setInputName(currentName);
    
      /*
      stateData?.filter(element => {
        if(element.name.includes(currentName)){
          setNumber((prevState) => ([
            ...prevState, element.id
          ]));
        }  
        return null   
      })*/
    };
          
    useEffect(() => {
      const fetchCharacterName = async () => {
        try {
          let response = await fetch(URL+`/?name=${inputName}`);
          let data = await response.json();
            
          setStateData(data.results);
          //console.log(data.results);

        } catch (e) {
          console.error(e);
        }
      };
      fetchCharacterName();
    }, [inputName]);

    
    const handelResetName = () =>{
      setInputName('');
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
        </label>
        <input type='text' name="name" placeholder="Search character name..." ></input>
        <button type='submit' name="button-submit">Enter</button>
        <button type='reset' name="button-reset" onClick={handelResetName}>Reset</button>
      </form>
      <NextBackPage page={page} setPage={setPage} />
    </div>
  );
};

export default FilterByName;
