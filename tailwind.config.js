/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "kalam": ["Kalam", "cursive"],
      "open-sans": ["Open Sans", "sans-serif"],
    },
    backgroundImage: (theme) => ({
      bg1: "url(https://i.pinimg.com/564x/cd/b9/e7/cdb9e7d41006d3f862c1c31996eec075.jpg)",
      bg2: "url(https://i.pinimg.com/564x/8c/a5/fe/8ca5fe861eaa707608780aee8322c5c5.jpg)",
      bg3: "url(https://i.pinimg.com/564x/01/ed/ea/01edea8bdba01504a40f5b3042ce9ac6.jpg)",
      bg4: "url(https://i.pinimg.com/564x/90/d1/b9/90d1b95b88e29cea8450d24db6e77ef9.jpg)",
      bg5: "url(https://i.pinimg.com/564x/76/4c/fa/764cfae6ef4eb1fbe5b1ced73bdd2894.jpg)",
    }),
  },
  plugins: [],
};
