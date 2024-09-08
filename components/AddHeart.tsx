"use client";

import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AddHeart = ({ product }: { product: TProductType }) => {
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
    <button onClick={handleLike}>
      <Heart fill={`${isLiked ? "red" : "none"}`} />
    </button>
  );
};

export default AddHeart;
