import { render, screen } from '@testing-library/react';
import { GifCard } from '../../src/components/GifCard';

const title = 'Un título';
const url = 'https://localhost/algo.jpg';

describe('<GifCard /> Tests', () => {
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifCard title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostar la imagen con el src y alt de los props', () => {
    render(<GifCard title={title} url={url} />);

    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Debe mostrar el título', () => {
    render(<GifCard title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
