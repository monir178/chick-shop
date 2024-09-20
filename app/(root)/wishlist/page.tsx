"use client";

import CustomLoader from "@/components/CustomLoader";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import { getProductDetails } from "@/lib/actions/actions";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const { user } = useUser();
  console.log("user =>", typeof user);

  const [loading, setLoading] = useState(true);
  const [signedInUser, setSignedInUser] = useState<TUserType | null>(null);
  const [wishlist, setWishlist] = useState<TProductType[]>([]);

  const getUser = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setSignedInUser(data);
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

  //   console.log(signedInUser);

  const getWishListProducts = async () => {
    setLoading(true);

    if (!signedInUser) return;

    const wishListProducts = await Promise.all(
      signedInUser.wishlist.map(async (productId) => {
        const res = await getProductDetails(productId);
        return res;
      })
    );

    setWishlist(wishListProducts);
    setLoading(false);
  };

  useEffect(() => {
    if (signedInUser) {
      getWishListProducts();
    }
  }, [signedInUser]);

  const updateSignedInUser = (updatedUser: TUserType) => {
    setSignedInUser(updatedUser);
  };

  return loading ? (
    <CustomLoader />
  ) : (
    <MaxWidthWrapper className="py-8">
      {!wishlist || wishlist.length === 0 ? (
        <div className="flex h-screen items-center justify-center flex-col gap-4">
          <p className="text-gray-700 text-center text-heading3-bold">
            Your wishlist is empty
          </p>
          <Link
            className={buttonVariants({
              variant: "link",
            })}
            href="/">
            Go back to Home &rarr;
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-heading3-bold my-6 text-gray-800">
            Your Wishlist
          </h1>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16">
            {wishlist?.map((product: TProductType) => (
              <ProductCard
                updateSignedInUser={updateSignedInUser}
                key={product._id}
                product={product}
                user={user}
              />
            ))}
          </div>
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export const dynamic = "force-dynamic";

export default Wishlist;
