import React from 'react';
import renderer from 'react-test-renderer';
import FoodsList from '../../containers/FoodsList';

describe('FoodsList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FoodsList
        foods={[]}
        filters={{
          q: '',
          cuisineType: '',
          dishType: '',
          mealType: '',
        }}
        changeFilters={() => {}}
        fetchFoods={() => {}}
        clearFilters={() => {}}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
