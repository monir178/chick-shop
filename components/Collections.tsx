import { getCollections } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  // console.log(collections);
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading4-bold lg:text-heading2-bold text-center text-gray-800">
        Collections
      </p>
      {!collections || collections.length === 0 ? (
        <p className="text-gray-800 mt-4 font-bold">No Collections found</p>
      ) : (
        <div className="flex items-center justify-center gap-6 ">
          {collections.map((collection: TCollectionType) => (
            <Link key={collection._id} href={`/collections/${collection._id}`}>
              <Image
                src={collection.image}
                alt={collection.title}
                width={350}
                height={200}
                className="rounded-lg"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
