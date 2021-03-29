import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4274B9',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: '#ECE7EE',
      default:"#A89EA7"
    },
    text: {
      primary: "#686667",
      
    }
  },
  overrides:{
      MuiAppBar:{
          colorTransparent: {
              boxShadow: "none"
          }
      },
      MuiPaper: {
        rounded: {
          borderRadius: "0px",
          backgroundColor: "white",
        },
        elevation1: {
          boxShadow: "0px 5px 12px 3px rgba(0, 0, 0, 0.05)"
        }
      }
  },
  customProps: {
    paddingTop: "60px",
    containerWidth: "90vw",
    margin: "8vh auto 0 auto",
  },
  typography: {
    allVariants: {
      fontFamily: ["Almira"]
    }
  }
});

export default theme;