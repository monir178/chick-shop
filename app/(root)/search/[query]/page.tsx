import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";

const SearchPage = async ({ params }: { params: { query: string } }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search/${params.query}`
  );

  const data = await res.json();

  console.log(data.searchedProducts);
  const searchedProducts = data.searchedProducts;

  return (
    <MaxWidthWrapper>
      <p className="text-heading3-bold text-gray-800 my-10">
        Search results for {params.query}
      </p>
      {!searchedProducts ||
        (searchedProducts.length === 0 && (
          <p className="text-gray-800 text-center mt-4">No result found</p>
        ))}
      <div className="grid grid-cols-2 gap-8 md:gap-10 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 ">
        {searchedProducts?.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default SearchPage;
