"use client"

import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import Image from 'next/image';

// Define the props type
interface AboutSectionProps {
    pageTitle: string;
    pageContent: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ pageTitle, pageContent }) => {

    const theme:any = useTheme();
    
    return (
        <Box component={"section"} alignContent={"center"}>
            <Typography component={"h1"} variant="h1" align='center' pt={2} sx={{fontSize: '2.5rem'}}>
               {pageTitle} {/* About */}
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
                   {pageContent}
                </Typography>
                
            </Box>
        </Box>
    );
};

export default AboutSection;
