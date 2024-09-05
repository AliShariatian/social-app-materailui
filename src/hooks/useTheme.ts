import { create } from "zustand";
import { PaletteMode } from "@mui/material";

interface IThemeState {
  mode: PaletteMode;
  toggleMode: () => void;
}

const useTheme = create<IThemeState>((set) => ({
  mode: "light", // default mode

  toggleMode: () =>
    set((state) => ({
      mode: state.mode === "light" ? "dark" : "light",
    })),
}));

export default useTheme;
