import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Switch } from 'react-native';
import { Toggle } from './components/toggle/Toggle';
import { useState } from 'react';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.container}>
      <Text>{String(isEnabled)}</Text>
      <StatusBar style="auto" />
      <Switch></Switch>
      <Toggle isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
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
