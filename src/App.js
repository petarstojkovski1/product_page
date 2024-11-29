import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./theme";

import Product from "./pages/product";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Product />
    </ThemeProvider>
  );
};

export default App;
