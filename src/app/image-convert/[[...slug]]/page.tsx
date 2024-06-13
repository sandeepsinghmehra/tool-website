
import ImageConverter from "@/components/ImageConvertor/ImageConvertor";
import React from "react";

function ImageConvertorPage({ params }: { params: { slug?: string[] } })   {
  
  const paramsData = Object.keys(params).length !== 0 ? params?.slug?.[0] : "jpg-to-webp";
  const [inputFormat, outputFormat]: [string, string] = paramsData.split("-to-") as [string, string];
  return (
    <main>
      <ImageConverter inputFormat={inputFormat} outputFormat={outputFormat} />
    </main>
  )
}

export default ImageConvertorPage