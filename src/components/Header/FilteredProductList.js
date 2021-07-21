import FilteredProduct from "./FilteredProduct";

const FilteredProductList = ({ productResult }) => {
  return (
    <div>
      {productResult.map((product) => (
        <FilteredProduct key={product.id} filteredProduct={product} />
      ))}
    </div>
  );
};

export default FilteredProductList;
