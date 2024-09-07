"use client"; // This tells Next.js it's a client-side component

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const CollectionItem = ({ collection }: { collection: TCollectionType }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className="group relative block hover:scale-105 transition-all"
      href={`/collections/${collection._id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="relative">
        <Image
          src={collection.image}
          alt={collection.title}
          width={300}
          height={200}
          className="rounded-lg"
        />
        {/* Show Tooltip on Hover */}
        {isHovered && <AnimatedTooltip item={collection.title} />}
      </div>
    </Link>
  );
};

export default CollectionItem;
