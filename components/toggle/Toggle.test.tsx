import React from 'react';
import { Toggle } from './Toggle';
import renderer from 'react-test-renderer';
import 'react-native-accessibility-engine';
import { render } from '@testing-library/react-native';

it('renders correctly', () => {
  const tree = renderer.create(<Toggle />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should be accessible', () => {
  expect(<Toggle />).toBeAccessible();
});

it('should be accessible, using @testing-library/react-native', () => {
  const toggle = render(<Toggle />).getByRole('switch');
  expect(toggle).toBeAccessible();
});
