import Nav from "./components/Nav/Nav";
import HeroBackground from "./components/HeroBackground/HeroBackground";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <div id="main">
      <Nav />
      <HeroBackground />
      <Contact />
    </div>
  );
}
