import Banner from "@/components/Banner";
import BestSelling from "@/components/BestSelling";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import ServiceItems from "@/components/ServiceItems";
import Trending from "@/components/Trending";
import { getProducts } from "@/queries/product-queries";

export const metadata = {
  title: "Organic Store | Home",
  description: "Home page description",
};

export default async function Home() {

  return (
    <div>
      <Banner />
      <Features />
      <BestSelling />
      <ServiceItems />
      <Trending />
      <Reviews />
      <Brands />
    </div>
  );
};
