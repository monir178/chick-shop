"use client";

import { useState } from "react";
import AddHeart from "./AddHeart";
import { cn } from "@/lib/utils";
import { MinusCircle, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";

const ProductInfo = ({ productInfo }: { productInfo: TProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    productInfo.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="flex max-w-[400px] flex-col gap-4">
      <div className="flex justify-between items-center ">
        <p className="text-heading3-bold text-gray-900">{productInfo.title}</p>
        <AddHeart product={productInfo} />
      </div>
      <div className="flex gap-2">
        <p className="text-base-medium text-gray-500">Category: </p>
        <p className="text-base-bold text-gray-900"> {productInfo.category} </p>
      </div>

      <p className="text-heading4-bold text-orange-500">${productInfo.price}</p>

      <div>
        <p className="text-base-medium text-gray-500 mb-1">Description: </p>

        <p className="text-sm text-gray-900"> {productInfo.description} </p>
      </div>

      {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-gray-500">Colors:</p>
          <div className="flex gap-2 ">
            {productInfo.colors.map((color, index) => (
              <p
                key={index}
                className={cn(
                  "border border-gray-200 px-2 py-1 cursor-pointer rounded-sm",
                  {
                    "bg-orange-500 text-white": selectedColor === color,
                  }
                )}
                onClick={() => setSelectedColor(color)}>
                {color}
              </p>
            ))}
          </div>
        </div>
      )}
      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-gray-500">Sizes:</p>
          <div className="flex gap-2 ">
            {productInfo.sizes.map((size, index) => (
              <p
                onClick={() => setSelectedSize(size)}
                key={index}
                className={cn(
                  "border border-gray-200 px-2 py-1 cursor-pointer rounded-sm",
                  {
                    "bg-orange-500 text-white": selectedSize === size,
                  }
                )}>
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-gray-500">Quantity: </p>
        <div className="flex gap-4 items-center">
          <MinusCircle
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="hover:text-orange-500 cursor-pointer"
          />
          <p className="text-body-bold">{quantity}</p>
          <PlusCircle
            onClick={() => setQuantity(quantity + 1)}
            className="hover:text-orange-500 cursor-pointer"
          />
        </div>
      </div>

      <Button>Add To Cart</Button>
    </div>
  );
};

export default ProductInfo;
