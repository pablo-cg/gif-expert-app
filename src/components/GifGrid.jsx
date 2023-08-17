import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifCard } from './GifCard';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{isLoading ? 'Cargando...' : category}</h3>
      {!isLoading && (
        <div className="card-grid">
          {images.map((image) => (
            <GifCard key={image.id} {...image} />
          ))}
        </div>
      )}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
