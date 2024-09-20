import Banner from "@/components/Banner";
import Collections from "@/components/Collections";
import { FeaturesSection } from "@/components/FeatureSection";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Products from "@/components/Products";

export default function Home() {
  return (
    <MaxWidthWrapper className="space-y-6 md:space-y-16">
      <Banner />
      <Collections />
      <Products />
      <FeaturesSection />
    </MaxWidthWrapper>
  );
}
