import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('<GifGrid /> Tests', () => {
  const category = 'One Punch';

  test('Debe de mostrar el texto "Cargando..." al inicio', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...')).toBeTruthy();
  });

  test('Debe de mostrar los items cuando se cargan las imágenes', () => {
    const gifs = [
      {
        id: 'abc',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'saitama',
      },
      {
        id: '123',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'saitama2',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
