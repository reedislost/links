import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {
  Center,
  Box,
  VStack,
  Link,
  Text,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Dark from "../components/Dark";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>reed links</title>
        <meta name="description" content="reed links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Center minH={"85vh"} flexDirection={"column"}>
        <Box>
          <Text fontSize={useBreakpointValue({ base: "5xl", md: "7xl" })}>
            🔗 LINKS 🔗
          </Text>
        </Box>
        <VStack
          mt={9}
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
        >
          <Link href="https://basecamp.com/gettingreal">getting real 📕</Link>
          <Link href="https://lostfr8">LOSTFR8 🚚</Link>
          <Link href="https://www.reedislost.com/">reedislost.com 💻</Link>
        </VStack>
      </Center>
      <Center>
        <VStack>
          <Dark />
          <HStack
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
            spacing={5}
          >
            <Link href="https://twitter.com/lostisreed"> 🐦</Link>
            <Link href="mailto:reed@lostfr8.com"> 📪</Link>
          </HStack>
        </VStack>
      </Center>
    </>
  );
}
