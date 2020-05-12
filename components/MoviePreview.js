import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-elements';

const MoviePreview = ({movieData}) => {
  const {title, poster_path} = movieData;
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
      <Text h4 h4Style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  previewMainContainer: {
    width: '40%',
    marginHorizontal: '5%',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 0.75,
  },
  posterImage: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 20,
  },
});

export default MoviePreview;
