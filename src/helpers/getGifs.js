import axios from 'axios';

async function getGifs(category) {
  const apiKey = import.meta.env.VITE_GIPHY_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=8`;

  const { data } = await axios.get(url);

  const gifs =
    data.data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      };
    }) ?? [];

  return Promise.resolve(gifs);
}

export { getGifs };
