import Product from "./Product";
import Link from "next/link";

const ProductList = ({ amaProducts }) => {
  return (
    <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   -mt-16 lg:-mt-40 mx-auto">
      {amaProducts.map((item) => (
        <Link
          key={item.id}
          href={{
            pathname: "/productdetail/[id]",
            query: { id: item.id, productData: JSON.stringify(item) },
          }}
        >
          <a className=" mb-14">
            <Product key={item.id} product={item} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
