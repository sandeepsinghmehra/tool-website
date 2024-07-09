import { Metadata } from "next";
import CommonOptimize from "../components/CommonOptimizer";

export const metadata: Metadata = {
  title: "Instagram DP Resizer",
  description: `Convert Master Free online Instagram DP Resizer. Upload your valid Image file and click to Optimise button. Then you can download your image.`,
  keywords: ["Instagram DP Resizer Free", "Online Free Resizer", `Free Instagram DP Resizer Resizer`,],
};

function ImageOptimize() {
  
  return (
    <main>
        <CommonOptimize 
          title={'Instagram DP Resizer'} 
          defaultWidth={110} 
          defaultHeight={110}
        />
    </main>
  );
}
export default ImageOptimize;