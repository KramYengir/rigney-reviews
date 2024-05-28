const API_KEY = process.env.OMDb_API_KEY;

export const fetchMovie = async (title: string, format: string) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}&type=${format}`
  );
  const data = await response.json();
  return data;
};
