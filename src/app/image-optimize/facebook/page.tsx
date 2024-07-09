import { Metadata } from "next";
import CommonOptimize from "../components/CommonOptimizer";

export const metadata: Metadata = {
  title: "Facebook Profile Size Resizer",
  description: `Convert Master Free online Facebook Profile Size Resizer. Upload your valid Image file and click to Optimise button. Then you can download your image.`,
  keywords: ["Facebook Profile Size Resizer Free", "Online Free Resizer", `Free Facebook Profile Size Resizer Resizer`,],
};

function ImageOptimize() {
  
  return (
    <main>
        <CommonOptimize 
          title={'Facebook Profile Size Resizer'} 
          defaultWidth={180} 
          defaultHeight={180}
        />
    </main>
  );
}
export default ImageOptimize;