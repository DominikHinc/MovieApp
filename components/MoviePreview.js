import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Icon} from 'react-native-elements';
import Colors from '../constants/Colors';

const MoviePreview = ({movieData}) => {
  const {title, poster_path, popularity, vote_count} = movieData;
  console.log(poster_path);
  return (
    <View style={styles.previewMainContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.posterImage}
          source={{
            uri:
              poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://resizing.flixster.com/kAZuhKR05XNS9t4e5pNoaKzLF9Q=/206x305/v1.bTsxMjExNzU1ODtqOzE4MzY1OzEyMDA7MjAwOzMwMA`,
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text h4 h4Style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.statisticsContainer}>
          <View style={styles.labelIcon}>
            <Icon name="star" color={Colors.yellow} />
            <Text style={styles.statisticsLabel}>{vote_count}</Text>
          </View>
          <View style={styles.labelIcon}>
            <Icon name="person" />
            <Text style={styles.statisticsLabel}>{Math.round(popularity)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  previewMainContainer: {
    width: '40%',
    margin: '5%',
    backgroundColor: Colors.blue,
    borderRadius: 10,
    overflow: 'hidden',
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
    padding: 5,
    flex: 1,
  },
  title: {
    fontSize: 15,
    color: 'white',
  },
  statisticsContainer: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 15,
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
