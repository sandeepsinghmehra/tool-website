import type { Metadata } from "next";
import AboutSection from "./components/AboutSection";


export const metadata: Metadata = {
  title: "About",
  description: "We provide free, user-friendly online tools for text and image processing. Explore our suite of tools for resizing images, converting formats, text manipulation, and more.",
};


function About() {
  
  return (
    <main>
      <AboutSection />
    </main>
  );
}
export default About;