"use client"

import React from 'react';
import { Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import CustomCardFeatureHome from '../Cards/Card';


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
          <CustomCardFeatureHome
            image={"/assets/image-optimizer.jpeg"}
            title={"Image Optimizer"}
            description={"Optimize images effortlessly, boost performance."}
          />
        </CustomStyleLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomStyleLink href={"image-resizer"}>
          <CustomCardFeatureHome
            image={"/assets/image-resizer.jpeg"}
            title={"Image Resizer"}
            description={"Resize images effortlessly in seconds!"}
          />
        </CustomStyleLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomStyleLink href={"image-optimize/whatsapp"}>
          <CustomCardFeatureHome
            image={"/assets/whatsapp-tool.jpeg"}
            title={"Whatsapp DP Resizer"}
            description={"Perfectly sized DPs for WhatsApp in seconds!"}
          />
        </CustomStyleLink>
      </Grid>
      <Grid item  xs={12} sm={6} md={4}>
        <CustomStyleLink href={"image-optimize/twitter"}>
        <CustomCardFeatureHome
            image={"/assets/x-tools.jpeg"}
            title={"Twitter DP Resizer"}
            description={"Perfectly resize your X/DP with ease!"}
          />
        </CustomStyleLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomStyleLink href={"image-optimize/tiktok"}>
          <CustomCardFeatureHome
            image={"/assets/tiktok-tools.jpeg"}
            title={"TikTok DP Resizer"}
            description={"Perfectly fit your TikTok vibe. Resize with ease!"}
          />
        </CustomStyleLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4} >
        <CustomStyleLink href={"image-optimize/linkedin"}>
          <CustomCardFeatureHome
            image={"/assets/linkedIn-tools.jpeg"}
            title={"LinkedIn DP Resizer"}
            description={"Perfect your LinkedIn profile with our DP resizer."}
          />
        </CustomStyleLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomStyleLink href={"image-optimize/instagram"}>
          <CustomCardFeatureHome
            image={"/assets/insta-tools.jpeg"}
            title={"Instagram DP Resizer"}
            description={"Perfect fit for your Instagram profile picture: resize hassle-free!"}
          />
        </CustomStyleLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomStyleLink href={"image-optimize/facebook"}>
          <CustomCardFeatureHome
            image={"/assets/fb-tools.jpeg"}
            title={"Facebook DP Resizer"}
            description={"Perfect fit for your Facebook profile picture."}
          />
        </CustomStyleLink>
      </Grid>
    </Grid>
  );
};


export default FeatureImageCardContainer;
