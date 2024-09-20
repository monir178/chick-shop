import Image from "next/image";
import Link from "next/link";
import AddHeart from "./AddHeart";

interface IProductCardProps {
  product: TProductType;
  updateSignedInUser?: (updatedUser: TUserType) => void;
  userId?: string | null;
  user?: object | null | undefined;
}

const ProductCard = ({
  product,
  updateSignedInUser,
  userId,
  user,
}: IProductCardProps) => {
  return (
    <div className="flex flex-col gap-2 shadow-md p-2 md:p-4">
      <Link href={`/products/${product._id}`}>
        <Image
          src={product?.media[0]}
          alt={product?.title}
          width={250}
          height={300}
          className="h-[250px] object-cover hover:scale-105 transition-all"
        />
      </Link>

      <div>
        <p className="text-base-bold text-gray-800  truncate">
          {product.title}
        </p>
        {!userId && !user ? (
          <div className="flex justify-between items-center">
            <p className="text-small-medium text-gray-600">
              {product.category}
            </p>
            <p className="text-orange-600 font-bold">${product.price}</p>
          </div>
        ) : (
          <p className="text-small-medium text-gray-600">{product.category}</p>
        )}

        {userId || user ? (
          <div className="mt-2 flex justify-between items-center">
            <p className="text-orange-600 font-bold">${product.price}</p>

            <AddHeart
              updateSignedInUser={updateSignedInUser}
              product={product}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
