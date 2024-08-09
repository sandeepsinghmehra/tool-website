import type { Metadata } from "next";
import AboutSection from "./components/AboutSection";
import { useTranslations } from "next-intl";


export const metadata: Metadata = {
  title: "About | Convert Master",
  description: "We provide free, user-friendly online tools for text and image processing. Explore our suite of tools for resizing images, converting formats, text manipulation, and more.",
};


function About() {
  const t = useTranslations('AboutPage');

  return (
    <main>
      <AboutSection pageTitle={t('title')} pageContent={t('content')} />
    </main>
  );
}
export default About;