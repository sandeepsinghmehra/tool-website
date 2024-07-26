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

const FeatureImageCardContainer = () => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <CustomStyleLink href={"image-optimize"}>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.5, ease: easeOut}}
            viewport={{ once: true}}
          >
            <CustomCardFeatureHome
              image={"/assets/image-optimizer.jpeg"}
              title={"Image Optimizer"}
              description={"Optimize images effortlessly, boost performance."}
            />

          </motion.div>
        </CustomStyleLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomStyleLink href={"image-resizer"}>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.65, ease: easeOut}}
            viewport={{ once: true}}
          >
            <CustomCardFeatureHome
              image={"/assets/image-resizer.jpeg"}
              title={"Image Resizer"}
              description={"Resize images effortlessly in seconds!"}
            />
          </motion.div>
        </CustomStyleLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomStyleLink href={"image-optimize/whatsapp"}>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.75, ease: easeOut}}
            viewport={{ once: true}}
          >
            <CustomCardFeatureHome
              image={"/assets/whatsapp-tool.jpeg"}
              title={"Whatsapp DP Resizer"}
              description={"Perfectly sized DPs for WhatsApp in seconds!"}
            />
          </motion.div>
        </CustomStyleLink>
      </Grid>
      <Grid item  xs={12} sm={6} md={4}>
        <CustomStyleLink href={"image-optimize/twitter"}>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.5, ease: easeOut}}
            viewport={{ once: true}}
          >
            <CustomCardFeatureHome
              image={"/assets/x-tools.jpeg"}
              title={"Twitter DP Resizer"}
              description={"Perfectly resize your X/DP with ease!"}
            />
          </motion.div>
        </CustomStyleLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomStyleLink href={"image-optimize/tiktok"}>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.65, ease: easeOut}}
            viewport={{ once: true}}
          >
            <CustomCardFeatureHome
              image={"/assets/tiktok-tools.jpeg"}
              title={"TikTok DP Resizer"}
              description={"Perfectly fit your TikTok vibe. Resize with ease!"}
            />
          </motion.div>
        </CustomStyleLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4} >
        <CustomStyleLink href={"image-optimize/linkedin"}>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.75, ease: easeOut}}
            viewport={{ once: true}}
          >
            <CustomCardFeatureHome
              image={"/assets/linkedIn-tools.jpeg"}
              title={"LinkedIn DP Resizer"}
              description={"Perfect your LinkedIn profile with our DP resizer."}
            />
          </motion.div>
        </CustomStyleLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomStyleLink href={"image-optimize/instagram"}>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.5, ease: easeOut}}
            viewport={{ once: true}}
          >
            <CustomCardFeatureHome
              image={"/assets/insta-tools.jpeg"}
              title={"Instagram DP Resizer"}
              description={"Perfect fit for your Instagram profile picture: resize hassle-free!"}
            />
          </motion.div>
        </CustomStyleLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomStyleLink href={"image-optimize/facebook"}>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.65, ease: easeOut}}
            viewport={{ once: true}}
          >
            <CustomCardFeatureHome
              image={"/assets/fb-tools.jpeg"}
              title={"Facebook DP Resizer"}
              description={"Perfect fit for your Facebook profile picture."}
            />
          </motion.div>
        </CustomStyleLink>
      </Grid>
    </Grid>
  );
};


export default FeatureImageCardContainer;
