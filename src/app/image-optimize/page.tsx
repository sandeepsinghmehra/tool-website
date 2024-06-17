import OptimizeCom from "@/components/Image/Optimization/ImageOpz";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Optimizer | Resizer",
  description: `Convert Master Free online Image Resizer. Upload your valid Image file and click to Optimise button. Then you can download your image.`,
  keywords: ["Image Optimizer", "Online Free Resizer", `Free Image Resizer`,],
};

function ImageOptimize() {
  
  return (
    <main>
      <OptimizeCom />
    </main>
  );
}
export default ImageOptimize;