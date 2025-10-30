import AvailableDeals from "../components/available-deals";
import Hero from "../components/hero";
import HowItWorks from "../components/how-it-works";
import AboutUs from "./AboutUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <AvailableDeals />
      <AboutUs />
    </div>
  )
}
