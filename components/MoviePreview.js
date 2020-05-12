import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MoviePreview = ({movieData}) => {
  const {title} = movieData;

  return (
    <View style={styles.previewMainContainer}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  previewMainContainer: {
    width: '40%',
    marginHorizontal: '5%',
  },
});

export default MoviePreview;
