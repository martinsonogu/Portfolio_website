import { Hero, Navbar, Projects, Services } from "./components";

export default function Home() {
  return (
    <main className=" min-h-screen bg-white px-10">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
    </main>
  );
}
