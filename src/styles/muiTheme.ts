import { createTheme } from "@mui/material/styles";

const muiTheme = (mode: "light" | "dark") => {
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return { theme };
};

export default muiTheme;
