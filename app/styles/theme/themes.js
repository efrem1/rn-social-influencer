import {colours} from '../colours';
const colors = {
  blue: '#3A374A',
  darkBlue: '#2F2C3D',
  gold: '#DFBB7E',
  darkGold: '#B5935E',
  white: '#FFFFFF',
  creamwhite: '#F2EBDD',
};

export const light = {
  body: colors.creamwhite,
  transBody: 'rgba(242, 235, 221, 0.8)',
  label: colors.blue,
  header: colors.creamwhite,

  //navigation
  bottomTabs: colors.darkBlue,
  bottomTabText: colors.creamwhite,
  activeBottomTabText: colors.gold,

  //questions
  questionTitle: colors.darkBlue,
  questionSubtitle: colors.blue,
  questionInput: colors.white,

  message: colors.darkBlue,

  sortableRow: colors.white,

  progress: colors.white,

  slider: colors.creamwhite,

  icon: colors.white,

  card: colors.white,
  cardGradient: ['rgba(242,235,221,0.9)', 'rgba(242,235,221,0.9)'],
  tileGradient: ['rgba(242, 235, 221, 1)', 'rgba(242, 235, 221, 0)'],
  tileBorderGradient: [colors.gold, 'rgba(255,255,255,0.2)'],

  prefGradient: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)'],

  navbarIcon: colours.navbarIcon,
  subtitle: colours.darkBlue,
  border: colours.lightGrey,
  inactive: '#ebebeb',
  searchtab: '#fff',
  headerBorder: '#a7a7aa',
  labelGrey: colours.blueGrey,
  underlay: colours.underlay,
  statusBar: 'dark',
  searchBar: '#fff',
  searchBarBorder: '#EBEBEB',
  partner: '#eee',
  gradient: colours.gradient,
  greySection: '#f8f8f8',
  error: colours.error,
  loading: colours.blue,
};

export const dark = {
  body: colors.blue,
  transBody: 'rgba(58, 55, 74, 0.8)',
  label: colors.creamwhite,
  header: colors.blue,

  //navigation
  bottomTabs: colors.creamwhite,
  bottomTabText: colors.darkBlue,
  activeBottomTabText: colors.gold,

  //questions
  questionTitle: colors.gold,
  questionSubtitle: colors.creamwhite,
  questionInput: colors.darkBlue,

  message: colors.gold,

  sortableRow: colors.creamwhite,

  progress: colors.gold,

  slider: colors.darkBlue,
  icon: colors.gold,

  card: colors.darkBlue,
  cardGradient: ['transparent', 'rgba(0,0,0,0.5)'],
  tileGradient: [colours.darkBlue, 'transparent'],
  tileBorderGradient: [
    'rgba(223,189,126,1)',
    'rgba(223,189,126,0.8)',
    'rgba(223,189,126,0.5)',
    'rgba(223,189,126,0.05)',
  ],

  prefGradient: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)'],

  darkHeader: colors.darkBlue,
  navbarIcon: colors.creamwhite,

  activeLabel: colors.gold,

  bottomTabBackground: colors.creamwhite,
  labelGrey: 'rgba(255,255,255,0.4)',
  subtitle: '#a0a0a0',
  border: '#b7b7b7',
  inactive: '#a0a0a0',
  searchtab: '#fff',
  headerBorder: '#3a3a3a',
  underlay: 'rgb(30,40,50)',
  statusBar: 'light',
  searchBar: 'rgba(0,0,0,0.3)',
  searchBarBorder: '#a0a0a0',
  partner: 'rgb(30,40,50)',
  gradient: ['rgb(24,34,44)', 'rgb(30,40,50)'],
  greySection: 'rgba(18,28,38,1)',
  error: colours.error,
  loading: colors.gold,
};

export const getThemeColors = theme => {
  switch (theme) {
    case 'light':
      return light;
    case 'dark':
      return dark;
    default:
      return light;
  }
};
