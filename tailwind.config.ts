import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      }
    },
    colors: {
      yellow:'#FECE00',
      'yellow-light':'#FED526',
      green:'#31b057'
    },
  },
  plugins: [require("daisyui")],
}
export default config
