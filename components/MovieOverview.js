import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {
  normalizeFontSize,
  normalizePaddingSize,
} from '../helpers/normalizeSizes';

const MovieOverview = ({overview}) => {
  return (
    <View style={styles.overviewContainer}>
      <Text h4 h4Style={styles.title}>
        Overview
      </Text>
      <Text style={styles.overviewText}>{overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overviewContainer: {
    paddingHorizontal: normalizePaddingSize(20),
    flex: 1,
  },
  title: {},
  overviewText: {
    fontSize: normalizeFontSize(17),
  },
});

export default MovieOverview;
