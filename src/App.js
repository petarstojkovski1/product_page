import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./theme";
import store from "./store/store";

import Product from "./pages/product";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Product />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
