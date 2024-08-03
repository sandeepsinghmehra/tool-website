"use client"

import React from 'react';
import { Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import CustomCardFeatureHome from '../Cards/Card';
import { easeOut, motion } from 'framer-motion';

const dataList = [
    {
        href: "word-counter",
        image: "/assets/word-counter.jpeg",
        title: "Word Counter",
        description: "Count words effortlessly. Boost your productivity.",
    },
    {
        href: "text-repeater",
        image: "/assets/text-repeater.jpeg",
        title: "Text Repeat Generator",
        description: "Repeat text effortlessly, save time!",
    },
    {
        href: "/text-to-bold",
        image: "/assets/text-bold.jpeg",
        title: "Text To Bold Text",
        description: "Empower your text with precision. Transform text to bold effortlessly!",
    },
    {
        href: "/text-to-italic",
        image: "/assets/text-italic.jpeg",
        title: "Text To Italic Text",
        description: "Transform text into stylish italics effortlessly.",
    },
    {
        href: "/text-to-audio",
        image: "/assets/text-speech.jpeg",
        title: "Text To Speech",
        description: "Turn text into speech effortlessly.",
    },
    {
        href: "password-generator",
        image: "/assets/password-generator.jpeg",
        title: "Password Maker",
        description: "Create unbreakable passwords with ease!",
    },
];
const CustomStyleLink = styled(Link)(({ theme })=> ({
  color: 'white',
  textDecoration: 'none',
  width: '100%',
  height: "100%",
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
}))

const FeatureTextCardContainer = () => {

  return (
    <Grid container spacing={3}>
        {dataList.map((item, index) =>
            <Grid item xs={12} sm={6} md={4} key={index}>
                <CustomStyleLink href={item.href}>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.5, delay: 0.5, ease: easeOut}}
                        viewport={{ once: true}}
                        style={{ height: '100%' }}
                    >
                        <CustomCardFeatureHome
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    </motion.div>
                </CustomStyleLink>
            </Grid>
        )}
    </Grid>
  );
};


export default FeatureTextCardContainer;
