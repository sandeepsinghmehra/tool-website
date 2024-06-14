import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Home | Convert Master",
  // description: "",
};

function Home() {
  
  return (
    <main>
      <Link href={"image-convert/jpg-to-webp"}>Go To Image Converter</Link>
    </main>
  );
}
export default Home;