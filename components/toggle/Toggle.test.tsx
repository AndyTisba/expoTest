import React, { useState } from 'react';
import { Toggle } from './Toggle';
import renderer from 'react-test-renderer';
import 'react-native-accessibility-engine';
import { render } from '@testing-library/react-native';

it('renders correctly', () => {
  const [isEnabled, setIsEnabled] = [true, () => {}];
  const _Toggle = () => <Toggle {...{ setIsEnabled, isEnabled }} />;

  const tree = renderer.create(<_Toggle />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should be accessible, using @testing-library/react-native', () => {
  const [isEnabled, setIsEnabled] = [true, () => {}];

  const _Toggle = () => <Toggle {...{ setIsEnabled, isEnabled }} />;
  const toggle = render(<_Toggle />).getByRole('switch');
  expect(toggle).toBeAccessible();
});

it('should change, on press', () => {
  const [isEnabled, setIsEnabled] = [true, () => {}];
  const _Toggle = () => <Toggle {...{ setIsEnabled, isEnabled }} />;

  const toggle = render(<_Toggle />).getByRole('switch');
  expect(toggle).toBeAccessible();
});
