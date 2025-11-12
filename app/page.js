import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="w-full mx-auto relative">
        <section className="w-full">
          <Header />
        </section>
        <section className="w-full">
            <HeroSection />
        </section>
        <section>
          <Footer />
        </section>
    </div>
  );
}
