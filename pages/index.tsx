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
import NextLink from "next/link";

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
        <VStack mt={0}>
          <Text fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
            ⏩ ⏩
          </Text>
          <Box fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}>
            <Link href="https://lostfr8.com/" target={"_blank"}>
              <Text> 🚚</Text>
            </Link>
          </Box>
        </VStack>
        <VStack mt={24}>
          <Text fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
            ⏪ ⏪
          </Text>
          <Box fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}>
            <Link href="https://www.reedislost.com/" target={"_blank"}>
              {" "}
              💻
            </Link>
            <Link href="https://dudesoup.vercel.app/" target={"_blank"}>
              {" "}
              🍜
            </Link>
          </Box>
        </VStack>
        <VStack mt={24}>
          <Text fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
            🔗 🔗
          </Text>
          <Box fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}>
            <Link href="https://basecamp.com/gettingreal" target={"_blank"}>
              {" "}
              📕
            </Link>
            <Link href="https://fireship.io/" target={"_blank"}></Link>
          </Box>
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
