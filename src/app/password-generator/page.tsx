import type { Metadata } from "next";
import PasswordGenerator from "./components/PasswordGenerator";



export const metadata: Metadata = {
  title: "Strong Password Generator | Free Password Maker",
  description: " Generate strong, secure passwords effortlessly with our customizable password generator tool. Enhance your online security with ease.",
  keywords: ['strong password generator', 'secure password', 'password tool', 'create strong password', 'online security', 'password generator tool', 'customizable password']
};


function PagePasswordGenerator() {
  
  return (
    <main>
        <PasswordGenerator />
    </main>
  );
}
export default PagePasswordGenerator;