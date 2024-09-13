import Gallery from "@/components/Gallery";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import ProductInfo from "@/components/ProductInfo";
import { getProductDetails, getRelatedProducts } from "@/lib/actions/actions";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productDetails = await getProductDetails(params.productId);

  const relatedProducts = await getRelatedProducts(params.productId);

  // console.log("related products =>", relatedProducts);

  return (
    <>
      <MaxWidthWrapper className="flex justify-center items-start gap-16 py-10 max-md:flex-col max-md:items-center ">
        <Gallery productMedia={productDetails.media} />
        <ProductInfo productInfo={productDetails} />
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex flex-col items-center py-5">
        <p className="text-heading3-bold text-gray-800">Related Products</p>

        <div className="flex flex-wrap gap-16 mx-auto mt-8">
          {relatedProducts?.map((product: TProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default ProductDetails;
