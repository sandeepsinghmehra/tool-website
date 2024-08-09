import type { Metadata } from "next";
import AdvancedColorPicker from "./components/ColorPicker";



export const metadata: Metadata = {
  title: "Color Picker Tool - Choose and Match Colors Easily",
  description: "Use our Color Picker tool to effortlessly select, extract, and match colors for your design projects. Perfect for designers, developers, and creatives. Try it now at convert-master.online!",
  keywords: ['Color Picker', 'Color Picker Tool', 'Match Colors', 'Color Selection', 'Online Color Picker']
};


function PageColorPicker() {
  
  return (
    <main>
        <AdvancedColorPicker />
    </main>
  );
}
export default PageColorPicker;