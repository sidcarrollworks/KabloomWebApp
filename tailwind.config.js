module.exports = {
  mode: 'jit',
 // These paths are just examples, customize them to match your project structure
 purge: [
   './public/**/*.html',
   './src/**/*.{js,jsx,ts,tsx,vue}',
 ],
  theme: {
    extend: {
      colors: {
        "playful-indigo": "#646AF5",
        "playful-blue": "#5D8EF4",
        "playful-red": "#F57C74",
        "bold-red": "#ee3d32"
      },
      fontFamily: {
        sans : ['Como', 'sans-serif']
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
    // ...
  }
  // ...
}