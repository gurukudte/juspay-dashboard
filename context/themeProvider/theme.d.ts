// theme.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      hint: string;
      black5: string; // Custom color "black-5"
    };
  }

  interface PaletteOptions {
    text?: {
      primary?: string;
      secondary?: string;
      disabled?: string;
      hint?: string;
      black5?: string; // Custom color "black-5"
    };
  }
}
