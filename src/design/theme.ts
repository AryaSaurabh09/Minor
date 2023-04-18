import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Primary, Secondary } from "./color";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: Primary,
    },
    secondary: {
      main: Secondary,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;