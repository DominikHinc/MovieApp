import React, {useState} from 'react';
import {StyleSheet, View, Alert, ActivityIndicator} from 'react-native';
import SearchBar from '../components/SearchBar';
import {searchMovieByTitle} from '../helpers/ApiCall';

const MovieSearchScreen = ({navigation}) => {
  const [movieTitle, setMovieTitle] = useState('Hunger');

  const [loading, setLoading] = useState(false);

  const searchMovie = () => {
    searchMovieByTitle(movieTitle)
      .then(result => {
        // console.log(result);
      })
      .catch(error => {
        Alert.alert('Something went wrong', error);
      });
  };

  const validateInput = text => {
    setMovieTitle(text);
  };

  const clearTitle = () => {
    setMovieTitle('');
  };

  return (
    <View style={styles.screen}>
      <SearchBar
        value={movieTitle}
        onChangeText={validateInput}
        onRightIconPress={clearTitle}
        onLeftIconPress={searchMovie}
        placeholder="Search Movie"
      />

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="black" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  loadingContainer: {
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MovieSearchScreen;
