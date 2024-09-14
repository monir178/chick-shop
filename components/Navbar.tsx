"use client";
import { Input } from "@/components/ui/input";

import { UserButton, useUser } from "@clerk/nextjs";
import { Menu, Search, ShoppingCart } from "lucide-react";
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
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { user } = useUser();
  const cart = useCart();
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  // console.log(user);

  // const user = false;

  return (
    <div className="bg-white sticky top-0 z-10 py-3 2xl:py-5 px-4 lg:px-10 flex flex-col gap-2 shadow-md">
      <div className="  flex gap-2 md:gap-4 justify-between items-center ">
        <Link className="cursor-pointer" href="/">
          <Image
            src="/text-logo.png"
            alt="logo"
            width={120}
            height={50}
            className="h-auto w-auto"
          />
        </Link>

        <div className="flex items-center gap-10">
          <div className="hidden xl:flex gap-4 text-base-bold ">
            <Link
              href="/"
              className={cn(
                "hover:text-red-500",
                pathname === "/" && "text-red-500"
              )}>
              Home
            </Link>
            {user && (
              <>
                <Link
                  href={user ? "/wishlist" : "/sign-in"}
                  className={cn(
                    "hover:text-red-500",
                    pathname === "/wishlist" && "text-red-500"
                  )}>
                  Wishlist
                </Link>
                <Link
                  href={user ? "/orders" : "/sign-in"}
                  className={cn(
                    "hover:text-red-500",
                    pathname === "/orders" && "text-red-500"
                  )}>
                  Orders
                </Link>
              </>
            )}
            <Link
              href="/about"
              className={cn(
                "hover:text-red-500",
                pathname === "/about" && "text-red-500"
              )}>
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "hover:text-red-500",
                pathname === "/contact" && "text-red-500"
              )}>
              Contact
            </Link>
          </div>

          <div className="relative hidden md:flex items-center justify-between ">
            <Input
              className="outline outline-1 outline-orange-300 w-full 2xl:w-[400px]"
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && query !== "") {
                  router.push(`/search/${query}`);
                }
              }}
            />

            <button
              className="absolute right-3 text-gray-500 hover:text-red-500 cursor-pointer"
              disabled={query === ""}
              onClick={() => router.push(`/search/${query}`)}>
              <Search className="size-6" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="hidden md:flex items-center gap-2 border rounded-lg px-2 relative py-1 transition-all hover:bg-orange-500 hover:text-white  ">
            <ShoppingCart />
            <p className="font-bold ">Cart</p>
            <div className="absolute top-[-10px] right-[-6px] bg-red-500 text-white rounded-sm size-6 flex justify-center items-center p-2">
              {cart?.cartItems?.length}
            </div>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="cursor-pointer xl:hidden" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] space-y-4 p-4">
              <DropdownMenuItem asChild>
                <Link
                  href="/"
                  className={cn("hover:text-red-500", {
                    "text-red-500": pathname === "/",
                  })}>
                  Home
                </Link>
              </DropdownMenuItem>
              {user && (
                <>
                  <DropdownMenuItem asChild>
                    <Link
                      href={user ? "/wishlist" : "/sign-in"}
                      className={cn("hover:text-red-500", {
                        "text-red-500": pathname === "/wishlist",
                      })}>
                      Wishlist
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={user ? "/orders" : "/sign-in"}
                      className={cn("hover:text-red-500", {
                        "text-red-500": pathname === "/orders",
                      })}>
                      Orders
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
              <DropdownMenuItem asChild>
                <Link
                  href="/about"
                  className={cn("hover:text-red-500", {
                    "text-red-500": pathname === "/about",
                  })}>
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/contact"
                  className={cn("hover:text-red-500", {
                    "text-red-500": pathname === "/contact",
                  })}>
                  Contact
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link
                  href="/cart"
                  className="flex items-center gap-2 border rounded-lg px-2 relative py-1 transition-all hover:bg-orange-500 hover:text-white ">
                  <ShoppingCart />
                  <p className="font-bold ">Cart</p>
                  <div className="absolute top-[-10px] right-[-6px] bg-red-500 text-white rounded-sm size-6 flex justify-center items-center p-2">
                    {cart?.cartItems?.length}
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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

      {/* Search bar for mobile */}
      <div className="relative flex items-center justify-between sm:hidden">
        <Input
          className="outline outline-1 outline-orange-300 pl-10 pr-12 w-full"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && query !== "") {
              router.push(`/search/${query}`);
            }
          }}
        />

        <button
          className="absolute right-3 text-gray-500 hover:text-red-500 cursor-pointer"
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}>
          <Search className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
