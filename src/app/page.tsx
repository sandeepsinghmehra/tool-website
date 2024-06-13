import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Home | Convert Master",
  description: "<title>WEBP to PNG Converter</title>",
};

function Home() {
  
  return (
    <main>
      <Link href={"image-convert"}>Go To Image Converter</Link>
    </main>
  );
}
export default Home;