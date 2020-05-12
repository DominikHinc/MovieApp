import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MovieAppNavigator from './navigation/MovieAppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MovieAppNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
