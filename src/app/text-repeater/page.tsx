import { Metadata } from "next";
import TextRepeater from "./components/TextRepeater";

export const metadata: Metadata = {
  title: "Text Repeater - Effortlessly Duplicate Text Online",
  description: `Use our Text Repeater to effortlessly duplicate any text multiple times. Perfect for social media, marketing, and more. Try it now for free!`,
  keywords: ["text repeater", "duplicate text", "repeat text online", "text duplicator", "text multiplier", "online text repeater", "free text repeater", "text replication", "text repeater online", "text repeater copy and paste", "repeating text generator"],
};

function TextRepeaterPage() {
  
  return (
    <main>
        <TextRepeater />
    </main>
  );
}
export default TextRepeaterPage;