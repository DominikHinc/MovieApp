import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MovieAppNavigator from './navigation/MovieAppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MovieAppNavigator />
    </NavigationContainer>
  );
};

export default App;
