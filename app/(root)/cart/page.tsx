"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import useCart from "@/lib/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import CustomLoader from "@/components/CustomLoader";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const cart = useCart();

  useEffect(() => {
    if (cart.cartItems.length > 0 || cart.cartItems.length === 0) {
      setLoading(false);
    }
  }, [cart.cartItems]);

  return loading ? (
    <CustomLoader />
  ) : (
    <MaxWidthWrapper className="py-8">
      <div>
        <p className="text-heading3-bold text-gray-800 ">Shopping Cart</p>
        <hr className="my-6" />

        {cart.cartItems.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 h-60 w-60 text-muted-foreground">
              <Image
                src="/empty-cart.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="empty shopping cart DigiStore"
              />
            </div>
            <div className="text-xl  font-semibold ">Your cart is empty</div>

            <Link
              href="/products"
              className={buttonVariants({
                variant: "link",
                size: "sm",
                className: "text-sm text-sky-500 underline-offset-2",
              })}>
              Add items to your cart &rarr;
            </Link>
          </div>
        ) : (
          <div className="mt-4 max-w-xl">
            {cart.cartItems.map((cartItem) => (
              <div className="flex justify-between w-full items-center hover:bg-gray-200 transition-all p-4 rounded-lg">
                <div className="flex items-center">
                  <Image
                    src={cartItem.item.media[0]}
                    width={100}
                    height={100}
                    alt={cartItem.item.title}
                    className="rounded-lg w-30 h-30 object-cover"
                  />
                  <div className="flex flex-col gap-2 ml-4">
                    <p className="font-bold">{cartItem.item.title}</p>
                    {cartItem.color && (
                      <p className="text-sm text-muted-foreground">
                        Color: {cartItem.color}{" "}
                      </p>
                    )}
                    {cartItem.size && (
                      <p className="text-sm text-muted-foreground">
                        Size: {cartItem.size}{" "}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-4 ml-4">
                  <div className="flex gap-2 text-gray-800 items-center">
                    <MinusCircle
                      onClick={() => cart.decreaseQuantity(cartItem.item._id)}
                      className="hover:text-orange-500 cursor-pointer"
                    />
                    <p className="text-body-bold">{cartItem.quantity}</p>
                    <PlusCircle
                      onClick={() => cart.increaseQuantity(cartItem.item._id)}
                      className="hover:text-orange-500 cursor-pointer"
                    />
                  </div>
                  <div className="ml-auto">
                    <button
                      onClick={() => cart.removeItem(cartItem.item._id)}
                      className="bg-red-500 hover:bg-red-600 rounded-md p-2 text-white">
                      <Trash className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default Cart;
