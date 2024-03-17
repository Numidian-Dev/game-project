import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import TheGame from "@/components/theGame/theGame";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TheGame />
    </main>
  );
}
