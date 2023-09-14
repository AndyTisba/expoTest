import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Toggle } from './components/toggle/Toggle';
import { useState } from 'react';

export default function App() {
  const [isToggleOn, setToggleOn] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{String(Platform.OS)}</Text>
      <Text>{String(isToggleOn)}</Text>
      <Toggle isOn={isToggleOn} setIsOn={setToggleOn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
