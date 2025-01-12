import Categories from "../sections/Categories";
import Hero from "../sections/Hero";
import About from "../sections/About";

export default function Home() {
  return (
    <main className="font-dm-sans w-screen h-screen">
      <Hero />
      <Categories />
      <About />
    </main>
  );
}
