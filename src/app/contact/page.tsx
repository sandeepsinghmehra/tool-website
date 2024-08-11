import type { Metadata } from "next";
import ContactSection from "./components/ContactSection";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";


// export const metadata: Metadata = {
//   title: "Contact | Convert Master",
//   description: "Get in touch with us through our Contact page. Whether you have questions, feedback, or need support, our team is here to assist you. Reach out to us today and we'll get back to you as soon as possible.",
//   keywords: ["contact", "get in touch", "customer support", "feedback", "questions", "reach out", "contact us", "support team", 
//   "customer service", "help"]
// };
export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const t = await getTranslations('ContactPage');

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: t("metaKeywords"),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
    }
  };
}

function Contact() {
  const t = useTranslations('ContactPage');
  return (
    <main>
      <ContactSection 
        pageTitle={t('pageTitle')} 
        pageSubject={t('Subject')} 
        pageEmail={t("Email")} 
        pageMessage={t("Message")} 
        pageSubmit={t("Submit")}
      />
    </main>
  );
}
export default Contact;