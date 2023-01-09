import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import splitbee from "@splitbee/web";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect((): void => {
    splitbee.init({ apiUrl: "/sb-api", scriptUrl: "/sb.js" });
  }, []);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
