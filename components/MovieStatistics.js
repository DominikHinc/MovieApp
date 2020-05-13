import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../constants/Colors';
import {
  normalizeIconSize,
  normalizeFontSize,
  normalizePaddingSize,
  normalizeMarginSize,
} from '../helpers/normalizeSizes';

const MovieStatistics = ({
  popularity,
  vote_count,
  release_date,
  production_country,
  genres,
}) => {
  return (
    <View style={styles.statisticsMainContainer}>
      <View style={styles.infoContainer}>
        <Icon
          name="star"
          color={Colors.yellow}
          size={normalizeIconSize(25)}
          style={styles.icon}
        />
        <Text style={styles.infoLabel}>{vote_count}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Icon
          name="person"
          color={Colors.lightBlue}
          size={normalizeIconSize(25)}
          style={styles.icon}
        />
        <Text style={styles.infoLabel}>{Math.round(popularity)}</Text>
      </View>
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
          {genres}
        </Text>
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
  icon: {},
  infoLabel: {
    fontWeight: '700',
    fontSize: normalizeFontSize(17),
    paddingLeft: normalizePaddingSize(10),
  },
});

export default MovieStatistics;
