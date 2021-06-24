import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-16 lg:-mt-40 mx-auto">
      {products.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
