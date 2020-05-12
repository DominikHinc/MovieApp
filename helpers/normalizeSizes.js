import {Dimensions, PixelRatio, Platform} from 'react-native';

const BASE_PHONE_WIDTH = 393;
const SCREEN_WIDTH = Dimensions.get('window').width;

const scale = SCREEN_WIDTH / BASE_PHONE_WIDTH;

// Functions responsible for scaling passed sizes in order to keep the same layout on every device

export const normalizeFontSize = size => {
  const newSize = size * scale;
  if (Platform.OS === 'android') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
};

//Separating them just in case there is need to change logic for specific component types

export const normalizeIconSize = size => {
  return normalizeFontSize(size);
};

export const normalizePaddingSize = size => {
  return normalizeFontSize(size);
};

export const normalizeMarginSize = size => {
  return normalizeFontSize(size);
};

export const normalizeBorderRadiusSize = size => {
  return normalizeFontSize(size);
};
export const normalizeWidth = size => {
  return normalizeFontSize(size);
};
export const normalizeHeight = size => {
  return normalizeFontSize(size);
};
