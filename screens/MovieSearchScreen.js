import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

const MovieSearchScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default MovieSearchScreen;
