"use client"

import React, { useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const HeroContainer = styled(motion.div)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: 'calc(100vh - 150px)', // Using calc function correctly
    color: theme.palette.common.white,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

const HeroContent = styled('div')(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
}));

const HeroButton = styled(motion.button)(({ theme }) => ({
    marginTop: theme.spacing(4),
    padding: theme.spacing(1.5, 4),
    fontSize: '1rem',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    borderRadius: 5,
    border: '2px solid #FFF',
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
    },
}));

const HeroSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const imageScroll = useScroll({
        target: ref,
        offset: ["0 1", "1.5 1"],
    });

    const scaleProgress = useTransform(imageScroll.scrollYProgress, [0, 1], [0.9, 1]);
    const opacityProgress = useTransform(imageScroll.scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <HeroContainer
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <Image
                src="/assets/cover_image.jpeg" // Add your background image here
                layout="fill"
                objectFit="cover"
                alt="Hero Background"
                loading="lazy"
                style={{ zIndex: 0 }}
            />
            <HeroContent>
                <Container>
                    <Typography
                        variant="h1"
                        component={motion.h1}
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        gutterBottom
                        sx={{
                            fontSize: { xs: '60px', md:'72px'}
                        }}
                    >
                        Effortlessly Resize Images and Convert Text Online
                    </Typography>
                    <Typography
                        variant="h2"
                        component={motion.h2}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        sx={{
                            fontSize: { xs: '24px', md:'30px'}
                        }}
                    >
                        Maintain quality, save time, and enhance productivity with our free tools.
                    </Typography>
                    <HeroButton
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Get Started Now
                    </HeroButton>
                </Container>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
