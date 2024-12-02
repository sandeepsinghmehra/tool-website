import type { Metadata } from "next";
import PasswordGenerator from "./components/PasswordGenerator";



export const metadata: Metadata = {
  title: "Random Password Generator | Password Generator",
  description: " Generate strong, secure passwords effortlessly with our customizable password generator tool. Enhance your online security with ease.",
  keywords: ['free password generator free', 'online password generator free', 'password generator free online', 'free password maker', 'google password maker', 'strong password generator free','random password generator free', 'strong password generator', 'password generator', 'free password generator', 'customizable password', "free online random password generator", "online random password generator free", "online random password generator"]
};


function PagePasswordGenerator() {
  
  return (
    <main>
        <PasswordGenerator />
    </main>
  );
}
export default PagePasswordGenerator;