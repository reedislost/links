import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "system",
  useSystemColorMode: true,
  components: {
    Checkbox: {
      parts: ["control"],
      baseStyle: {
        control: {
          bg: "gray.200",
          _checked: {
            bg: "blue.300",
          },
        },
      },
    },
  },

  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default theme;
