import Head from "next/head";

const HeadLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/8364-amazon_102478.png" />
      </Head>
      {children}
    </>
  );
};

export default HeadLayout;
