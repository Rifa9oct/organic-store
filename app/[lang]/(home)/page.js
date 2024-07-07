import Banner from "@/components/Banner";
import Features from "@/components/Features";

export const metadata = {
  title: "Organic Store | Home",
  description: "Home page description",
};

export default async function Home() {
  return (
    <div>
      <Banner />
      <Features />
    </div>
  );
};
