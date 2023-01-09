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

  heading: `Noto Sans`,
  body: `Noto Sans, Helvetica`,
  mono: `Noto Sans Mono`,
});

export default theme;
