import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Container} from 'native-base';
import {normalizeMarginSize} from '../helpers/normalizeSizes';
import MovieStatistics from './MovieStatistics';
import MovieOverview from './MovieOverview';

const MovieDetails = ({movieData}) => {
  const {
    poster_path,
    id,
    popularity,
    vote_count,
    release_date,
    production_countries,
    genres,
    overview,
  } = movieData;

  return (
    <View styles={styles.detailsMainContainer}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.topInfoContainer}>
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
            <View style={styles.statisticsContainer}>
              <MovieStatistics
                popularity={popularity}
                vote_count={vote_count}
                release_date={release_date}
                production_country={production_countries[0].name}
                genres={genres.reduce(
                  (previousValue, currentValue, currentIndex) =>
                    currentIndex === 1
                      ? previousValue.name + ', ' + currentValue.name
                      : previousValue + ', ' + currentValue.name,
                )}
              />
            </View>
          </View>
          <MovieOverview overview={overview} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsMainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  scrollView: {},
  topInfoContainer: {
    flexDirection: 'row',
  },
  posterContainer: {
    width: '50%',
    aspectRatio: 0.5,
    margin: normalizeMarginSize(20),
  },
  posterImage: {
    width: '100%',
    height: '100%',
  },
  statisticsContainer: {
    flex: 0.75,
    justifyContent: 'center',
  },
});

export default MovieDetails;
