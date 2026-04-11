import Hero from "../components/Hero";
import Features from "../components/Features";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <Features />
    </>
  );
}