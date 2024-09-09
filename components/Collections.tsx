import { getCollections } from "@/lib/actions/actions";
import CollectionItem from "./CollectionItem";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading4-bold md:text-heading3-bold lg:text-heading2-bold text-center text-gray-800">
        Collections
      </p>
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
