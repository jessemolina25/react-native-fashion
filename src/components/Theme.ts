import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import { 
  createTheme, 
  createText, 
  createBox,
  useTheme as useReTheme, 
} from '@shopify/restyle'

export const palette = {
  white: 'white',
}

export const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    secondary: '#0C0D34',
    danger: '#FF0058',
    text: 'rgba(12, 13, 52, 0.7)',
    background: palette.white,
    grey: 'rgba(12, 13, 52, 0.05)',
    darkGrey: '#808080',
    lightGrey: '#FAFAFA',
    primaryLight: '#E7F9F7',
    orange: 'rgba(251,95,61,1)',
    yellow: 'rgba(244,198,45,1)',
    pink: 'rgba(240,141,151,1)',
    violet: 'rgba(64,33,175,1)',
    lightBlue: '#BFEAF5',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    zero: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontWeight: 'bold',
      fontSize: 80,
      color: 'background',
      textAlign: 'center'
    },
    title1: {
      fontSize: 28,
      color: 'secondary',
      fontWeight: 'bold',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: 'secondary',
      fontWeight: 'bold',
    },
    title3: {
      fontSize: 16,
      color: 'secondary',
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    button: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'text',
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      color: 'secondary',
    }
  },
  breakpoints: {}
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme();

type NameStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle}

export const makeStyles = <T extends NameStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
}
