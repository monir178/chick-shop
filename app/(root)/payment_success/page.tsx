"use client";

import { buttonVariants } from "@/components/ui/button";
import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";
import Player from "lottie-react";
import successAnimation from "../../../public/payment_animation.json";
import { BadgeCheck, CircleCheckBig } from "lucide-react";

const SuccessPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3 text-center">
      <Player
        animationData={successAnimation}
        autoplay
        loop
        style={{ height: "300px", width: "300px" }} // Customize size as needed
      />
      <div>
        <div className="flex flex-col text-green-600 items-center justify-center gap-2">
          <CircleCheckBig />
          <p className="text-heading4-bold text-green-600  mb-1">
            Payment Successful
          </p>
        </div>

        <p className="text-heading5-bold ">Thank you for your purchase</p>
      </div>

      <Link
        className={buttonVariants({
          variant: "link",
        })}
        href="/">
        Continue to Shopping &rarr;
      </Link>
    </div>
  );
};

export default SuccessPayment;
