import React from "react";
import Head from "next/head";

interface ComponentProps {
  title: string;
  themeColor: string;
}

export default (props: React.PropsWithChildren<ComponentProps>) => {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icon-192x192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link
          href="/icon-256x256.png"
          rel="icon"
          type="image/png"
          sizes="256x256"
        />
        <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
        <link
          href={`https://fonts.googleapis.com/css2?family=Poppins&display=swap`}
          rel="stylesheet"
        ></link>
        <meta name="theme-color" content={props.themeColor} />
        <title>{props.title}</title>
      </Head>
      <main>{props.children}</main>
    </>
  );
};
