import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import MoviePreview from './MoviePreview';
import {Container, Body} from 'native-base';

const MoviesPreviewList = ({moviesList}) => {
  const renderMoviePreview = ({item}) => {
    return <MoviePreview movieData={item} />;
  };

  return (
    <Container>
      <FlatList
        numColumns={2}
        data={moviesList}
        renderItem={renderMoviePreview}
        keyExtractor={item => {
          return item.id.toString();
        }}
        style={styles.list}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});

export default MoviesPreviewList;
