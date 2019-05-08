const colors = {
  red: '#ee0000',
  green: 'green',
  background: 'white',
  text: 'black',
};

const mixins = {
  cancelled: {
    textDecoration: 'line-through',
    textDecorationColor: colors.text,
  },
  delayed: {
    color: colors.red,
  },
  changed: {
    color: colors.red,
  },
  early: {
    color: colors.green,
  },
};

const theme: Maru.Theme = {
  colors,
  mixins,
  mui: {
    type: 'light',
  },
};

export default theme;