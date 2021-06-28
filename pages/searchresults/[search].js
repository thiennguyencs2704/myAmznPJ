import HeadLayout from "../../components/HeadLayout";
import FilteredProduct from "../../components/FilteredProduct";
import Link from "next/link";

export const getServerSideProps = async (context) => {
  const filteredObj = JSON.parse(context.query.filteredProducts);
  // console.log("Obj filtered", filteredObj);
  return {
    props: {
      filteredResults: filteredObj,
      searchKeyword: context.query.search,
    },
  };
};

const SearchResults = ({ filteredResults, searchKeyword }) => {
  return (
    <HeadLayout title={`Amazon | ${searchKeyword}`}>
      <div className="min-h-screen">
        {filteredResults.map((product) => (
          <Link
            key={product.id}
            href={{
              pathname: "/productdetail/[id]",
              query: { id: product.id, productData: JSON.stringify(product) },
            }}
          >
            <a>
              <FilteredProduct key={product.id} filteredProduct={product} />
            </a>
          </Link>
        ))}
      </div>
    </HeadLayout>
  );
};

export default SearchResults;
