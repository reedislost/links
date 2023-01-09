import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Center, Box, VStack, Link } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>reed links</title>
        <meta name="description" content="reed links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center minH={"100vh"} flexDirection={"column"}>
        <Box>Links</Box>
        <VStack mt={9}>
          <Link href="https://basecamp.com/gettingreal">getting real</Link>
        </VStack>
      </Center>
    </>
  );
}
