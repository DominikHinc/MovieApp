import {Container} from 'native-base';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import MoviePreview from './MoviePreview';

const MoviesPreviewList = ({moviesList, navigation}) => {
  const renderMoviePreview = ({item}) => {
    return <MoviePreview movieData={item} navigation={navigation} />;
  };

  return (
    <FlatList
      numColumns={2}
      data={moviesList}
      renderItem={renderMoviePreview}
      keyExtractor={item => {
        return item.id.toString();
      }}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});

export default MoviesPreviewList;
