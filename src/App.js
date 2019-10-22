import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React, { Component } from "react";
import 'typeface-roboto';
import RouteConfig from "./RouteConfig";

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <RouteConfig />
      </MuiThemeProvider>
    );
  }
}

export default App;
