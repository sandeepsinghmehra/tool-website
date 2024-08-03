"use client"

import React from 'react';
import { Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import { easeOut, motion } from 'framer-motion';
import CustomCardFeatureHome from '../Cards/Card';

const dataList = [
    {
        href: "color-picker",
        image: "/assets/color-picker.jpeg",
        title: "Color Picker",
        description: "Choose your perfect color effortlessly!",
    },
    {
        href: "image-color-picker",
        image: "/assets/image-color-picker.jpeg",
        title: "Image Color Picker",
        description: "Extract and match colors from images!",
    },
];

const CustomStyleLink = styled(Link)(({ theme })=> ({
    color: 'white',
    textDecoration: 'none',
    width: '100%',
    height: "100%",
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column'
}))

const FeatureColorCardContainer = () => {

  return (
    <Grid 
        container 
        spacing={2}
        
    >
        { dataList.map((item, index) =>
            <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={index}
            >   
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


export default FeatureColorCardContainer;
