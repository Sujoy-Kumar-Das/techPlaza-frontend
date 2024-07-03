import BestSellProductSection from "@/components/ui/home/bestSellProductSection/BestSellProductSection";
import CategorySection from "@/components/ui/home/categorySection/CategorySection";
import DiscountSection from "@/components/ui/home/discountSection/DiscountSection";
import EventSection from "@/components/ui/home/eventSection/EventSection";
import FeaturedSection from "@/components/ui/home/featuredSection/FeaturedSection";
import HeroSection from "@/components/ui/home/heroSection/HeroSection";
import NewProductsSection from "@/components/ui/home/newProductsSection/NewProductsSection";
import SellProductSection from "@/components/ui/home/sellProductSection/SellProductSection";
import SingleItemBanner from "@/components/ui/home/singleItemBanner/SingleItemBanner";
import TopBrandSection from "@/components/ui/home/topBrands/TopBrands";

export default async function HomePage() {
  const res = await fetch(`${process.env.BASE_URL}/category`, {
    cache: "force-cache",
  });
  const { data } = await res.json();
  return (
    <>
      <HeroSection data={data} />
      {/* <CategorySection data={data} />
      <SellProductSection data={data} />
      <NewProductsSection data={data} />
      <FeaturedSection />
      <EventSection />
      <BestSellProductSection data={data} />
      <SingleItemBanner />
      <TopBrandSection data={data} />
      <DiscountSection /> */}
    </>
  );
}
