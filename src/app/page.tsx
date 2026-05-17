import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThreePillars from "@/components/ThreePillars";
import Philosophy from "@/components/Philosophy";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ThreePillars />
        <Philosophy />
        <CoreValues />
      </main>
      <Footer />
    </>
  );
}