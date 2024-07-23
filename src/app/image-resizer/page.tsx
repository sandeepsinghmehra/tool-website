import ImageResizer from "@/components/Image/Optimization/ImageResizer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Online Image Resizer to Kilobytes - Simple Image Resizer Tool",
  description: `Resize your images to specific kilobyte sizes with our free online image resizer tool. Easy and fast image resizing for web and mobile. Use our free online image resizer tool to quickly and easily reduce your image size to a specific number of kilobytes (KB). Perfect for uploading to websites, sharing on social media, or emailing.`,
  keywords: ["Resize image to 20kb free", "Resize image to 30kb", "resize image to kilobytes", "Resize image upto 500kb",],
};

function ImageResizerPage() {
  
    return (
        <main>
            <ImageResizer />
        </main>
    );
}
export default ImageResizerPage;