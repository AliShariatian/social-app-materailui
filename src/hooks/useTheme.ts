import { create } from "zustand";
import { PaletteMode } from "@mui/material";
import { persist } from "zustand/middleware";

const LOCAL_STORAGE_KEY = "theme";

interface IThemeState {
  mode: PaletteMode;
  toggleMode: () => void;
}

const getInitialMode = (): PaletteMode => {
  const savedMode = localStorage.getItem(LOCAL_STORAGE_KEY) as PaletteMode;
  return savedMode === "dark" ? "dark" : "light"; // Default to 'light' if not found
};

const useThemeStore = create(
  persist<IThemeState>(
    (set) => ({
      mode: getInitialMode(),

      toggleMode: () =>
        set((state) => {
          const newMode = state.mode === "light" ? "dark" : "light";
          return { mode: newMode };
        }),
    }),
    {
      name: LOCAL_STORAGE_KEY,
      getStorage: () => localStorage,
    }
  )
);

export default useThemeStore;
