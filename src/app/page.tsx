import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import FreelanceWork from "@/components/FreelanceWork";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <FreelanceWork />
        <Experience />
        <Education />
        <Research />
        <Contact />
      </PageTransition>
      <Footer />
    </>
  );
}
