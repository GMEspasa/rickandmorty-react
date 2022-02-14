import { useContext, useEffect } from "react";
import { StateContext } from "../StateContext";


const NextBackPage = ({page, setPage}) => {

    const { setStateData, URL } = useContext(StateContext);
   
    const handelBackPage = () => {
      if (page > 1) setPage(page - 1);
    };

    const handelNextPage = () =>{
      if (page < 42) setPage(page + 1);
    };

    const handleSubmitNumber = (e) =>{
      e.preventDefault();
      const pageNumber = parseInt(e.target[0].value);
      
      (pageNumber < 43 && pageNumber > 0) ? setPage(pageNumber) : alert('This page not exist')
    };

    useEffect(() => {
      const fetchPages = async () => {
        let response = await fetch(URL+`/?page=${page}`);
        let data = await response.json();

        setStateData(data.results);
        console.log(data.results);
      };
    fetchPages();
    }, [page])
    
    console.log('page', page);

  return (
    <div>
      <form onSubmit={handleSubmitNumber}>
        <label htmlFor="number-page">
        </label>
        <input type='number' 
        name='number-page' 
        placeholder="Enter a page..."></input>
        <button type="submit" name="number-page" >Enter</button>
        <button type='reset' name="button-reset" >Reset</button>
      </form>
      <button name="button" onClick={handelBackPage}>Back page</button>
      <button name="button" onClick={handelNextPage}>Next page</button>
    </div>
  );
};

export default NextBackPage;
