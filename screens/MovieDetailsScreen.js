import {Container} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Alert, StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements';
import MovieDetails from '../components/MovieDetails';
import Colors from '../constants/Colors';
import {getMovieDetails} from '../helpers/ApiCall';
import {
  normalizeFontSize,
  normalizePaddingSize,
} from '../helpers/normalizeSizes';

const MovieDetailsScreen = ({navigation, route}) => {
  const {movieData} = route.params;

  const {title, id} = movieData;

  const [movieDetailedData, setMovieDetailedData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMovieDetails(id)
      .then(result => {
        setMovieDetailedData(result);
      })
      .catch(error => {
        Alert.alert('Something went wrong', error);
        goBack();
      })
      .finally(onFinally => {
        setLoading(false);
      });
  }, [goBack, id, setLoading]);

  const goBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [navigation]);
  return (
    <Container style={styles.screen}>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          size: 30,
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

      {!loading && (
        <Container>
          <MovieDetails movieData={movieDetailedData} />
        </Container>
      )}

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color="black" size="large" />
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    paddingBottom: normalizePaddingSize(15),
  },
  movieTitle: {
    color: '#fff',
    fontSize: normalizeFontSize(20),
    textAlign: 'center',
  },
  loadingContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MovieDetailsScreen;
