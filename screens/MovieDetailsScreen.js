import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Alert, ActivityIndicator} from 'react-native';
import {Header} from 'react-native-elements';
import Colors from '../constants/Colors';
import {
  normalizeIconSize,
  normalizeFontSize,
  normalizePaddingSize,
} from '../helpers/normalizeSizes';
import MovieDetails from '../components/MovieDetails';
import {Container} from 'native-base';
import {getMovieDetails} from '../helpers/ApiCall';
import MovieOverview from '../components/MovieOverview';

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
      })
      .finally(onFinally => {
        setLoading(false);
      });
  }, [id]);

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <Container style={styles.screen}>
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

      {!loading && <MovieDetails movieData={movieDetailedData} />}

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
