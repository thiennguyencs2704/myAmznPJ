import Head from "next/head";
import { useState } from "react";

const HeadLayout = ({ children, title, metaTags }) => {
  const metaTagsArray = (metaTags) => {
    if (!metaTags) {
      return [];
    }

    return Object.keys(metaTags).map((key) => {
      return {
        key,
        content: metaTags ? metaTags[key] : "",
      };
    });
  };

  const metaTagsTwitterArray = (metaTags) => {
    if (!metaTags) {
      return [];
    }

    return Object.keys(metaTags).map((key) => {
      return {
        key: key.replace("og", "twitter"),
        content: metaTags ? metaTags[key] : "",
      };
    });
  };

  const metaData = metaTagsArray(metaTags);
  const metaTwitterData = metaTagsTwitterArray(metaTags);
  metaTags;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/8364-amazon_102478.png" />
        {metaData.map((meta) => (
          <meta name={meta.key} content={meta.content} key={meta.key} />
        ))}
        {metaTwitterData.map((meta) => (
          <meta name={meta.key} content={meta.content} key={meta.key} />
        ))}
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="480" />
        <meta property="og:rich_attachment" content="true" />
      </Head>
      {children}
    </>
  );
};

export default HeadLayout;
