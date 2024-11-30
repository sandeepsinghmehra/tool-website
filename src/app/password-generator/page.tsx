import type { Metadata } from "next";
import PasswordGenerator from "./components/PasswordGenerator";



export const metadata: Metadata = {
  title: "Random Password Generator | Password Generator",
  description: " Generate strong, secure passwords effortlessly with our customizable password generator tool. Enhance your online security with ease.",
  keywords: ['random password generator', 'strong password generator', 'password generator', 'create strong password', 'free password generator', 'customizable password', "free online random password generator", "online random password generator free", "online random password generator"]
};


function PagePasswordGenerator() {
  
  return (
    <main>
        <PasswordGenerator />
    </main>
  );
}
export default PagePasswordGenerator;