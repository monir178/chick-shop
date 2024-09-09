import Gallery from "@/components/Gallery";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductInfo from "@/components/ProductInfo";
import { getProductDetails } from "@/lib/actions/actions";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productDetails = await getProductDetails(params.productId);
  // console.log("product details =>", productDetails);

  return (
    <MaxWidthWrapper>
      <div className="flex justify-center items-start gap-16 py-10 max-md:flex-col max-md:items-center ">
        <Gallery productMedia={productDetails.media} />
        <ProductInfo productInfo={productDetails} />
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductDetails;
