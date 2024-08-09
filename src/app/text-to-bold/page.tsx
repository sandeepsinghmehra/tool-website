import BoldTextConverter from "@/components/text/TextToBold";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bold Text Generator Online 100% Free",
  description: `Convert normal styled text into bold using unicode characters. Convert Master Free online Bold Text Converter. Upload your valid Bold Text file and click button. Then you can download your Bold Text File. Also try with input text`,
  keywords: ["bold text online", "text bold online", "text to bold converter", "bold text generator", "Free bold generator", "text to bold letter generator", "Online Free Bold Text Converter", `Free Text Converter`],
};

function BoldTextConvert() {
  
  return (
    <main>
      <BoldTextConverter />
    </main>
  );
}
export default BoldTextConvert;