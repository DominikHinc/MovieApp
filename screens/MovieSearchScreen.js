import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const MovieSearchScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>MovieSearchScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MovieSearchScreen;
