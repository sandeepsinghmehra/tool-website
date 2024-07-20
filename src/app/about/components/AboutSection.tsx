"use client"

import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import Image from 'next/image';


const AboutSection: React.FC = () => {

    const theme:any = useTheme();
    
    return (
        <Box component={"section"} alignContent={"center"}>
            <Typography component={"h1"} variant="h1" align='center' pt={2} sx={{fontSize: '2.5rem'}}>
                About
            </Typography>

            <Box 
                sx={{
                    pt: 5,
                    width: {xs: '90%', md: '100%'},
                    margin: 'auto'
                }}
            >
                <Image
                    src={"/assets/about.jpeg"}
                    alt={"home"}
                    width={500}
                    height={500}
                    style={{
                        width: 300,
                        height: 200,
                        display: 'flex',
                        margin: 'auto'
                    }}
                />
                <Typography  
                    sx={{
                        py: 4, textAlign:"justify", letterSpacing: '1px', maxWidth: {md: '600px'}, m: 'auto', lineHeight: '30px', fontSize: '22px'
                    }}
                >
                   Our mission is to offer free, efficient online tools for all your text and image processing needs. At Convert-Master.online, powered by India, we provide a user-friendly experience with a suite of tools designed for simplicity and effectiveness. Whether you need to resize or convert images, bolden text, repeat text, or count words, our platform ensures that you get the job done quickly and effortlessly. Explore our tools to streamline your digital tasks and enhance your productivity.
                </Typography>
                
            </Box>
        </Box>
    );
};

export default AboutSection;
