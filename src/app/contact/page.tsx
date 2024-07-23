import type { Metadata } from "next";
import ContactSection from "./components/ContactSection";


export const metadata: Metadata = {
  title: "Contact | Convert Master",
  description: "Get in touch with us through our Contact page. Whether you have questions, feedback, or need support, our team is here to assist you. Reach out to us today and we'll get back to you as soon as possible.",
  keywords: ["contact", "get in touch", "customer support", "feedback", "questions", "reach out", "contact us", "support team", 
  "customer service", "help"]
};


function Contact() {
  
  return (
    <main>
      <ContactSection />
    </main>
  );
}
export default Contact;