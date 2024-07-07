import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import ServiceItems from "@/components/ServiceItems";

export const metadata = {
  title: "Organic Store | Home",
  description: "Home page description",
};

export default async function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <ServiceItems />
      <Reviews />
    </div>
  );
};
