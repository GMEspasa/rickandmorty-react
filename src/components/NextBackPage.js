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
      };
    fetchPages();
    }, [page, URL, setStateData])
    
    const handelResetPage = () =>{
      setPage(1);
    };

  return (
    <div>
      <form onSubmit={handleSubmitNumber}>
        <label htmlFor="number-page">
        </label>
        <input type='number' 
        name='number-page'
        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
        min={1}
        max={42}
        placeholder="Enter a page..."></input>
        <button type="submit" className="w-1/5 mx-2 px-1 border ring-indigo-500 sm:text-sm border-gray-300 rounded-md" name="number-page" >Enter</button>
        <button type='reset' className="w-1/5 mx-2 px-1 border ring-indigo-500 sm:text-sm border-gray-300 rounded-md" name="button-reset" onClick={handelResetPage}>Reset</button>
      </form>
      <button name="button" className="w-1/5 mx-2 my-4 px-1 border ring-indigo-500 sm:text-sm border-gray-300 rounded-md" onClick={handelBackPage}>Back page</button>
      <button name="button" className="w-1/5 mx-2 my-4 px-1 border ring-indigo-500 sm:text-sm border-gray-300 rounded-md" onClick={handelNextPage}>Next page</button>
    </div>
  );
};

export default NextBackPage;
