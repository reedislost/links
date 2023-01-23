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
        <title>reed site</title>
        <meta name="description" content="reed links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Center
        minH={"80vh"}
        flexDirection={"column"}
        fontSize={useBreakpointValue({ base: "5xl", md: "7xl" })}
      >
        <Text fontSize={useBreakpointValue({ base: "7xl", md: "9xl" })}>
          🔗
        </Text>
        <Link href="https://lostfr8.com/" target={"_blank"}>
          <Text> 🚚</Text>
        </Link>

        <Link href="https://www.reedislost.com/" target={"_blank"}>
          💻
        </Link>
        <Link href="https://dudesoup.vercel.app/" target={"_blank"}>
          {" "}
          🍜
        </Link>

        <Link href="https://basecamp.com/gettingreal" target={"_blank"}>
          {" "}
          📕
        </Link>
        <Link href="https://fireship.io/" target={"_blank"}></Link>
      </Center>
      <Center>
        <VStack>
          <Dark />
          <HStack
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
            spacing={5}
          >
            <Link href="https://twitter.com/lostisreed" target={"_blank"}>
              {" "}
              🐦
            </Link>
            <Link href="mailto:reed@lostfr8.com"> 📪</Link>
            <Link
              href="https://app.splitbee.io/public/paymemofo.com"
              target={"_blank"}
            >
              {" "}
              📈
            </Link>
          </HStack>
        </VStack>
      </Center>
    </>
  );
}
