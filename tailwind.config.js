/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      kalam: ["Kalam", "cursive"],
      "open-sans": ["Open Sans", "sans-serif"],
    },
    backgroundImage: (theme) => ({
      bg1: "url(https://static.vecteezy.com/system/resources/previews/023/530/252/original/hand-drawn-yellow-highlight-marker-stripes-on-transparent-background-png.png)",
      bg2: "url(https://static.vecteezy.com/system/resources/thumbnails/021/998/567/small/hand-drawn-circle-highlighting-free-png.png)",
      bg3: "url(https://static.vecteezy.com/system/resources/previews/023/551/179/non_2x/hand-drawn-blue-highlight-marker-stripes-on-transparent-background-png.png)",
      bg4: "url(https://www.pngkit.com/png/full/111-1110988_image-result-for-hand-drawing-a-circle-hand.png)",
      bg5: "url(https://static.vecteezy.com/system/resources/previews/009/392/131/original/speech-bubble-icon-sign-symbol-design-free-png.png)",
      bg6: "url(https://static.vecteezy.com/system/resources/previews/035/966/807/original/yellow-stroke-drawn-with-marker-on-transparent-background-png.png)",
      bg7: "url(https://static.vecteezy.com/system/resources/previews/001/189/260/non_2x/star-png.png)",
      bg8: "url(https://static.vecteezy.com/system/resources/previews/026/675/960/original/yellow-brush-stroke-free-png.png)",
      bg9: "url(https://static.vecteezy.com/system/resources/previews/009/973/913/non_2x/cute-kitty-cat-head-cartoon-element-free-png.png)",
      bg10: "url(https://static.vecteezy.com/system/resources/previews/022/183/254/non_2x/hand-drawn-colored-star-banner-free-png.png)",
      bg11: "url(https://static.vecteezy.com/system/resources/thumbnails/022/825/379/small_2x/illustration-stars-pencil-outline-effect-hand-drawn-stars-doodles-with-pencils-png.png)",
      bg12: "url(https://i.pinimg.com/564x/99/bd/56/99bd56a3d7ec602aad416e20fa3ff761.jpg)",
      bg13:"url(https://i.pinimg.com/564x/40/f0/e3/40f0e3d6fe79c8792288201119465bca.jpg)",
      bg14: "url(https://static.vecteezy.com/system/resources/previews/010/335/648/non_2x/text-box-cartoon-free-png.png)",
      bg15: "url(https://static.vecteezy.com/system/resources/previews/022/182/986/original/hand-drawn-colored-geometrical-banner-free-png.png)"
    }),
  },
  plugins: [],
};
