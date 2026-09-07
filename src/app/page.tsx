import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Statistics from "@/components/statistics";
import About from "@/components/about";
import FeaturedRetreats from "@/components/featured-retreats";
import CombineRetreat from "@/components/combine-retreat";
import Destinations from "@/components/destinations";
import HowItWorks from "@/components/how-it-works";
import Coaches from "@/components/coaches";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <About />
        <FeaturedRetreats />
        <CombineRetreat />
        <Destinations />
        <HowItWorks />
        <Coaches />
      </main>
      <Footer />
    </>
  );
}
