import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import { getSearchedProducts } from "../../../../lib/actions/actions";
import { auth } from "@clerk/nextjs/server";

const SearchPage = async ({ params }: { params: { query: string } }) => {
  const { searchedProducts } = await getSearchedProducts(params.query);

  const { userId } = auth();

  const decodedQuery = decodeURIComponent(params.query);

  return (
    <MaxWidthWrapper>
      <p className="text-heading3-bold text-gray-800 my-10">
        Search results for{" "}
        <span className="text-orange-500">{decodedQuery}</span>
      </p>
      {!searchedProducts ||
        (searchedProducts.length === 0 && (
          <p className="text-gray-800 text-center mt-4">No result found</p>
        ))}
      <div className="grid grid-cols-2 gap-8 md:gap-10 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 ">
        {searchedProducts?.map((product: TProductType) => (
          <ProductCard key={product._id} userId={userId} product={product} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export const dynamic = "force-dynamic";

export default SearchPage;
