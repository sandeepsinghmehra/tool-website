import { Metadata } from "next";
import CommonOptimize from "../components/CommonOptimizer";

export const metadata: Metadata = {
  title: "LinkedIn Profile size Resizer",
  description: `Convert Master Free online LinkedIn Profile size Resizer. Upload your valid Image file and click to Optimise button. Then you can download your image.`,
  keywords: ["LinkedIn Profile size Resizer Free", "Online Free Resizer", `Free LinkedIn Profile size Resizer Resizer`,],
};

function ImageOptimize() {
  
  return (
    <main>
        <CommonOptimize 
          title={'LinkedIn Profile size Resizer'} 
          defaultWidth={400} 
          defaultHeight={400}
        />
    </main>
  );
}
export default ImageOptimize;