"use client"

import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

// Create a styled Box component for the section
const UseCasesContainer = styled(motion.section)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0),
  textAlign: 'center',
}));

const UseCase = styled(motion.div)(({ theme }) => ({
  maxWidth: '600px',
  margin: '0 auto',
  textAlign: 'left',
  marginBottom: theme.spacing(4),
}));

const UseCasesSection = () => {
  return (
    <UseCasesContainer
      id="use-cases"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Typography
          variant="h4"
          component={motion.h4}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          gutterBottom
        >
          Use Cases
        </Typography>
        <UseCase
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography variant="h3" component="h3" gutterBottom>
            For Websites
          </Typography>
          <Typography variant="body1" component="p">
            Optimize images for faster page loading.
          </Typography>
        </UseCase>
        <UseCase
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Typography variant="h3" component="h3" gutterBottom>
            For Social Media
          </Typography>
          <Typography variant="body1" component="p">
            Perfectly sized images for Facebook, Instagram, LinkedIn, etc.
          </Typography>
        </UseCase>
        <UseCase
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Typography variant="h3" component="h3" gutterBottom>
            For Documents
          </Typography>
          <Typography variant="body1" component="p">
            Include resized images in Word or PDF documents to reduce file size.
          </Typography>
        </UseCase>
        <UseCase
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <Typography variant="h3" component="h3" gutterBottom>
            For Auctions
          </Typography>
          <Typography variant="body1" component="p">
            Create optimized photos for eBay and other auction sites.
          </Typography>
        </UseCase>
      </Container>
    </UseCasesContainer>
  );
};

export default UseCasesSection;
