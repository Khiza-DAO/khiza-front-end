import { FAQ } from "./components/faq";
import { GetInTouch } from "@/components/shared/get-in-touch";
import Services from "./components/services";
import { Newsletter } from "./components/newsletter";
import { Hero } from "./components/hero";
import Portfolio from "./components/portfolio";
function HomePage() {
  return (
    <main className="">
      <Hero />
      <Services />
      <Portfolio />
      <Newsletter />
      <FAQ />
      <GetInTouch />
    </main>
  );
}

export default HomePage;
