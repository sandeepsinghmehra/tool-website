"use client"

import React, { useRef } from 'react';
import { Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import CustomCardFeatureHome from '../Cards/Card';
import { easeOut, motion, useScroll, useTransform } from 'framer-motion';

const dataList = [
  {
    href: "image-optimize",
    image: "/assets/image-optimizer.jpeg",
    title: "Image Optimizer",
    description: "Optimize images effortlessly, boost performance.",
  },
  {
    href: "image-resizer",
    image: "/assets/image-resizer.jpeg",
    title: "Image Resizer",
    description: "Resize images effortlessly in seconds!",
  },
  {
    href: "image-optimize/whatsapp",
    image: "/assets/whatsapp-tool.jpeg",
    title: "Whatsapp DP Resizer",
    description: "Perfectly sized DPs for WhatsApp in seconds!",
  },
  {
    href: "image-optimize/twitter",
    image: "/assets/x-tools.jpeg",
    title: "Twitter DP Resizer",
    description: "Perfectly resize your X/DP with ease!",
  },
  {
    href: "image-optimize/tiktok",
    image: "/assets/tiktok-tools.jpeg",
    title: "TikTok DP Resizer",
    description: "Perfectly fit your TikTok vibe. Resize with ease!",
  },
  {
    href: "image-optimize/linkedin",
    image: "/assets/linkedIn-tools.jpeg",
    title: "LinkedIn DP Resizer",
    description: "Perfect your LinkedIn profile with our DP resizer.",
  },
  {
    href: "image-optimize/instagram",
    image: "/assets/insta-tools.jpeg",
    title: "Instagram DP Resizer",
    description: "Perfect fit for your Instagram profile picture: resize hassle-free!",
  },
  {
    href: "image-optimize/facebook",
    image: "/assets/fb-tools.jpeg",
    title: "Facebook DP Resizer",
    description: "Perfect fit for your Facebook profile picture.",
  },
]
const CustomStyleLink = styled(Link)(({ theme })=> ({
  color: 'white',
  textDecoration: 'none',
  width: '100%',
  height: "100%",
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column'
}))

const FeatureImageCardContainer = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const imageScroll = useScroll({
    target: imageRef,
    offset: ["0 1", "1.8 1"],
  });

  const scaleImageProgress = useTransform(imageScroll.scrollYProgress, [0, 1], [0.8, 1]);
  const opacityImageProgress = useTransform(imageScroll.scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div 
      ref={imageRef}
      style={{
        scale: scaleImageProgress,
        opacity: opacityImageProgress,
      }}
    >
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
    </motion.div>
  );
};


export default FeatureImageCardContainer;
