import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const movieId = searchQuery.get('movieId') ?? '';

  const updateSearchQuery = evt => {
    const movieIdValue = evt.target.value;

    if (movieIdValue === '') {
      return setSearchQuery({});
    }
    setSearchQuery({ movieId: movieIdValue });
  };
  return (
    <form>
      <input
        type="text"
        autoComplete="off"
        name="search"
        autoFocus
        placeholder="Search images and photos"
        value={movieId}
        onChange={updateSearchQuery}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBox;
