import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "150%",
        letterSpacing: "0.03em",
        color: mode("gray.800", "#94A7C6")(props),
        bg: mode("white", "#0E1420")(props),
      },
      button: {
        color: "white",
      },
      "*::placeholder": {
        color: mode("#94A7C6", "whiteAlpha.400")(props),
      },
    }),
  },
  colors: {
    green: {
      200: "#00CE6B",
      300: "#00C767",
      400: "#009A50",
      500: "#00CE6B",
      600: "#00C767",
      700: "#009A50",
    },
    red: {
      200: "#FF5471",
      300: "#FF4060",
      400: "#D92140",
      500: "#FF5471",
      600: "#FF4060",
      700: "#D92140",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 400,
        borderRadius: "5px",
        color: "#fff",
        _disabled: {
          opacity: 0.8,
        },
      },
      defaultProps: {
        colorScheme: "green",
      },
      sizes: {
        sm: {
          height: "32px",
          padding: "4px 16px",
          fontSize: "13px",
          lineHeight: "150%",
          letterSpacing: "0.003em",
        },
        md: {
          height: "40px",
          padding: "10px 16px",
          fontSize: "14px",
          lineHeight: "140%",
          letterSpacing: "0.01em",
        },
        lg: {
          height: "44px",
          padding: "10px 16px",
          fontSize: "16px",
          lineHeight: "150%",
          letterSpacing: "0.005em",
        },
        xl: {
          height: "48px",
          padding: "10px 16px",
          fontSize: "16px",
          lineHeight: "150%",
          letterSpacing: "0.02em",
        },
      },
      variants: {
        solid: (props: any) => ({
          color: mode(
            props.colorScheme === "gray" ? "#2d3748" : "#fff",
            "#fff"
          )(props),
        }),
      },
    },
    Input: {
      baseStyle: {
        field: {
          fontWeight: 400,
          borderRadius: "5px",
          padding: "9px 10px",
          _dark: {
            color: "#fff",
            bg: "#242E42",
            borderColor: "#4E5F83",
            _placeholder: {
              color: "#94A7C6",
            },
          }
        },
      },
      sizes: {
        md: {
          field: {
            height: "44px",
            fontSize: "16px",
            lineHeight: "160%",
            borderRadius: "5px",
          },
        },
        sm: {
          field: {
            height: "40px",
            fontSize: "14px",
            lineHeight: "140%",
            borderRadius: "5px",
          },
        },
      },
    },
  },
});
export default theme;
