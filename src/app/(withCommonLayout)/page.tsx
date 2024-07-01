import CategorySection from "@/components/ui/home/categorySection/CategorySection";
import HeroSection from "@/components/ui/home/heroSection/HeroSection";
import NewProductsSection from "@/components/ui/home/newProductsSection/NewProductsSection";

export default async function HomePage() {
  const res = await fetch(`${process.env.BASE_URL}/category`, {
    cache: "force-cache",
  });
  const { data } = await res.json();
  return (
    <div>
      <HeroSection data={data} />
      <CategorySection data={data} />
      <NewProductsSection data={data} />
    </div>
  );
}
