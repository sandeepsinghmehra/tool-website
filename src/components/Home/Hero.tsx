"use client"

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
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
    return (
        <HeroContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
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
                        variant="h2"
                        component={motion.h1}
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        gutterBottom
                    >
                        Effortlessly Resize Images and Convert Text Online
                    </Typography>
                    <Typography
                        variant="h5"
                        component={motion.p}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
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
