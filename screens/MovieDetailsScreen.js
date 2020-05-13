import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import Colors from '../constants/Colors';
import {
  normalizeIconSize,
  normalizeFontSize,
  normalizePaddingSize,
} from '../helpers/normalizeSizes';

const MovieDetailsScreen = ({navigation, route}) => {
  const {movieData} = route.params;

  const {title} = movieData;

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          size: normalizeIconSize(30),
          onPress: goBack,
        }}
        centerComponent={{
          text: title,
          style: styles.movieTitle,
          numberOfLines: 2,
        }}
        backgroundColor={Colors.blue}
        containerStyle={styles.header}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingBottom: normalizePaddingSize(15),
  },
  movieTitle: {
    color: '#fff',
    fontSize: normalizeFontSize(20),
    textAlign: 'center',
  },
});

export default MovieDetailsScreen;
