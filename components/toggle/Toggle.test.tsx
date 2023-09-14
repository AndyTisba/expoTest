import React, { useState } from 'react';
import { Toggle } from './Toggle';
import renderer from 'react-test-renderer';
import 'react-native-accessibility-engine';
import { render } from '@testing-library/react-native';

const [isOn, setIsOn] = [true, () => {}];
it('renders correctly', () => {
  const _Toggle = () => <Toggle {...{ setIsOn, isOn: false }} />;

  const tree = renderer.create(<_Toggle />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should be accessible via role, using @testing-library/react-native', () => {
  const _Toggle = () => <Toggle {...{ setIsOn, isOn }} />;
  const toggle = render(<_Toggle />).getByRole('switch');
  expect(toggle).toBeAccessible();
});

// it('should be accessible via accessibilityLabel, using @testing-library/react-native', () => {
//   const _Toggle = () => <Toggle {...{ setIsOn, isOn }} />;
//   const toggle = render(<_Toggle />).getByTestId('switch');
//   expect(toggle).toBeAccessible();
// });

// it('should change, be the right color', () => {
//   const toggleON = render(<Toggle setIsOn={setIsOn} isOn />).getByTestId('switch');
//   const toggleOFF = render(<Toggle setIsOn={setIsOn} />).getByRole('switch');
//   console.log(toggleON);

//   expect(toggleON.props.style.backgroundColor).toEqual('#ADCCB7');
//   expect(toggleOFF.props.style.backgroundColor).toEqual('#E7E7E7');
// });
