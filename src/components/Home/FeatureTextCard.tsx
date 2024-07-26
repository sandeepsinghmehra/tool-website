"use client"

import React from 'react';
import { Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import CustomCardFeatureHome from '../Cards/Card';
import { easeOut, motion } from 'framer-motion';

const CustomStyleLink = styled(Link)(({ theme })=> ({
  color: 'white',
  textDecoration: 'none',
  width: '100%'
}))

const FeatureTextCardContainer = () => {

  return (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
            <CustomStyleLink href={"word-counter"}>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5, ease: easeOut}}
                    viewport={{ once: true}}
                >
                    <CustomCardFeatureHome
                        image={"/assets/word-counter.jpeg"}
                        title={"Word Counter"}
                        description={"Count words effortlessly. Boost your productivity."}
                    />
                </motion.div>
            </CustomStyleLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <CustomStyleLink href={"text-repeater"}>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.65, ease: easeOut}}
                    viewport={{ once: true}}
                >
                    <CustomCardFeatureHome
                        image={"/assets/text-repeater.jpeg"}
                        title={"Text Repeat Generator"}
                        description={"Repeat text effortlessly, save time!"}
                    />
                </motion.div>
            </CustomStyleLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <CustomStyleLink href={"/text-to-bold"}>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.75, ease: easeOut}}
                    viewport={{ once: true}}
                >
                    <CustomCardFeatureHome
                        image={"/assets/text-bold.jpeg"}
                        title={"Text To Bold Text"}
                        description={"Empower your text with precision. Transform text to bold effortlessly!"}
                    />
                </motion.div>
            </CustomStyleLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <CustomStyleLink href={"/text-to-italic"}>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5, ease: easeOut}}
                    viewport={{ once: true}}
                >
                    <CustomCardFeatureHome
                        image={"/assets/text-italic.jpeg"}
                        title={"Text To Italic Text"}
                        description={"Transform text into stylish italics effortlessly."}
                    />
                </motion.div>
            </CustomStyleLink>
        </Grid>
        <Grid item  xs={12} sm={6} md={4}>
            <CustomStyleLink href={"/text-to-audio"}>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.65, ease: easeOut}}
                    viewport={{ once: true}}
                >
                    <CustomCardFeatureHome
                        image={"/assets/text-speech.jpeg"}
                        title={"Text To Speech"}
                        description={"Turn text into speech effortlessly."}
                    />
                </motion.div>
            </CustomStyleLink>
      </Grid>
    </Grid>
  );
};


export default FeatureTextCardContainer;
