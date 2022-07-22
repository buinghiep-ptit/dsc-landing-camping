import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// Create a theme instance.
export let theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
    button: {
      fontWeight: 900,
    },
    fontFamily: [
      "Inter",
      "sans-serif",
      "Caveat cursive",
      "Livvic sans-serif",
    ].join(","),
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.75,
      color: "#323E5D",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.57,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.75,
      color: "#101426",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.375,
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.375,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.375,
    },
  },
  palette: {
    primary: {
      main: "#FF6464",
    },
    secondary: {
      light: "#EDF7FA",
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#21243D",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        root: {
          paddingLeft: "0px!important",
          paddingRight: "0px!important",
        },
        maxWidthSm: {
          maxWidth: "680px",
          "@media (min-width: 600px)": {
            maxWidth: "680px",
          },
        },
        maxWidthMd: {
          maxWidth: "824px",
          "@media (min-width: 900px)": {
            maxWidth: "824px",
          },
        },
        maxWidthLg: {
          maxWidth: "1250px",
          "@media (min-width: 1025px)": {
            maxWidth: "1250px",
          },
        },
      },
      variants: [],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          // paddingLeft: "0px!important",
          // paddingRight: "0px!important",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
      styleOverrides: {
        root: {
          color: "black",
          "&:hover, &.active": {
            color: "#556cd6",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: "contained",
            color: "primary",
          },
          style: {
            textTransform: "none",
            color: "white",
            fontSize: "1rem",
            padding: "8px 24px",
            background:
              "radial-gradient(88.39% 88.39% at 16.07% 11.61%, #FFBD70 0%, #FF7836 100%)",
            borderRadius: "100px",
          },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 4,
        },
      },
      variants: [
        {
          props: {
            color: "secondary",
          },
          style: {
            fontWeight: "bold",
            fontSize: 16,
            color: "white",
            backgroundColor: "#142850",
          },
        },
      ],
    },
  },
})

theme = responsiveFontSizes(theme)
