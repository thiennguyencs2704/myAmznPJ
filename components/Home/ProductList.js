import Product from "./Product";

const ProductList = ({ amaProducts }) => {
  return (
    <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-16 lg:-mt-40 mx-auto gap-y-10">
      {amaProducts.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
