/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-white": "#FFFFFF",
        "color-description": "#646379",
        "primary-100": "#2C2B47",
        "primary-300": "#1A1934",
        "primary-pink": "#FCAFB7",
        "primary-yellow": "#FEE253",
        "primary-pink-hover": "#FF98A3",
      },
      backgroundImage: {
        "gradient-lightPink":
          "linear-gradient(transparent, transparent), linear-gradient(#FCAFB7, #FCAFB7)",
      },
      backgroundSize: {
        zeroThree: "0 3px",
        OneHund3Pixel: "100% 3px ",
      },
      backgroundPosition: {
        "0-100": "0 100%",
      },
      transitionProperty: {
        bgSize5sEaseInOut: "background-size .5s ease-in-out",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
      },
      borderWidth: {
        35: "35px",
        40: "40px",
        50: "50px",
        172: "172px",
        215: "215px",
      },
      width: {
        "11.5/12": "97.666667%;",
        "11.4/12": "95.666667%;",
        "10.5/12": "92.666667%;",
      },

      fontFamily: {
        fredokaOne: ["Fredoka One", "cursive"],
        rokkitt: ["Rokkitt", "sans-serif"],
      },
      fontSize: {
        "4xl": "2.5rem",
      },

      animation: {
        fadeIn: " fadeIn 1.5s forwards",
        inRight: "right 1.5s forwards cubic-bezier(0.785, 0.135, 0.15, 0.86);",
        inLeft: "left 1.5s forwards cubic-bezier(0.785, 0.135, 0.15, 0.86)",
        popIn: "popIn 0.5S cubic-bezier(0.26, 0.53, 0.74, 1.48)",
      },
      keyframes: {
        popIn: {
          "0%": {
            opacity: 0,
            transform: "scaleX(0.5, 0.5)",
          },

          "100%": {
            opacity: 1,
            transform: "scaleX(1, 1)",
          },
        },

        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "scale(1)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
        slideLeft: {
          from: {
            opacity: 0,
            transform: "translateX(200px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0%)",
          },
        },
        right: {
          "0%": {
            transform: "translateX(20%)",
          },
          " 60%": {
            transform: "translateX(20%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        left: {
          "0%": {
            transform: "translateX(-3%)",
          },
          " 60%": {
            transform: "translateX(-3%)",
          },
          "100%": {
            transform: "translateX(-0%)",
          },
        },
      },
      skew: {
        17: "17deg",
      },
      translate: {
        "40percent": "34%",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
