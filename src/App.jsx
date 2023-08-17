import { useState } from 'react';
import { GifGrid, SearchForm } from './components';

export const App = () => {
  const [categories, setCategories] = useState(['one punch man']);

  const addCategory = (value) => {
    if (categories.includes(value)) return;

    setCategories([value, ...categories]);
  };

  return (
    <>
      <header>
        <h1>GIF Expert App</h1>
      </header>
      <main>
        <SearchForm onSearchCategory={addCategory} />

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </main>
    </>
  );
};
