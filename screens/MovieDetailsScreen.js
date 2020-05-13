import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import Colors from '../constants/Colors';
import {normalizeIconSize, normalizeFontSize} from '../helpers/normalizeSizes';

const MovieDetailsScreen = ({navigation, route}) => {
  const {movieData} = route.params;

  const {title} = movieData;

  return (
    <View>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          size: normalizeIconSize(30),
        }}
        centerComponent={{
          text: title,
          style: {
            color: '#fff',
            fontSize: normalizeFontSize(20),
            textAlign: 'center',
          },
          numberOfLines: 2,
        }}
        backgroundColor={Colors.blue}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MovieDetailsScreen;
