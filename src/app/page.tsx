import type { Metadata } from "next";
import ImageConverter from "@/components/ImageConvertor/ImageConvertor";


export const metadata: Metadata = {
  title: "Home | Convert Master",
  description: "",
};

function Home() {
  return (
    <main>
      <ImageConverter />
    </main>
  );
}
export default Home;