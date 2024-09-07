import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: TProductType }) => {
  return (
    <Link href={`/product/${product._id}`}>
      <Image
        src={product.media[0]}
        alt={product.title}
        width={250}
        height={300}
        className="h-[250px] rounded-lg object-cover"
      />
      <div>
        <p>{product.title}</p>
        <p>{product.category}</p>
        <div>
          <p>${product.price}</p>
          <button>
            <Heart />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
