import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {normalizeFontSize} from '../helpers/normalizeSizes';

const MovieOverview = ({overview}) => {
  return (
    <View>
      <Text h4>Overview</Text>
      <Text style={styles.overviewText}>{overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overviewText: {
    fontSize: normalizeFontSize(17),
  },
});

export default MovieOverview;
