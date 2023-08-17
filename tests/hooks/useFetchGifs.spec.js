import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('useFetchGifs hook Tests', () => {
  const category = 'One Punch';

  test('Debe regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs(category));

    const { images, isLoading } = result.current;

    expect(images).toEqual([]);
    expect(isLoading).toBeTruthy();
  });

  test('Debe regresar un arreglo de gifs e "isLoading" en false', async () => {
    const { result } = renderHook(() => useFetchGifs(category));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0),
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
