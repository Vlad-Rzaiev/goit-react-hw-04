import axios from 'axios';

export const fetchPhotos = async (searchQuery, currentPage) => {
  const KEY = 'DrZnSkUb4VnNsY7jTJRSRwISgkAKgYIS3odPJTW8878';

  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: KEY,
      query: searchQuery,
      orientation: 'landscape',
      per_page: 3,
      page: currentPage,
    },
  });

  console.log(response);

  return response.data.results;
};
