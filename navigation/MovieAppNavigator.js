import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MovieSearchScreen from '../screens/MovieSearchScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const MovieAppStackNavigator = createStackNavigator();

function movieAppStack() {
  return (
    <MovieAppStackNavigator.Navigator headerMode="none">
      <MovieAppStackNavigator.Screen
        name="MovieSearch"
        component={MovieSearchScreen}
      />
      <MovieAppStackNavigator.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
    </MovieAppStackNavigator.Navigator>
  );
}

export default movieAppStack;
