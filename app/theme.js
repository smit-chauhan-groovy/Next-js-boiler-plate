"use client";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";

let theme = createTheme();
// Create a theme instance.
theme = createTheme(theme, {
  MuiCssBaseline: {
    "@global": {
      "@font-face": [
        // MontserratExtraLight,
        // MontserratLight,
        // MontserratRegular,
        // MontserratMedium,
        // MontserratBlack,
        // MontserratSemiBold,
        // MontserratBold,
        // MontserratExtraBold,
        // GilbertQualifiDemo,
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        title: {
          fontSize: 22,
          color: "black",
          fontFamily: "var(--ralway-bold)",
        },
        h1: {
          fontSize: 24,
          color: "red",
        },
      },
    },
  },
});

export default theme;
