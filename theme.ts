const light = {
  mode: "light",
  bg: {
    primary: "#B2DFF8",
    secondary: "black",
    gradient:
      "linear-gradient(97.52deg, #FFF6EC 41.27%, #FFF8B8 71.76%, #FBBE9C 96.58%)",
  },
  font: {
    color: "#141616f",
  },
};

const dark = {
  mode: "dark",
  bg: {
    primary: "#101010",
    secondary: "whitesmoke",
    gradient:
      "linear-gradient(97.52deg, #D2DBD6 41.27%, #FDD7F2 68.06%, #8CC8FF 96.58%)",
  },
  font: {
    color: "#81d1ff",
  },
};

const defaultTheme = {
  fontSizes: ["12px", "14px", "16px", "20px", "22px"],
  fontWeights: {
    body: 400,
    title: 600,
    subtitle: 500,
  },
  fontColor: {
    black: "black",
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
