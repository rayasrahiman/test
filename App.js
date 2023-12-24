import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

import NavigationScreen from './navigation/NavigationScreen';

const App = () => {
  return (
    <>
      <StatusBar />
      <View style={{backgroundColor: 'white', flex: 1}}>
        <NavigationScreen />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
