import { Box, Center } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function blog() {
  return (
    <Center minH={"85vh"}>
      <Box>
        <Link href="/">HOME</Link>
      </Box>
    </Center>
  );
}
