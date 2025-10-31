import AvailableDeals from "../components/available-deals";
import Hero from "../components/hero";
import HowItWorks from "../components/how-it-works";
import CustomerReviews from "../components/customer-reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <AvailableDeals />
      <CustomerReviews />
    </div>
  )
}
