import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBox.styled';

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
    <SearchForm>
      <SearchFormInput
        type="text"
        autoComplete="off"
        name="search"
        autoFocus
        placeholder="Search images and photos"
        value={movieId}
        onChange={updateSearchQuery}
      />
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>
    </SearchForm>
  );
};

export default SearchBox;
