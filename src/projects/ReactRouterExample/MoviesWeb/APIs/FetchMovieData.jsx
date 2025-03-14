export const fetchMovies = async () => {
  const APIKey = import.meta.env.VITE_API_KEY;
  const API = `https://www.omdbapi.com/?apikey=${APIKey}&s=batman`;
  try {
    const res = await fetch(API);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

export const fetchMovieDetails = async ({ params }) => {
  const APIKey = import.meta.env.VITE_API_KEY;
  const API = `https://www.omdbapi.com/?apikey=${APIKey}&i=${params.id}`;
  try {
    const res = await fetch(API);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

export const submitContactForm = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
  return null;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};