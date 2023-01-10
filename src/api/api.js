import axios from'axios'
export const getCharacters = async (limit)=> { const data=  await axios
.get(
  "https://gateway.marvel.com:443/v1/public/characters?limit="+limit+"&ts=1&apikey=21f209b362abe612efacd594a3c37b49&hash=32f9c3cfbaa7941d967c8eb44507a6d9"
);

return data.data.data.results;

}
