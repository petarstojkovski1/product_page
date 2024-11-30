import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fc6203",
    },
    secondary: {
      main: "#f8f8f8", // Light grey
      light: "#ffffff", // Lighter grey
      dark: "#b0b0b0", // Darker grey
    },
    white: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
