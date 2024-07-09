import { Metadata } from "next";
import CommonOptimize from "../components/CommonOptimizer";

export const metadata: Metadata = {
  title: "TikTok Profile Picture Resizer",
  description: `Convert Master Free online TikTok Profile Picture Resizer. Upload your valid Image file and click to Optimise button. Then you can download your image.`,
  keywords: ["TikTok Profile Picture Resizer Free", "Online Free Resizer", `Free TikTok Profile Picture Resizer Resizer`,],
};

function ImageOptimize() {
  
  return (
    <main>
        <CommonOptimize 
          title={'TikTok Profile Picture Resizer'} 
          defaultWidth={200} 
          defaultHeight={200}
        />
    </main>
  );
}
export default ImageOptimize;