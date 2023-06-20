/** @type {import('tailwindcss').Config} */

import { BaseStyles, AdminStyles, FrontStyles } from 'ge-ui-kit'
export default {
  content: ["./src/**/*.{vue,js,ts}", "./node_modules/ge-ui-kit/dist/ge-ui-kit.es.js"],
  presets: [BaseStyles],
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        extend: {
          colors: {
            ...FrontStyles.theme.colors,
          }
        }
      },
      themes: [
        {
          name: 'admin-theme',
          extend: {
            colors: {
              ...AdminStyles.theme.colors
            }
          }
        }
      ]
    })
  ],
}



