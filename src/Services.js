const BASE_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacterByName = async (name) => {
  try {
    const response = await fetch(BASE_URL + `/?name=${name}`);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

export const fetchPages = async (page) => {
  try {
    const response = await fetch(BASE_URL + `/?page=${page}`);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};
