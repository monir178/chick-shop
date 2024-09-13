import Banner from "@/components/Banner";
import Collections from "@/components/Collections";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Products from "@/components/Products";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Banner />
      <Collections />
      <Products />
    </MaxWidthWrapper>
  );
}

export const dynamic = "force-dynamic";
