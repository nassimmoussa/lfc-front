export const selectTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#757575',
    primary: '#4163C4',
  },
});
