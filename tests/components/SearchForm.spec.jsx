import { render, screen, fireEvent } from '@testing-library/react';
import { SearchForm } from '../../src/components/SearchForm';

const inputValue = 'One Punch';

describe('<SearchForm /> Tests', () => {
  test('Debe de cambiar el valor del input', () => {
    render(<SearchForm onSearchCategory={() => {}} />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
  });

  test('Debe de llamar al onSearchCategory si el input tiene un valor', () => {
    const onSearchCategory = jest.fn();

    render(<SearchForm onSearchCategory={onSearchCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onSearchCategory).toHaveBeenCalledTimes(1);
    expect(onSearchCategory).toHaveBeenCalledWith(inputValue);
  });

  test('No debe de llamar al onSearchCategory si el input está vacio', () => {
    const onSearchCategory = jest.fn();

    render(<SearchForm onSearchCategory={onSearchCategory} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onSearchCategory).not.toHaveBeenCalled();
  });
});
