/** @type {import('tailwindcss').Config} */

const theme = require('./src/lib/themeConfig.json');

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
