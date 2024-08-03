"use client"

import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Box);
const MotionCardContent = motion(CardContent);


const CustomCardFeatureHome = ({ image, title, description }) => {
  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    whileHover: { scale: 1.05, transition: { yoyo: Infinity, duration: 0.3 } }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const mediaVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <MotionCard
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="whileHover"
        sx={{ 
          maxWidth: 600, margin: 'auto', my: 0,
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          backgroundColor: '#50B498', 
          boxShadow: 3, 
          borderRadius: 2, 
          border: '1px dotted red', 
          p: 1,
          boxSizing: 'border-box' 
        }}
    >
        <motion.div variants={mediaVariants} initial="initial" animate="animate">
            <CardMedia
                component="img"
                sx={{ width: 80 }}
                image={image}
                alt="Card image"
            />
        </motion.div>
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', px: 2 }}>
            <MotionCardContent sx={{ flex: '1 0 auto', padding: 0 }} variants={contentVariants}>
                <Typography component="div" variant="h6">
                    {title}
                </Typography>
                <Typography variant="caption" color="text" component="div" sx={{lineHeight: 1.1}}>
                    {description}
                </Typography>
            </MotionCardContent>
        </Box>
    </MotionCard>
  );
};

export default CustomCardFeatureHome;
