import { ThemeOptions } from '@mui/material/styles';
import { blueGrey, blue, brown } from '@mui/material/colors';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: blue,
    text: {
      primary: brown[900],
    }
  },
  typography: {
    fontFamily: "'Poppins'",
    h1: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "40px",
      lineHeight: "52px",
    },
    h2: {

    },
    h3: {

    },
    h4: {

    },
    h5: {
      fontFamily: 'Poppins',
      fontSize: "24px",
      lineHeight: "52px",
    },
    h6: {

    },
    subtitle1: {
    },
    subtitle2: {
    },
    body1: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px"
    },
    body2: {
    },
    button: {
    },
    caption: {
    },
    overline: {

    }
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& label": {
            display: "none"
          },
          "& .MuiInputBase-root input": {
            height: "24px"
          },
          "& .MuiInputBase-root fieldset": {
            height: "58px",
            top: 0
          },
          "& .MuiInputBase-root fieldset legend": {
            display: "none"
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          textTransform: "initial"
        },
        outlined: {
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: blueGrey[500],
          color: blueGrey[500],
          ":hover": {
            borderWidth: 2,
            borderColor: blueGrey[500]
          },
        },
        contained: {
          height: 50,
          outline: "none",
          borderRadius: 15,
          textTransform: "initial"
        }
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          marginBottom: 24,
          outline: "none",
          borderRadius: 15,
        },
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          '&.Mui-focused fieldset': {
            borderColor: `${blueGrey[500]} !important`,
          },
        },
        notchedOutline: {
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: blueGrey[500],
        }
      }
    }
  },
  spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};

export default lightThemeOptions;
