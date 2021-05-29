import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../../components/SearchBar';

describe('SearchBar', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SearchBar
        filters={{
          q: '', cuisineType: '', dishType: '', mealType: '',
        }}
        filterHandler={() => {}}
        clear={() => {}}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
