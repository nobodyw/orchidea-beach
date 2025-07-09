"use client";
import { useEffect } from "react";
import Nav from "./components/Nav/Nav";
import HeroBackground from "./components/HeroBackground/HeroBackground";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Service from "./components/Services/Service";
import Excursion from "./components/Excursion/Excursion";
import Footer from "./components/Footer/Footer";
// import SectionScroll from "./components/SectionScroll";

export default function Home() {
  // const [showSectionScroll, setShowSectionScroll] = useState(false);

  useEffect(() => {
    // const handleResize = () => {
    //   setShowSectionScroll(window.innerWidth > 1041);
    // };
    // handleResize();
    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="main">
      <Nav />
      {/* {showSectionScroll && <SectionScroll offset={120} />} */}
      <section id="section-0"><HeroBackground /></section>
      <section id="section-1"><Contact /></section>
      <section id="section-2"><Experience /></section>
      <section id="section-3"><Service /></section>
      <section id="section-4"><Excursion /></section>
      <Footer />
    </div>
  );
}
