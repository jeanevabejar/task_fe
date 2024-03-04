/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "amatic-sc": ["Amatic SC", "sans-serif"]
    },
    backgroundImage: theme =>({
      'bg1': "url(https://i.pinimg.com/564x/cd/b9/e7/cdb9e7d41006d3f862c1c31996eec075.jpg)",
      'bg2': 'url(https://i.pinimg.com/564x/15/1a/35/151a35679b6479afbdf99cc32e1fc4d0.jpg)',
      'bg3': 'url(https://i.pinimg.com/564x/84/fb/29/84fb29fef1ef6f2cf0a641bfbb02e58d.jpg)',
      'bg4': 'url(https://i.pinimg.com/564x/3d/bb/b3/3dbbb3b19edae57453c7290fa4a5246e.jpg)',
      'bg5': 'url(https://icons8.com/icon/83145/done)'
    })
  },
  plugins: [],
};
