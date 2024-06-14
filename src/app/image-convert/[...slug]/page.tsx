import ImageConverter from "@/components/ImageConvertor/ImageConvertor";
import React from "react";


//  Dynamic metadata
export async function generateMetadata({ params }) {
  const paramsData = Object.keys(params).length !== 0 ? params?.slug?.[0] : "jpg-to-webp";
  const [inputFormat, outputFormat]: [string, string] = paramsData.split("-to-") as [string, string];
  const validParams = `${inputFormat.toUpperCase()}-to-${outputFormat.toUpperCase()}`
  return {
    title: validParams,
    description: `Convert Master Free online ${validParams} converter. Upload your ${inputFormat.toUpperCase()} file and click Convert to ${outputFormat.toUpperCase()}. Then you can download or edit the produced ${outputFormat.toUpperCase()} image.`,
    keywords: ['Free Convert Master', 'Convert Master', "Image Converter", "Online Free converter", `Free converter for ${validParams}`, validParams],
  }
}

export async function generateStaticParams() {
  const allRoutes = [
    { slug: 'jpg-to-webp' },
    { slug: "jpeg-to-webp"}, 
    { slug: "webp-to-png"},
    { slug: "webp-to-jpg"},
    { slug: 'jpg-to-png' }, 
    { slug: 'png-to-webp' },
    { slug: 'png-to-jpg'},
    { slug: 'jpeg-to-png'},
  ];

  return allRoutes.map(route => ({
    slug: [route.slug],
  }));
}


function ImageConvertorPage({ params }: { params: { slug: string[] } })   {
   const paramsData = Object.keys(params).length !== 0 ? params?.slug[0] : "jpg-to-webp";
  const [inputFormat, outputFormat]: [string, string] = paramsData.split("-to-") as [string, string];
  return (
    <main>
      <ImageConverter inputFormat={inputFormat} outputFormat={outputFormat} />
    </main>
  )
}

export default ImageConvertorPage