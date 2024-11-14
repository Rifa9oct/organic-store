import Banner from "@/components/Banner";
import BestSelling from "@/components/BestSelling";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import ServiceItems from "@/components/ServiceItems";
import Trending from "@/components/Trending";
import { getDictionary } from "../dictionaries/dictionaries";

export const metadata = {
  title: "Organic Store | Home",
  description: "Home page description",
};

export default async function Home({ params:{lang}, searchParams:{ see_review} }) {
  const dict = await getDictionary(lang);

  return (
    <div>
      <Banner dict={dict} />
      <Features dict={dict} />
      <BestSelling dict={dict}/>
      <ServiceItems dict={dict}/>
      <Trending dict={dict}/>
      <Reviews seeReview={see_review} dict={dict}/>
      <Brands dict={dict}/>
    </div>
  );
};
