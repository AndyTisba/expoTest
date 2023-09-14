import React, { useRef, SetStateAction, Dispatch, RefObject } from 'react';
import { StyleSheet, Pressable, Image, Animated, PressableProps, View } from 'react-native';
import Check from '../../assets/check.png';
import Cross from '../../assets/cross.png';

// import { usePress } from '../../utils/usePress';
// import { useSwitch } from '../../utils/useSwitch';
// import { useToggleState } from '../../utils/useToggleState';

const useAnim = (useRef, initialValue: number = 0, duration: number = 250) => {
  const ref = useRef(new Animated.Value(initialValue)).current;
  return {
    ref,
    anim: (toValue) => {
      Animated.timing(ref, {
        toValue,
        duration,
        useNativeDriver: true,
      }).start();
    },
  };
};

type ToggleProps = {
  setIsOn: Dispatch<SetStateAction<boolean>>;
  isOn?: boolean;
  isDisabled?: boolean;
};

const TRANSLATE_X_POSITION = 20;
export const Toggle = ({ setIsOn, isOn = false, isDisabled = false }: ToggleProps) => {
  const toggleRef =
    useRef<React.ForwardRefExoticComponent<PressableProps & React.RefAttributes<View>>>(null);
  const initialIsOnPosition = isOn ? TRANSLATE_X_POSITION : 0;
  const { ref: translate, anim: move } = useAnim(useRef, initialIsOnPosition);

  const toggleSwitch = () =>
    setIsOn((previousState) => {
      move(previousState ? 0 : TRANSLATE_X_POSITION);
      return !previousState;
    });

  // const state = useToggleState();
  // const { isFocusVisible, focusProps } = useFocusRing();
  // let { pressProps } = usePress({
  //   isDisabled,
  //   onPress: toggleSwitch,
  // });

  // const toggleProps = useSwitch(
  //   {
  //     role: 'switch',
  //     accessibilityRole: 'switch',
  //   },
  //   isOn,
  //   toggleRef
  // );
  const imageProps = { source: isOn ? Check : Cross, alt: isOn ? 'on' : 'off' };

  return (
    <Pressable
      style={[styles.toggle, isOn ? styles.toggleEnabled : styles.toggleDisabled]}
      onPress={toggleSwitch}
      role="switch"
      accessibilityRole="switch">
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [
              {
                translateX: translate,
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
