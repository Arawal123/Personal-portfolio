import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageBreak from "@/components/ImageBreak";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SmoothScroll from "@/components/SmoothScroll";
import Story from "@/components/Story";
import { imageBreaks, timeline } from "@/data/site";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main id="main-content">
        <Hero />
        <Story />
        <Intro />
        <ImageBreak {...imageBreaks.forest} />
        <Projects />
        <ImageBreak {...imageBreaks.landscape} timelineItems={timeline} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
