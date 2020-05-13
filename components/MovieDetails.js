import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Container} from 'native-base';

const MovieDetails = ({movieData}) => {
  const {poster_path, id} = movieData;
  return (
    <View styles={styles.detailsMainContainer}>
      <View style={styles.posterContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  detailsMainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  posterContainer: {
    width: '50%',
    aspectRatio: 0.5,
  },
  posterImage: {
    width: '100%',
    alignItems: 'center',
  },
});

export default MovieDetails;
