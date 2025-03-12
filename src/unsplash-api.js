import axios from 'axios';

export const fetchPhotos = async searchQuery => {
  const UNSPLASH_KEY = 'DrZnSkUb4VnNsY7jTJRSRwISgkAKgYIS3odPJTW8878';

  const response = await axios.get(`https://api.unsplash.com/photos`, {
    params: {
      client_id: UNSPLASH_KEY,
      query: searchQuery,
    },
  });

  return response;
};
