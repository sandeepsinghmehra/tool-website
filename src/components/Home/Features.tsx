"use client"

import React, { useRef } from 'react';
import { Box, Typography, Container, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { easeOut, motion, useScroll, useTransform } from 'framer-motion';
import FeatureImageCardContainer from './FeatureImageCard';
import FeatureTextCardContainer from './FeatureTextCard';
import FeatureColorCardContainer from './FeatureColorCard';


// Create a styled motion div for the section container
const SectionContainer = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(5, 0),
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
}));

const FeatureBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const FeaturesSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const colorRef = useRef<HTMLDivElement>(null);
  const imageScroll = useScroll({
    target: imageRef,
    offset: ["0 1", "1.8 1"],
  });
  const textScroll = useScroll({
    target: textRef,
    offset: ["0 1", "1.8 1"],
  });
  const colorScroll = useScroll({
    target: colorRef,
    offset: ["0 1", "1.6 1"],
  });
  const scaleImageProgress = useTransform(imageScroll.scrollYProgress, [0, 1], [0.7, 1]);
  const opacityImageProgress = useTransform(imageScroll.scrollYProgress, [0, 1], [0.6, 1]);
  const scaleTextProgress = useTransform(textScroll.scrollYProgress, [0, 1], [0.7, 1]);
  const opacityTextProgress = useTransform(textScroll.scrollYProgress, [0, 1], [0.6, 1]);
  const scaleColorProgress = useTransform(colorScroll.scrollYProgress, [0, 1], [0.7, 1]);
  const opacityColorProgress = useTransform(colorScroll.scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <SectionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8, delay: 0.3, ease: easeOut, type: 'spring', stiffness: 80}}
          viewport={{ once: true}}
        >
          <Typography variant="h4" component="h4" gutterBottom>
            Our Features
          </Typography>
        </motion.div>
        <motion.div
          // initial={{opacity: 0}}
          // whileInView={{opacity: 1}}
          // transition={{duration: 0.5, delay: 0.4, ease: easeOut, type: 'spring', stiffness: 80}}
          // viewport={{ once: true}}
          ref={imageRef}
          style={{
            scale: scaleImageProgress,
            opacity: opacityImageProgress,
          }}
        >
          <FeatureBox>
            <Typography variant="h5" component="h3">
              Image Resizer
            </Typography>
            <Typography variant="body1" component="p">
              Resize photos and images without compromising on quality.
            </Typography>
            <Typography variant="body2" component="p">
              Supported Formats: JPEG, JPG, PNG, WEBP
            </Typography>
            {/* <List>
              <ListItem>
                <ListItemText primary="Publish images on your website for faster loading times." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Send images via email attachments." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Post photos on social media platforms like Facebook, Instagram, and more." />
              </ListItem>
            </List> */}
            <br />
            <FeatureImageCardContainer />
          </FeatureBox>
        </motion.div>
        <motion.div
          // initial={{opacity: 0}}
          // whileInView={{opacity: 1}}
          // transition={{duration: 0.5, delay: 0.4, ease: easeOut, type: 'spring', stiffness: 80}}
          // viewport={{ once: true}}
          ref={textRef}
          style={{
            scale: scaleTextProgress,
            opacity: opacityTextProgress,
          }}
        >
          <FeatureBox>
            <Typography variant="h5" component="h3">
              Text Tools
            </Typography>
            <Typography variant="body1" component="p">
              Word Counter: Easily count the number of words in your text.
            </Typography>
            <Typography variant="body1" component="p">
              Text to Bold: Convert your text to bold effortlessly.
            </Typography>
            <Typography variant="body1" component="p">
              Other Conversions: Various text conversion options available.
            </Typography>
            <br />
            <FeatureTextCardContainer />
          </FeatureBox>
        </motion.div>
        <motion.div
          // initial={{opacity: 0}}
          // whileInView={{opacity: 1}}
          // transition={{duration: 0.5, delay: 0.4, ease: easeOut, type: 'spring', stiffness: 80}}
          // viewport={{ once: true}}
          ref={colorRef}
          style={{
            scale: scaleColorProgress,
            opacity: opacityColorProgress,
          }}
        >
          <FeatureBox>
            <Typography variant="h5" component="h3">
              Color Tools
            </Typography>
            <br />
            <FeatureColorCardContainer />
          </FeatureBox>
        </motion.div>
      </Container>
    </SectionContainer>
  );
};

export default FeaturesSection;
