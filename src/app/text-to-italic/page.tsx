import ItalicTextConverter from "@/components/text/TextToItalic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Italic Text Generator Online 100% Free",
  description: `Convert normal styled text into Italic using unicode characters. Convert Master Free online Italic Text Converter. Upload your valid Italic Text file and click button. Then you can download your Italic Text File. Also try with input text`,
  keywords: ["italic text generator", "Free italic generator", "text to italic letter generator", "Online Free italic Text Converter", `Free Text Converter`],
};

function ItalicTextConvert() {
  
  return (
    <main>
      <ItalicTextConverter />
    </main>
  );
}
export default ItalicTextConvert;