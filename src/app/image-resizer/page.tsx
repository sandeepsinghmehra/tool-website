import ImageResizer from "@/components/Image/Optimization/ImageResizer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resize image under 500kb Free Online",
  description: `Resize your images to specific kb sizes with our free online image resizer tool. Easy and fast image resizing for web and mobile. Use our free online image resizer tool to quickly and easily reduce your image size to a specific number of kilobytes (KB). Perfect for uploading to websites, sharing on social media, or emailing.`,
  keywords: ["Resize image to 20kb free", "Resize image to 30kb", "resize image to kb", "Resize image to 100kb",],
};

function ImageResizerPage() {
  
    return (
        <main>
            <ImageResizer />
        </main>
    );
}
export default ImageResizerPage;