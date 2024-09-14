import Banner from "@/components/Banner";
import Collections from "@/components/Collections";
import { FeaturesSectionDemo } from "@/components/FeatureSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Products from "@/components/Products";

export default function Home() {
  return (
    <MaxWidthWrapper className="space-y-4 lg:space-y-12">
      <Banner />
      <Collections />
      <Products />
      <FeaturesSectionDemo />
    </MaxWidthWrapper>
  );
}

export const dynamic = "force-dynamic";
