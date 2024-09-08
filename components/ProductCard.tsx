"use client";

import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductCard = ({ product }: { product: TProductType }) => {
  const { user } = useUser();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [signedInUser, setSignedInUser] = useState<TUserType | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/users");
      const data = await res.json();
      setSignedInUser(data);
      setIsLiked(data.wishlist.includes(product._id));
      setLoading(false);
    } catch (error) {
      console.log("users_GET =>", error);
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      if (!user) {
        router.push("/sign-in");
        return;
      } else {
        setLoading(true);
        const res = await fetch("/api/users/wishlist", {
          method: "POST",
          body: JSON.stringify({
            productId: product._id,
          }),
        });

        const updatedUser = await res.json();
        setSignedInUser(updatedUser);
        setIsLiked(updatedUser.wishlist.includes(product._id));
        setLoading(false);
      }
    } catch (error) {
      console.log("users_wishlist_POST =>", error);
    }
  };

  return (
    <div className="flex flex-col gap-2 ">
      <Link href={`/product/${product._id}`}>
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
          <button onClick={handleLike}>
            <Heart fill={`${isLiked ? "red" : "none"}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
