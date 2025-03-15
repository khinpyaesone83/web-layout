import "@radix-ui/themes/styles.css";
import Footer from "./Footer";
import HappeningSection from "./HappeningSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import TrendingSection from "./TrendingSection";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <TrendingSection />
      <HappeningSection />
      <Footer />
    </main>
  );
}
