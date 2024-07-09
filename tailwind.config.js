module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
    },
    fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'cursive':['Pacifico'],
  }
  
    
  },
  plugins: [
    require('flowbite/plugin'),

  ],
  darkMode: "class",
}

