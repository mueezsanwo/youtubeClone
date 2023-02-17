import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': '97ab8d7c34msh845ec64a4a06cf6p1af961jsnfe65c3d1abc7',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  };
  