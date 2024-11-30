import TextToAudioConverter from "@/components/text/TextToAudio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text to Audio Converter - Convert Text to Speech Online",
  description: "No limit to text, Discover our Text to Audio Converter tool that transforms written text into spoken words. Perfect for creating audio content, improving accessibility, and enhancing user experience. Try our free online tool now!",
  keywords: ["text to speech online mp3 indian voice free","text to audio", "text to speech", "text to audio converter", "convert text to audio", "text to speech online", "text to speech online mp3", "text to speech online mp3 indian voice", "free text to speech online mp3 download", "text to audio tool", "text to speech free", "audio from text"],
};

function TextAudioConvert() {
  
  return (
    <main>
      <TextToAudioConverter />
    </main>
  );
}
export default TextAudioConvert;