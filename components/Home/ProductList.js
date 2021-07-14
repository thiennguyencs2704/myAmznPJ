import Product from "./Product";

const ProductList = ({ amaProducts }) => {
  return (
    <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-y-10 pb-10 mt-4">
      {amaProducts
        .map((item) => <Product key={item.id} product={item} />)
        .slice(0, 8)}
    </div>
  );
};

export default ProductList;
