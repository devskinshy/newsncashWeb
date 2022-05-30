import React from 'react';
import {createTheme, CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import {themeOptions} from "../config/theme";

const ThemePreset = ({children}) => {
  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemePreset;
