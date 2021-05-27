import React from 'react';
import renderer from 'react-test-renderer';
import Food from '../../components/Food';

describe('Food', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Food
        id="1"
        title="Test meal"
        image="url"
        cuisine="cuisine"
        dish={['dish']}
        meal={['meal']}
        key="1"
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
