import * as React from "react";
import Head from "next/head";

function Metadata() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Julekort" />
      <meta property="og:site_name" content="Julekort" />
      <meta property="og:url" content="https://winsvold.github.io/julekort/" />
      <meta property="og:description" content="God jul til deg og dine!" />
      <title>God jul</title>
    </Head>
  );
}

export default Metadata;
