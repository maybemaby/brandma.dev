const light = {
  bg: {
    primary: "#B2DFF8",
  },
  font: {
    color: "#141616f",
  },
};

const dark = {
  bg: {
    primary: "#101010",
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
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
