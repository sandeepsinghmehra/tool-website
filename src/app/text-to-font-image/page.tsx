import FontImageConverter from "@/components/text/FontImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cool Text Graphics Generator Online 100% Free",
  description: `Create stunning and eye-catching text graphics with our Cool Text Graphics Generator. Customize fonts, colors, styles, and effects to design logos, banners, social media posts, and more in just a few clicks. Free and easy-to-use tool for all your creative text needs.`,
  keywords: ["text generator image","font picture generator", "cool text generator", "cool text font generator copy and paste", "cool text generator", "text graphics generator", "cool font generator", "logo design tool", "create custom text graphics", "free text effects", "fancy text generator", "stylish text design", "online text graphics", "text logo maker", "cool text effects", "3D text generator", "text banner maker", "creative font generator", "cool typography tool"],
};

function TextToFontImage() {
  
  return (
    <main>
      <FontImageConverter />
    </main>
  );
}
export default TextToFontImage;