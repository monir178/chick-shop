import { getCollections } from "@/lib/actions/actions";
import CollectionItem from "./CollectionItem";
import HeadingText from "./HeadingText";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col  gap-4">
      <HeadingText text="Collections" />
      {!collections || collections.length === 0 ? (
        <p className="text-gray-800 mt-4 font-bold">No Collections found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collections.map((collection: TCollectionType) => (
            <CollectionItem key={collection._id} collection={collection} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
