import HeadLayout from "../../components/Layout/HeadLayout";
import { useRouter } from "next/router";
import ProductDetail from "../../components/Products/ProductDetail";
import axios from "axios";

export const getStaticPaths = async () => {
  const res = await axios(`/products.json`);
  const data = res.data;

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
  const productId = Number(context.params.slug[0]) - 1;
  const res = await axios(`/products/${productId}.json`);
  const productObj = res.data;
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
