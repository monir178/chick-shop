import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/actions/actions";
import { auth } from "@clerk/nextjs/server";

const ProductsPage = async () => {
  const products = await getProducts();

  const { userId } = auth();

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center gap-10 py-8 px-5">
        <p className="text-heading4-bold lg:text-heading2-bold text-center md:text-heading3-bold text-gray-800">
          Products
        </p>

        {!products || products.length === 0 ? (
          <p className="text-gray-800 mt-4">No Collections found</p>
        ) : (
          <div className="grid grid-cols-2 gap-8 md:gap-10 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 ">
            {products.map((product: TProductType) => (
              <ProductCard
                key={product._id}
                userId={userId}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export const dynamic = "force-dynamic";

export default ProductsPage;
