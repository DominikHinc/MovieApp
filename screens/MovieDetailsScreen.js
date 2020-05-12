import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MovieDetailsScreen = ({navigation, route}) => {
  const {movieData} = route.params;

  return (
    <View>
      <Text>{movieData.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MovieDetailsScreen;
