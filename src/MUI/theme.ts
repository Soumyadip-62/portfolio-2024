import { createTheme } from "@mui/material";


export const theme = createTheme({
  palette: {
    primary: {
      main: "#D2691E",
    },
    secondary: {
      main: "#8B4513",
    },
    background: {
      default: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: '"Lufga Regular", "Lufga Medium", "Lufga SemiBold", "Lufga Bold","Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
          textTransform: "none",
          fontSize: "1rem",
          padding: "12px 24px",
        },
      },
    },
  },
})