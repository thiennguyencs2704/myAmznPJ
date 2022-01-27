import Head from "next/head";

const HeadLayout = ({ children, title }) => {
  const metaTags = {
    "og:image": `https://stage-images.earthtoday.com/eyJrZXkiOiIvdXNlcnMvMzY4MDM1ODQ0ODU0MTIyNDk2MC9jYW1wYWlnbnMvMzY4MDM1ODQ1MDM3NDEzNTgyNy8xMDQzY2FlMC1jMjc2LTQzOGYtOTNlMy05ZDhlOWY4MmY0MWUtaW5mb19mYWNlYm9vay5wbmciLCJidWNrZXQiOiJlYXJ0aHRvZGF5LXN0YWdlLWltYWdlcyJ9`,
    "fb:app_id": "356721174733993",
    "og:type": "website",
    "og:site_name": "EarthToday",
    "og:title": "EarthToday",
    "og:url": "https://earthtoday.com/",
    "og:description": "What’s happening on EarthToday",
  };

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

  const metaData = metaTagsArray(metaTags);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/8364-amazon_102478.png" />
        {metaData.map((meta) => (
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
