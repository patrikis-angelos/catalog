import React from 'react';
import renderer from 'react-test-renderer';
import FoodDetails from '../../containers/FoodDetails';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "example.com/test"
  })
}));

describe('FoodDetails', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FoodDetails
        meal={{}}
        filters={{
          q: '',
          cuisineType: '',
          dishType: '',
          mealType: '',
        }}
        changeFilters={() => {}}
        changeMeal={() => {}}
        clearFilters={() => {}}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
