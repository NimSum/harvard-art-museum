import axios from 'axios';

const getAnything = async (url) => {
  const response = await axios.get(url);
  if (response.statusText !== 'OK') {
    throw new Error('Failed to fetch data');
  }
  return response.data;
}

export default getAnything;