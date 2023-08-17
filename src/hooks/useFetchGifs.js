import { useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useEffect } from 'react';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
