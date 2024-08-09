import type { Metadata, ResolvingMetadata } from "next";
import AboutSection from "./components/AboutSection";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";


// export const metadata: Metadata = {
//   title: "About | Convert Master",
//   description: "We provide free, user-friendly online tools for text and image processing. Explore our suite of tools for resizing images, converting formats, text manipulation, and more.",
// };

export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const t = await getTranslations('AboutPage');

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
    }
  };
}


function About() {
  const t = useTranslations('AboutPage');

  return (
    <main>
      <AboutSection pageTitle={t('title')} pageContent={t('content')} />
    </main>
  );
}
export default About;