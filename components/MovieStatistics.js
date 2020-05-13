import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../constants/Colors';
import {
  normalizeFontSize,
  normalizeIconSize,
  normalizePaddingSize,
} from '../helpers/normalizeSizes';

const MovieStatistics = ({
  popularity = 0,
  vote_count = 0,
  release_date = 'unknown',
  production_country = 'unknown',
  genres = 'unknown',
}) => {
  return (
    <View style={styles.statisticsMainContainer}>
      <View>
        <Text style={styles.title}>Vote count:</Text>
        <View style={styles.infoContainer}>
          <Icon
            name="star"
            color={Colors.yellow}
            size={normalizeIconSize(25)}
            style={styles.icon}
          />
          <Text style={styles.infoLabel}>{vote_count}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Popularity:</Text>
        <View style={styles.infoContainer}>
          <Icon
            name="person"
            color={Colors.lightBlue}
            size={normalizeIconSize(25)}
            style={styles.icon}
          />
          <Text style={styles.infoLabel}>{Math.round(popularity)}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Release date:</Text>
        <View style={styles.infoContainer}>
          <Icon
            type="entypo"
            name="calendar"
            color={Colors.green}
            size={normalizeIconSize(25)}
            style={styles.icon}
          />
          <Text style={styles.infoLabel}>{release_date}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Country:</Text>
        <View style={styles.infoContainer}>
          <Icon
            type="font-awesome"
            name="flag"
            color={Colors.red}
            size={normalizeIconSize(25)}
            style={styles.icon}
          />
          <Text style={styles.infoLabel} numberOfLines={2}>
            {production_country}
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Genre:</Text>
        <View style={styles.infoContainer}>
          <Icon
            type="font-awesome-5"
            name="theater-masks"
            color={Colors.blue}
            size={normalizeIconSize(25)}
            style={[styles.icon]}
          />
          <Text
            style={[styles.infoLabel, {paddingLeft: normalizePaddingSize(5)}]}
            numberOfLines={5}>
            {genres.toString() === genres ? genres : 'unknown'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statisticsMainContainer: {
    flex: 0.75,
    height: '60%',
    justifyContent: 'space-evenly',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: normalizeFontSize(18),
    fontWeight: 'bold',
  },
  icon: {},
  infoLabel: {
    fontWeight: '700',
    fontSize: normalizeFontSize(17),
    paddingLeft: normalizePaddingSize(10),
  },
});

export default MovieStatistics;
