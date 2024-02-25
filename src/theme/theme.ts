import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    joken?: '#45C7FF'; // Jokenカラー
  }

  interface PaletteOptions {
    joken?: '#45C7FF'; // Jokenカラー
  }
}

export const theme = createTheme({
  palette: {
    joken: '#45C7FF', // Jokenカラー
  },
});
