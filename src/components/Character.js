
/*
const Character = ({ name, status, species, image }) => {
  return (
    <li>
      <img src={image} alt="Character Rick and Morty" />
      <div>
        <p>Name: {name}</p>
        <p>Status: {status}</p>
        <p>Specie: {species}</p>
      </div>
    </li>
  );
};
*/

const Character = ({ name, status, species, image}) => {
  return (
    <a href='http://localhost:3000/' className="group character-container">             
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 character-container__avatar">
        <img 
          width={200}
          src={image}
          alt={'Rick and Morty character'}
          className="w-full h-full object-center object-cover group-hover:opacity-75 character-image"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{status}</p>
      <p className="mt-1 text-lg font-medium text-gray-900">{species}</p>
    </a>

  );
};

export default Character;