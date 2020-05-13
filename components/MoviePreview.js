import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import Colors from '../constants/Colors';
import {
  normalizePaddingSize,
  normalizeBorderRadiusSize,
  normalizeIconSize,
  normalizeFontSize,
} from '../helpers/normalizeSizes';

const MoviePreview = ({movieData, navigation}) => {
  const {title, poster_path, popularity, vote_count} = movieData;

  const navigateToDetailsScreen = () => {
    navigation.navigate('MovieDetails', {movieData});
  };

  return (
    <View style={[styles.previewMainContainer]}>
      <TouchableOpacity
        style={styles.touchable}
        activeOpacity={0.5}
        onPress={navigateToDetailsScreen}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.posterImage}
            source={{
              uri:
                poster_path !== null
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `https://www.movienewz.com/img/films/poster-holder.jpg`,
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text h4 h4Style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <View style={styles.statisticsContainer}>
            <View style={styles.labelIcon}>
              <Icon
                name="star"
                color={Colors.yellow}
                size={normalizeIconSize(25)}
              />
              <Text style={styles.statisticsLabel}> {vote_count}</Text>
            </View>
            <View style={styles.labelIcon}>
              <Icon
                name="person"
                color={Colors.lightBlue}
                size={normalizeIconSize(25)}
              />
              <Text style={styles.statisticsLabel}>
                {' '}
                {Math.round(popularity)}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  previewMainContainer: {
    width: '40%',
    margin: '5%',
    backgroundColor: Colors.blue,
    borderRadius: normalizeBorderRadiusSize(12),
    overflow: 'hidden',
  },
  touchable: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 0.75,
  },
  posterImage: {
    height: '100%',
    width: '100%',
  },
  infoContainer: {
    alignItems: 'center',
    padding: normalizePaddingSize(5),
    flex: 1,
  },
  title: {
    fontSize: normalizeFontSize(17),
    color: 'white',
    textAlign: 'center',
  },
  statisticsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: normalizePaddingSize(15),
    paddingTop: normalizePaddingSize(5),
  },
  labelIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statisticsLabel: {
    color: 'white',
  },
});

export default MoviePreview;
