import HeadLayout from "../../components/HeadLayout";
import FilteredProduct from "../../components/FilteredProduct";
import { useSelector } from "react-redux";

export const getServerSideProps = async (context) => {
  return {
    props: {
      searchKeyword: context.query.search,
    },
  };
};

const SearchResults = ({ searchKeyword }) => {
  const productResult = useSelector((state) => state.products.productResult);

  return (
    <HeadLayout title={`Amazon | ${searchKeyword}`}>
      <div className="min-h-screen">
        {productResult.map((product) => (
          <FilteredProduct key={product.id} filteredProduct={product} />
        ))}
      </div>
    </HeadLayout>
  );
};

export default SearchResults;
