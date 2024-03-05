/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "kalam": ["Kalam", "cursive"],
      "open-sans": ["Open Sans", "sans-serif"],
    },
    backgroundImage: (theme) => ({
      bg1: "url(https://static.vecteezy.com/system/resources/previews/023/530/252/original/hand-drawn-yellow-highlight-marker-stripes-on-transparent-background-png.png)",
      bg2: "url(https://static.vecteezy.com/system/resources/thumbnails/021/998/567/small/hand-drawn-circle-highlighting-free-png.png)",
      bg3: "url(https://static.vecteezy.com/system/resources/previews/023/551/179/non_2x/hand-drawn-blue-highlight-marker-stripes-on-transparent-background-png.png)",
      bg4: "url(https://www.pngkit.com/png/full/111-1110988_image-result-for-hand-drawing-a-circle-hand.png)",
      bg5: "url(https://static.vecteezy.com/system/resources/previews/009/392/131/original/speech-bubble-icon-sign-symbol-design-free-png.png)",
      bg6: "url(https://static.vecteezy.com/system/resources/previews/023/551/111/original/hand-drawn-green-highlight-marker-stripes-on-transparent-background-png.png)",
      bg7: "url(https://static.vecteezy.com/system/resources/previews/022/056/326/non_2x/grunge-style-check-mark-free-png.png)"
    }),
  },
  plugins: [],
};
