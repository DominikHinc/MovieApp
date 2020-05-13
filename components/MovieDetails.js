import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {
  normalizeMarginSize,
  normalizePaddingSize,
} from '../helpers/normalizeSizes';
import MovieOverview from './MovieOverview';
import MovieStatistics from './MovieStatistics';

// Component responsible for displaying detailed information about a given movie

const MovieDetails = ({movieData}) => {
  const {
    poster_path = null,
    popularity = 'unknown',
    vote_count = 'unknown',
    release_date = 'unknown',
    production_countries = 'unknown',
    genres = ['unknown'],
    overview = 'unknown',
  } = movieData;

  return (
    <View styles={styles.detailsMainContainer}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.topInfoContainer}>
          <View style={styles.posterContainer}>
            <Image
              style={styles.posterImage}
              source={{
                uri:
                  poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://www.movienewz.com/img/films/poster-holder.jpg`,
              }}
            />
          </View>
          <View style={styles.statisticsContainer}>
            <MovieStatistics
              popularity={popularity}
              vote_count={vote_count}
              release_date={release_date}
              production_country={
                production_countries[0] !== undefined
                  ? production_countries[0].name
                  : 'unknown'
              }
              genres={
                genres.length > 0
                  ? genres.reduce((previousValue, currentValue, currentIndex) =>
                      currentIndex === 1
                        ? previousValue.name + ', ' + currentValue.name
                        : previousValue + ', ' + currentValue.name,
                    )
                  : 'unknown'
              }
            />
          </View>
        </View>
        <MovieOverview overview={overview} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsMainContainer: {
    flex: 1,
  },
  scrollView: {},
  scrollViewContainer: {
    paddingBottom: normalizePaddingSize(20),
  },
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
