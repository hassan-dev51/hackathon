import Checkout from "./components/Checkout";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Promotion from "./components/Promotion";
import Unique from "./components/Unique";

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotion />
      <Checkout />
      <Unique />
      <Newsletter />
    </main>
  );
}
