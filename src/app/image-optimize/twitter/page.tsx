import { Metadata } from "next";
import CommonOptimize from "../components/CommonOptimizer";

export const metadata: Metadata = {
  title: "Twitter/X DP Resizer",
  description: `Convert Master Free online Twitter/X DP Resizer. Upload your valid Image file and click to Optimise button. Then you can download your image.`,
  keywords: ["Twitter/X DP Resizer Free", "Online Free Resizer", `Free Twitter/X DP Resizer Resizer`,],
};

function ImageOptimize() {
  
  return (
    <main>
        <CommonOptimize 
          title={'Twitter/X DP Resizer'} 
          defaultWidth={400} 
          defaultHeight={400}
        />
    </main>
  );
}
export default ImageOptimize;