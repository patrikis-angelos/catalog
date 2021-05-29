import React from 'react';
import renderer from 'react-test-renderer';
import Option from '../../components/Option';

describe('Option', () => {
  it('renders correctly', () => {
    const options = ['1', '2', '3'].map((option) => <option key={option}>{option}</option>);
    const tree = renderer
      .create(<Option
        id="cuisineType"
        options={options}
        value="2"
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
