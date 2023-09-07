import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

export const Toggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#E7E7E7', true: '#ADCCB7' }}
        thumbColor={'#FFFFFF'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
