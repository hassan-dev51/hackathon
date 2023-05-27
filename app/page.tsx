import Checkout from "./components/Checkout";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Promotion from "./components/Promotion";

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotion />
      <Checkout />
      <Newsletter />
    </main>
  );
}
