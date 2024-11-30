import WordCounter from "@/components/text/WordCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Counter",
  description: `Looking for an efficient word counter tool? Our free online word counter is perfect for writers, students, and professionals. This tool provides detailed text analysis, including total words, total characters (with and without spaces), total sentences, total paragraphs, average words per sentence, and top 5 word density. With our word counter, you can quickly and easily count and analyze your text, ensuring it meets length requirements and maintains readability. Whether you are drafting an essay, editing a document, or optimizing your writing for SEO, our word counter tool is here to help.`,
  keywords: ["word counter", "word counter online", "website word counter tool", "word counter tool free", "word counter tool online free", "word counter ai", "average words per sentence calculator", "word counter free online word counter tool", "online word counter", "online word counter characters", "online word counter with spaces", "online word counter website",],
};

function WordCounterPage() {
  
  return (
    <main>
        <WordCounter />
    </main>
  );
}
export default WordCounterPage;