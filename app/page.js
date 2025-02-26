import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";

export default function Home() {
  return (
    <main className="px-5 md:px-2">
      <Hero />
      <Technologies />
      <Experience />
    </main>
  );
}
