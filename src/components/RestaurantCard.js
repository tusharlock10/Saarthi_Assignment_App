import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../Constants';

const IMAGE_SIZE = 72;

export const RestaurantCard = (props) => {
  const {
    icon,
    name,
    vicinity,
    rating,
    permanently_closed,
    opening_hours,
  } = props.data;

  return (
    <View style={styles.CardView}>
      <View style={styles.ImageView}>
        <Image source={{uri: icon}} style={{flex: 1}} />
      </View>
      <View style={{flex: 1, paddingLeft: 10, paddingRight: 3}}>
        <Text style={styles.Name}>{name}</Text>
        <Text style={styles.Vicinity}>{vicinity}</Text>
        <Text style={styles.Price}>{'₹200 per person | 30 mins'}</Text>
        <Text style={styles.Status}>
          {permanently_closed ? (
            <Text style={{color: COLORS.RED}}>Permanently Closed</Text>
          ) : opening_hours.open_now ? (
            <Text style={{color: COLORS.GREEN}}>Open</Text>
          ) : (
            <Text style={{color: COLORS.RED}}>Closed</Text>
          )}
        </Text>
        <Text style={styles.Features}>
          {'Well sanitized kitchen * Daily temperature check * Rider hand wash'}
        </Text>
      </View>
      <View style={styles.RatingView}>
        <Text style={styles.RatingText}>{rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardView: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  ImageView: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    elevation: 4,
    padding: 3,
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
  },
  Name: {
    color: COLORS.DARK,
    fontSize: 16,
    fontFamily: FONTS.LATO,
    marginBottom: 2,
  },
  Vicinity: {
    color: COLORS.GRAY,
    fontSize: 14,
    fontFamily: FONTS.LATO,
    marginBottom: 2,
  },
  Price: {
    color: COLORS.LIGHT_GRAY,
    fontSize: 14,
    fontFamily: FONTS.LATO,
    marginBottom: 2,
  },
  Status: {
    fontSize: 14,
    fontFamily: FONTS.LATO_BOLD,
    marginBottom: 2,
  },
  Features: {
    color: COLORS.BLUE,
    fontSize: 14,
    fontFamily: FONTS.LATO,
    marginBottom: 2,
  },
  RatingView: {
    backgroundColor: COLORS.GREEN,
    height: 26,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  RatingText: {
    color: COLORS.WHITE,
    fontFamily: FONTS.LATO,
  },
});
