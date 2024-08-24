/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx, ts, tsx}"],
  theme: {
    extend: {},
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hyphens-auto": {
          hyphens: "auto",
          "-webkit-hyphens": "auto",
          "-ms-hyphens": "auto",
        },

        ".min-h-25": {
          minHeight: "18.5vh",
        },
        ".border-1": {
          borderWidth: "0.5px",
        },
        ".min-h-95": {
          minHeight: "95vh",
        },

        ".min-h-75": {
          minHeight: "75vh",
        },
        ".min-h-70": {
          minHeight: "60vh",
        },
        ".min-vh-40": {
          height: "40vh",
        },

        ".min-vh-50": {
          height: "50vh",
        },
        ".min-vh-60": {
          height: "60vh",
        },
        ".min-vh-65-8": {
          height: "69.7vh",
        },
        ".min-vh-70": {
          height: "75vh",
        },
        ".min-vh-80": {
          height: "80vh",
        },
        ".min-vh-85": {
          height: "85vh",
        },
        ".min-vh-90": {
          height: "90vh",
        },
        ".min-vh-95": {
          height: "95vh",
        },
        ".w-13": {
          width: "50px",
        },
        ".w-54": {
          width: "220px",
        },

        ".w-90": {
          width: "90%",
        },
        ".w-85": {
          width: "85%",
        },
        ".w-110": {
          width: "103%",
        },

        ".h-90": {
          height: "90%",
        },

        ".z-100": {
          zIndex: "100",
        },

        ".mb-18": {
          marginBottom: "4.5rem",
        },
        ".top-vh-15": {
          top: "15vh",
        },
        ".left-63": {
          left: "250px",
        },
        ".m-l-63": {
          marginLeft: "250px",
        },
        ".custom-red": {
          backgroundColor: "#eb1414",
        },
        ".custom-red-text": {
          color: "#eb1414",
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
