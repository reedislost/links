import {
  Flex,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import splitbee from "@splitbee/web";

export default function Dark() {
  const { colorMode, toggleColorMode } = useColorMode();
  const background = useColorModeValue("gray.700", "gray.300");

  const iconSize = useBreakpointValue({ base: "3xl", md: "5xl" });

  return (
    <Button
      bg="none"
      size={"sm"}
      _hover={{
        background: "none",
      }}
      data-splitbee-event="dark mode"
      onClick={() => {
        toggleColorMode();
        splitbee.track("Dark Mode Pressed");
      }}
    >
      {colorMode === "light" ? (
        <Text fontSize={iconSize}>🌙</Text>
      ) : (
        <Text fontSize={iconSize}>☀️</Text>
      )}
    </Button>
  );
}
