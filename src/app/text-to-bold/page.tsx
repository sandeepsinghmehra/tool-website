import BoldTextConverter from "@/components/text/TextToBold";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dark Bold Text Generator Online 100% Free",
  description: `Convert normal styled text into bold using unicode characters. Convert Master Free online Bold Text Converter. Upload your valid Bold Text file and click button. Then you can download your Bold Text File. Also try with input text`,
  keywords: ["dark bold font generator","bold text online", "text bold online", "text to bold converter", "text bold generator", "Free bold generator", "text to bold letter generator", "Online Free Bold Text Converter", `Free Text Converter`, "text to bold generator",],
};

function BoldTextConvert() {
  
  return (
    <main>
      <BoldTextConverter />
    </main>
  );
}
export default BoldTextConvert;