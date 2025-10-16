"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ED170A",
    },
    secondary: {
      main: "#FDAF3B",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#191720",
    },
    grey: {
      500: "#B5B2B2",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "12px 24px",
          fontSize: "1rem",
        },
      },
    },
  },
});

export default theme;
