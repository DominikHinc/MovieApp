import {Container} from 'native-base';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import MoviesPreviewList from '../components/MoviesPreviewList';
import SearchBar from '../components/SearchBar';
import Colors from '../constants/Colors';
import {searchMoviesByTitle} from '../helpers/ApiCall';

const MovieSearchScreen = ({navigation}) => {
  const [movieTitle, setMovieTitle] = useState('Hunger');
  const [moviesList, setMoviesList] = useState([]);
  const [couldNotFindAnyMovies, setCouldNotFindAnyMovies] = useState(false);

  const [loading, setLoading] = useState(false);

  const searchMovie = () => {
    setLoading(true);
    Keyboard.dismiss();
    setCouldNotFindAnyMovies(false);
    searchMoviesByTitle(movieTitle)
      .then(result => {
        setMoviesList(result.results);
        if (result.results.length === 0) {
          setCouldNotFindAnyMovies(true);
        }
      })
      .catch(error => {
        Alert.alert('Something went wrong', error);
      })
      .finally(onFinally => {
        setLoading(false);
      });
  };

  const validateInput = text => {
    if (text.match(/^[0-9a-zA-Z ]*$/)) {
      setMovieTitle(text);
    }
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
      <Container style={styles.listContainer}>
        {!loading && moviesList.length > 0 && (
          <MoviesPreviewList moviesList={moviesList} navigation={navigation} />
        )}
        {couldNotFindAnyMovies && !loading && (
          <View style={styles.loadingContainer}>
            <Text>Could not find any movies</Text>
          </View>
        )}
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Colors.blue} />
          </View>
        )}
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  listContainer: {
    height: '100%',
  },
  loadingContainer: {
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MovieSearchScreen;
