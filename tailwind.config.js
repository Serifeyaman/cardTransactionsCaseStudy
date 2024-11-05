/** @type {import('tailwindcss').Config} */

const theme = {
  colors: {
    primary: '#E13915',
    primary_button_bg: '#E13915',
    primary_button_text: '#FFFFFF',
    secondary: '#EDF1F2', //border
    light_secondary: '#697177', //description
    dark_secondary: '#313538', //icon(copy)
    background: '#F5F6F7',
    description: '#151718', //text
    tint: "#C1C8CD",
  },
  creadit_card_colors: {
    light: "#EF4A15",
    transition: "#FFFFFF",
    primary: "#EF4A15",
    description: "#FFFFFF",
    bg_gradient: {
      light: "#FFFFFF",
      transition: "#F2E7E4",
      primary: "#F5e0DA"
    }
  },
  typography: {
    fontFamily: 'TT Norms Pro',
    fontSizes: {
      tabbarLabel: 11,
      xSmall: 12,
      small: 14,
      medium: 16,
      large: 18,
      xLarge: 20,
      xxLarge: 24,
    },
  },
};

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/routes/**/*.{js,jsx,ts,tsx}',
    './src/views/**/*.{js,jsx,ts,tsx}',
    './src/lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        primary_button_bg: theme.colors.primary_button_bg,
        primary_button_text: theme.colors.primary_button_text,
        secondary: theme.colors.secondary,
        light_secondary: theme.colors.light_secondary,
        dark_secondary: theme.colors.dark_secondary,
        background: theme.colors.background,
        description: theme.colors.description,
        tint: theme.colors.tint,
        creadit_card_light: theme.creadit_card_colors.light,
        creadit_card_transition: theme.creadit_card_colors.transition,
        creadit_card_primary: theme.creadit_card_colors.primary,
        creadit_card_description: theme.creadit_card_colors.description,
        creadit_card_bg_gradient_light: theme.creadit_card_colors.bg_gradient.light,
        creadit_card_bg_gradient_transition: theme.creadit_card_colors.bg_gradient.transition,
        creadit_card_bg_gradient_primary: theme.creadit_card_colors.bg_gradient.primary
      },
      fontFamily: {
        sans: [theme.typography.fontFamily, 'sans-serif'],
      },
      fontSize: {
        xs: `${theme.typography.fontSizes.xSmall}px`,
        sm: `${theme.typography.fontSizes.small}px`,
        base: `${theme.typography.fontSizes.medium}px`,
        md: `${theme.typography.fontSizes.medium}px`,
        lg: `${theme.typography.fontSizes.large}px`,
        xl: `${theme.typography.fontSizes.xLarge}px`,
        "2xl": `${theme.typography.fontSizes.xxLarge}px`,
      },
    },
  },
  plugins: [],
};
