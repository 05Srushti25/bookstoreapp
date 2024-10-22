module.exports = {
  content: [
    './index.html',                // Reference to your index.html in the root
    './src/**/*.{js,jsx,ts,tsx,css}' // Include all JS/JSX/TSX/CSS files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
