import { Metadata } from "next";
import TextReverser from "./components/TextReverser";

export const metadata: Metadata = {
  title: "Text Reverser - Effortlessly Flip Text Online",
  description: `Use our Text Reverser to effortlessly flip any text. Perfect for social media, marketing, and more. Try it now for free!`,
  keywords: ["text reverser", "flip text", "Reverse text online", "online text reverser", "free text Reverser", , "text reverser online", "reverser text generator"],
};

function TextReverserPage() {
  
  return (
    <main>
        <TextReverser />
    </main>
  );
}
export default TextReverserPage;