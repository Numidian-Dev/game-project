import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import TheGame from "@/components/theGame/theGame";
import AboutUs from "@/components/AboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TheGame />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}
