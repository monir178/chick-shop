import Image from "next/image";
import Link from "next/link";
import AddHeart from "./AddHeart";

const ProductCard = ({ product }: { product: TProductType }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <Link href={`/products/${product._id}`}>
        <Image
          src={product.media[0]}
          alt={product.title}
          width={250}
          height={300}
          className="h-[250px] rounded-lg object-contain md:object-cover hover:scale-105 transition-all"
        />
      </Link>

      <div>
        <p className="text-base-bold text-gray-800">{product.title}</p>
        <p className="text-small-medium text-gray-600">{product.category}</p>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-orange-600 font-bold">${product.price}</p>
          <AddHeart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
