import HeadLayout from "../../components/Layout/HeadLayout";
import { useRouter } from "next/router";
import ProductDetail from "../../components/Products/ProductDetail";

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://my-amzn-web-default-rtdb.firebaseio.com/products.json`
  );
  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: {
        slug: [
          product.id.toString(),
          product.title
            .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
            .replace(/  /g, "-")
            .replace(/ /g, "-"),
        ],
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  // console.log("Props", context.params.slug[0]);
  const productId = Number(context.params.slug[0]) - 1;
  const res = await fetch(
    `https://my-amzn-web-default-rtdb.firebaseio.com/products/${productId}.json`
  );
  const productObj = await res.json();
  if (!productObj) {
    return { notFound: true };
  }

  const review = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min).toLocaleString(
      "de-DE"
    );
  };
  const reviewNumber = review(3000, 10000);
  return {
    props: {
      productDetail: { ...productObj, reviewNumber },
    },
  };
};

const ProductDetailPage = ({ productDetail }) => {
  // console.log("check ID", id);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading product ... Wait for a second!</div>;
  }

  return (
    <HeadLayout title={`Amazon | ${productDetail.title}`}>
      <ProductDetail productDetail={productDetail} />
    </HeadLayout>
  );
};

export default ProductDetailPage;
