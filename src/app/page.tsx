import type { Metadata } from "next";
import ImageConverter2 from "@/components/ImageConvertor/ImageConvertor2";


export const metadata: Metadata = {
  title: "Home | Convert Master",
  description: "",
};

function Home() {
  return (
    <main>
      <ImageConverter2 />
    </main>
  );
}
export default Home;