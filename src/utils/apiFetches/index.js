import axios from 'axios';

const getAnything = async (url) => {
  const response = axios.get(url);
  console.log(response);
  return response;
}

export default getAnything;