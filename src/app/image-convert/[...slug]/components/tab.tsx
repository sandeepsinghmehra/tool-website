"use client"

import React from 'react'
import { Box } from "@mui/material";
import { useRouter } from 'next/navigation';
import TabButton from '@/components/Buttons/TabButton';

const Tab = ({params}) => {
    const router = useRouter();

    const paramsData = params?.slug[0];
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
                    isActive={inputFormat === "webp" && outputFormat === "jpeg"}
                    handleImageFormatChange={()=>handleImageFormatChange("webp", "jpeg")} 
                    btnName={"Webp to JPEG"}
                />
                <TabButton 
                    isActive={inputFormat === "jpeg" && outputFormat === "png"}
                    handleImageFormatChange={()=>handleImageFormatChange("jpeg", "png")} 
                    btnName={"JPEG to PNG"}
                />
            
                <TabButton 
                    isActive={inputFormat === "png" && outputFormat === "webp"}
                    handleImageFormatChange={()=>handleImageFormatChange("png", "webp")} 
                    btnName={"PNG to Webp"}
                />
                <TabButton 
                    isActive={inputFormat === "png" && outputFormat === "jpeg"}
                    handleImageFormatChange={()=>handleImageFormatChange("png", "jpeg")} 
                    btnName={"PNG to JPEG"}
                />
            </Box>  
        </>
    )
}

export default Tab
