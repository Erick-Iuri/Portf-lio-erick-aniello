import React from "react";

import Head from "next/head";

import { ChakraProvider } from "@chakra-ui/react";
// import { theme } from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Erick Aniello</title>
      </Head> 

      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
