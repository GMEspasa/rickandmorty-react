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

export default Character;
