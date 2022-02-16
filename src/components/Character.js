import { useContext } from "react";
import { StateContext } from "../StateContext";
import {Link} from 'react-router-dom';

const Character = ({ name, status, species, image, id, gender, home}) => {

  const { setCharacterSelected } = useContext(StateContext)

  const handleOnClick = (e) => {
    const charId = e.target.id
    setCharacterSelected(parseInt(charId))
  }

  return (
    <a  href={'http://localhost:3000/charspecs'} 
    className="group character-container "
    onClick={handleOnClick}>             
      <Link to={!home ? '/charspecs' : '/'}>
      <div className="w-full aspect-w-1 aspect-h-1 bg-transparent rounded-lg overflow-hidden xl:aspect-w-1 xl:aspect-h-1">
          <img 
            id={id}
            width={200}
            src={image}
            alt={'Rick and Morty character'}
            className="w-full h-full object-center object-cover group-hover:opacity-75 character-image"
          />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900" id={id}>{name}</h3>
      <p className="mt-1 text-sm font-medium text-gray-700" id={id}>{status}</p>
      <p className="mt-1 text-sm font-medium text-gray-700" id={id}>{species}</p>
      <p className="mt-1 text-sm font-medium text-gray-700" id={id}>{gender}</p>
      </Link>
    </a>
  );
};

export default Character;