import { getProducts } from "@/lib/actions";
import ProductCard from "./ProductCard";

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading4-bold lg:text-heading2-bold text-center text-gray-800">
        Products
      </p>

      {!products || products.length === 0 ? (
        <p className="text-gray-800 mt-4">No Collections found</p>
      ) : (
        <div className="flex mx-auto flex-wrap  gap-4">
          {products.map((product: TProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
