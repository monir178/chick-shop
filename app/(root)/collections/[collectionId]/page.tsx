import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const { userId } = auth();

  const collectionDetails = await getCollectionDetails(params.collectionId);

  // console.log("Collection Details =>", collectionDetails);

  return (
    <MaxWidthWrapper className="flex flex-col text-gray-500  items-center gap-8 py-10">
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="Collection"
        className="w-full h-[400px] object-cover rounded-lg"
        priority
      />
      <p className="text-heading3-bold text-gray-600">
        {collectionDetails.title}
      </p>
      <p className=" text-center max-w-[900px]">
        {collectionDetails.description}
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 mt-5 md:gap-18 ">
        {collectionDetails?.products ? (
          collectionDetails.products?.map((product: TProductType) => (
            <ProductCard userId={userId} key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center text-">No product found</p>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export const dynamic = "force-dynamic";

export default CollectionDetails;
