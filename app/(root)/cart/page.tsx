"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import useCart from "@/lib/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import CustomLoader from "@/components/CustomLoader";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const cart = useCart();

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );

  const totalRounded = parseFloat(total.toFixed(2));

  // console.log("user =>", user);

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  const handleCheckout = async () => {
    try {
      if (!user) {
        return router.push("/sign-in");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({
            cartItems: cart.cartItems,
            customer,
          }),
        });
        const data = await res.json();
        window.location.href = data.url;
        // console.log("checkout_POST_Data =>", data);
      }
    } catch (error) {
      console.log("checkout_POST =>", error);
    }
  };

  useEffect(() => {
    if (cart.cartItems.length > 0 || cart.cartItems.length === 0) {
      setLoading(false);
    }
  }, [cart.cartItems]);

  return loading ? (
    <CustomLoader />
  ) : (
    <MaxWidthWrapper>
      <div className="my-10">
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
              })}>
              Add items to your cart &rarr;
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4 md:flex-row justify-between">
            <div className="flex flex-col  w-full md:max-w-3xl gap-4">
              {cart.cartItems.map((cartItem) => (
                <div className="flex justify-between  items-center  hover:bg-gray-200 transition-all p-4 rounded-lg">
                  <div className="flex items-center">
                    <Image
                      src={cartItem.item.media[0]}
                      width={100}
                      height={100}
                      alt={cartItem.item.title}
                      className="rounded-lg w-30 h-30 object-cover"
                    />
                    <div className="flex flex-col gap-1 ml-4">
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
                      <p>${cartItem.item.price}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 ml-4">
                    <div className="flex gap-2 text-gray-800 items-center">
                      <MinusCircle
                        onClick={() => {
                          if (cartItem.quantity > 1) {
                            cart.decreaseQuantity(cartItem.item._id);
                          }
                        }}
                        className={`${
                          cartItem.quantity === 1
                            ? "text-gray-400 cursor-not-allowed"
                            : "hover:text-orange-500 cursor-pointer"
                        }`}
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
            <div className="flex h-full top-5 w-full mb-4 lg:mb-0 md:max-w-lg flex-col  gap-4 bg-gray-200 rounded-lg px-4 py-5">
              <p className="text-heading4-bold pb-4">
                Summary{" "}
                <span>{`(${cart.cartItems.length} ${
                  cart.cartItems.length > 1 ? "items" : "item"
                })`}</span>
              </p>
              <div className="flex justify-between text-body-semibold">
                <p>Total Amount: </p>
                <p>${totalRounded}</p>
              </div>
              <Button onClick={handleCheckout}>Proceed toCheckout</Button>
            </div>
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default Cart;
