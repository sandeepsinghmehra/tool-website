"use client"

import React from 'react'
import { Box } from "@mui/material";
import { useRouter } from 'next/navigation';
import TabButton from '@/components/Buttons/TabButton';

const Tab = ({params}) => {
    const router = useRouter();

    const paramsData = Object.keys(params).length !== 0 ? params?.slug?.[0] : "jpg-to-webp";
    const [inputFormat, outputFormat]: [string, string] = paramsData.split("-to-") as [string, string];

    const handleImageFormatChange = ( convertFrom:string, convertTo:string ) => router.push(`/image-convert/${convertFrom}-to-${convertTo}`);
    return (
        <>
            <Box 
                mt={2} 
                sx={{
                    display: 'flex', 
                    flexWrap: "wrap", 
                    gap: 2, 
                    alignItems: 'center', 
                    justifyContent: 'center'
                }} 
            >
                <TabButton 
                    isActive={inputFormat === "jpg" && outputFormat === "webp"}
                    handleImageFormatChange={()=>handleImageFormatChange("jpg", "webp")} 
                    btnName={"JPG to Webp"}
                />

                <TabButton 
                    isActive={inputFormat === "jpeg" && outputFormat === "webp"}
                    handleImageFormatChange={()=>handleImageFormatChange("jpeg", "webp")} 
                    btnName={"JPEG to Webp"}
                />

                <TabButton 
                    isActive={inputFormat === "webp" && outputFormat === "png"}
                    handleImageFormatChange={()=>handleImageFormatChange("webp", "png")} 
                    btnName={"Webp to PNG"}
                />
                <TabButton 
                    isActive={inputFormat === "webp" && outputFormat === "jpg"}
                    handleImageFormatChange={()=>handleImageFormatChange("webp", "jpg")} 
                    btnName={"Webp to JPG"}
                />
                <TabButton 
                    isActive={inputFormat === "jpg" && outputFormat === "png"}
                    handleImageFormatChange={()=>handleImageFormatChange("jpg", "png")} 
                    btnName={"JPG to PNG"}
                />
            
                <TabButton 
                    isActive={inputFormat === "png" && outputFormat === "webp"}
                    handleImageFormatChange={()=>handleImageFormatChange("png", "webp")} 
                    btnName={"PNG to Webp"}
                />
                <TabButton 
                    isActive={inputFormat === "png" && outputFormat === "jpg"}
                    handleImageFormatChange={()=>handleImageFormatChange("png", "jpg")} 
                    btnName={"PNG to JPG"}
                />

                <TabButton 
                    isActive={inputFormat === "jpeg" && outputFormat === "png"}
                    handleImageFormatChange={()=>handleImageFormatChange("jpeg", "png")} 
                    btnName={"JPEG to PNG"}
                /> 
            </Box>  
        </>
    )
}

export default Tab
