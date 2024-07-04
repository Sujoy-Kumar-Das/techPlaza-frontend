import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2779F5",
    },
    secondary: {
      main: "#F45E0C",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
      styleOverrides: {
        root: {
          padding: "40px 0px",
        },
      },
    },
  },
});

export default lightTheme;
