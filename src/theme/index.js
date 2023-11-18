"use client";
import PropTypes from "prop-types";
import { useMemo } from "react";
// material
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
// hooks
//
import shape from "./shape";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node,
};

export default function ThemeConfig({ children }) {
  const { themeMode, themeDirection } = {
    themeMode: "dark",
    themeDirection: "ltr",
  };

  const themeOptions = useMemo(
    () => ({
      palette: { ...palette.dark, mode: "dark" },
      shape,
      typography,
      breakpoints,
      direction: themeDirection,
      shadows: shadows.dark,
      customShadows: customShadows.dark,
    }),
    [themeDirection]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
