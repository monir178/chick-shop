"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { buttonVariants } from "./ui/button";
import useCart from "@/lib/hooks/useCart";

const Navbar = () => {
  const { user } = useUser();
  const cart = useCart();
  // console.log(user);

  // const user = false;

  return (
    <div className="sticky top-0 z-10 py-3 px-4 lg:px-10 flex justify-between items-center bg-white  shadow-md">
      <Link href="/">
        <Image
          className="hidden md:block"
          src="/text-logo.png"
          alt="logo"
          width={120}
          height={50}
        />
        <Image
          className="md:hidden"
          src="/logo.png"
          alt="logo"
          width={30}
          height={30}
        />
      </Link>

      <Link href="/">Home</Link>

      <div className="flex items-center gap-2">
        <Link
          href="/cart"
          className="flex items-center gap-2 border rounded-lg px-2 relative py-1 transition-all hover:bg-orange-500 hover:text-white">
          <ShoppingCart />
          <p className="font-bold ">Cart</p>
          <div className="absolute top-[-10px] right-[-6px] bg-red-500 text-white rounded-sm size-6 flex justify-center items-center p-2">
            {cart?.cartItems?.length}
          </div>
        </Link>

        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="cursor pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/wishlist" className="hover:text-red-500">
                  Wishlist
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders" className="hover:text-red-500">
                  Orders
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {user ? (
          <UserButton afterSwitchSessionUrl="/sign-in" />
        ) : (
          <Link
            className={buttonVariants({
              variant: "outline",
            })}
            href="/sign-in">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
