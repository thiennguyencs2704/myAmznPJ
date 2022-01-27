import Head from "next/head";
import { useState } from "react";

const HeadLayout = ({ children, title }) => {
  const [metaTags, setMetaTags] = useState({
    "og:image": `https://cdn-images.earthtoday.com/eyJrZXkiOiIvdXNlcnMvMTkwMzcwODY2NjU4OTY2MzIzMi9saW5rcy8xOTMwOTQ2NDQ2MTk4MzcwMzA0LzhmMzMyMjA3LWI3NTMtNDJlYy04NGMwLWJlNjIwODE5MGExZC1maW5hbmNpYWwtc3RhdGVtZW50LnBuZyIsImJ1Y2tldCI6ImVhcnRodG9kYXktcHJvZC1pbWFnZXMiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjg0MH19fQ==`,
    "fb:app_id": "356721174733993",
    "og:type": "website",
    "og:site_name": "EarthToday",
    "og:title": "EarthToday",
    "og:url": "https://myamznsite.vercel.app/",
    "og:description": "What’s happening on EarthToday",
  });

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
