import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThreePillars from "@/components/ThreePillars";
import Systems from "@/components/Systems";
import Philosophy from "@/components/Philosophy";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ThreePillars />
        <Systems />
        <Philosophy />
        <About />
        <CoreValues />
        <Contact />
      </main>
      <Footer />
    </>
  );
}