import { auth } from "@clerk/nextjs/server";

import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";
import HeadingText from "./HeadingText";

const Products = async () => {
  const products = await getProducts();
  const { userId } = auth();
  console.log("userId =>", userId);
  // console.log("Products =>", products.length);

  return (
    <div className="flex flex-col gap-4 ">
      <HeadingText text="Products" />

      {!products || products.length === 0 ? (
        <p className="text-gray-800 mt-4">No Collections found</p>
      ) : (
        <div className="grid grid-cols-2 gap-4  md:gap-10 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 ">
          {products.map((product: TProductType) => (
            <ProductCard key={product._id} product={product} userId={userId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

// export const dynamic = "force-dynamic";
