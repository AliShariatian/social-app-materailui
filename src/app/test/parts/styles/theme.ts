import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#0f0", // green
      light: "skyblue", // blue
    },
    secondary: {
      main: "#f0f", // pink
    },
  },
});

export default muiTheme;
