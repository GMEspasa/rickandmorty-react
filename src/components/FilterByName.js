import { useContext, useMemo, useState } from "react";
import { StateContext } from "../StateContext";



const FilterByName = () => {

    const { setStateData } = useContext(StateContext);

    //const [ number, setNumber ] = useState([]);
    const [ chrName, setChrName ] = useState('');

    const URL = "https://rickandmortyapi.com/api/character";

    const handleSubmit = (e) => {
      e.preventDefault();

      //const currentName = e.target.name.value;

      console.log(e.target.name.value);

      setChrName(e.target.name.value);
    
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

    //console.log(number);
    console.log(chrName);

    useMemo(() => {
      const fetchCharacterName = async () => {
        try {
          let response = await fetch(URL+`/?name=${chrName}`);
  
          let data = await response.json();
            
          setStateData(data.results);
  
        } catch (e) {
          console.error(e);
        }
      };
      fetchCharacterName();
    }, [setStateData, chrName]);

    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
        </label>
        <input type='text' name="name" placeholder="Search character..." ></input>
      </form>
        
    </div>
  );
};

export default FilterByName;
