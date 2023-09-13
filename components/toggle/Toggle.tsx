import React, { useRef } from 'react';
import { Text, StyleSheet, Pressable, Image, Animated } from 'react-native';
import Check from '../../assets/check.png';
import Cross from '../../assets/cross.png';

export const Toggle = ({ isEnabled, setIsEnabled }) => {
  const toggleSwitch = () =>
    setIsEnabled((previousState) => {
      previousState ? move(0) : move(20);
      return !previousState;
    });

  const translate = useRef(new Animated.Value(0)).current;
  const move = (toValue) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(translate, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const imageProps = { source: isEnabled ? Check : Cross, alt: isEnabled ? 'on' : 'off' };
  return (
    <Pressable
      style={[styles.toggle, isEnabled ? styles.toggleEnabled : styles.toggleDisabled]}
      onPress={toggleSwitch}
      role="switch"
      accessibilityRole="switch">
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [
              {
                translateX: translate.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1], // 0 : 150, 0.5 : 75, 1 : 0
                }),
              },
            ],
          },
        ]}>
        <Image {...imageProps} />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  toggle: {
    width: 51,
    height: 31,
    padding: 2,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: 'black',
    position: 'relative',
  },
  toggleEnabled: {
    backgroundColor: '#ADCCB7',
  },
  toggleDisabled: {
    backgroundColor: '#E7E7E7',
  },
  circle: {
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    width: 27,
    height: 27,
    top: 0,
    boxShadow: '0px 3px 1px 0px #0000000F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circuleFocus: {
    borderColor: 'red',
    borderWidth: 3,
    borderStyle: 'solid',
  },
  rail: {},
});
