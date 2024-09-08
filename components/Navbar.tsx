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

const Navbar = () => {
  const { user } = useUser();
  // console.log(user);

  // const user = false;

  return (
    <div className="sticky top-0 z-10 py-4 px-4 lg:px-10 flex justify-between items-center bg-white">
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
          className="flex items-center gap-2 border rounded-lg px-2 py-1 transition-all hover:bg-red-500 hover:text-white">
          <ShoppingCart />
          <p className="font-bold">Cart (0)</p>
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
