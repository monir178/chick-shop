import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <MaxWidthWrapper className="flex flex-col text-gray-300  items-center gap-8">
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="Collection"
        className="w-full h-[400px] object-cover rounded-lg"
      />
      <p className="text-heading3-bold">{collectionDetails.title}</p>
      <p className="text-body-normal text-center max-w-[900px]">
        {collectionDetails.description}
      </p>
      <div>
        {collectionDetails.products.map((product: TProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default CollectionDetails;
