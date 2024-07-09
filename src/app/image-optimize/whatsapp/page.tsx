import { Metadata } from "next";
import CommonOptimize from "../components/CommonOptimizer";

export const metadata: Metadata = {
  title: "Whatsapp DP Resizer",
  description: `Convert Master Free online Whatsapp DP Resizer. Upload your valid Image file and click to Optimise button. Then you can download your image.`,
  keywords: ["Whatsapp DP Resizer Free", "Online Free Resizer", `Free Whatsapp DP Resizer Resizer`,],
};

function ImageOptimize() {
  
  return (
    <main>
        <CommonOptimize 
          title={'Whatsapp DP Resizer'} 
          defaultWidth={192} 
          defaultHeight={192}
        />
    </main>
  );
}
export default ImageOptimize;