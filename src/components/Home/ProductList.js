import Product from "./Product";

const ProductList = ({ amaProducts }) => {
  return (
    <div className="grid grid-flow-row pb-10 mx-auto mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
      {amaProducts
        .map((item) => <Product key={item.id} product={item} />)
        .slice(0, 8)}
    </div>
  );
};

export default ProductList;
