"use client"

import React from 'react';
import { Typography, Container, Box, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

// Create a styled Box component for the section
const HowItWorksContainer = styled(motion.section)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(5, 0),
  textAlign: 'center',
}));

const ListContainer = styled(motion.ol)(({ theme }) => ({
  maxWidth: '600px',
  margin: '0 auto',
  textAlign: 'left',
}));

const HowItWorksSection = () => {
  return (
    <HowItWorksContainer
      id="how-it-works"
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
          How It Works
        </Typography>
        <ListContainer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ListItem>
            <ListItemText primary="Visit our website and upload your image or text." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Select the desired output (resize image or convert text)." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Download your optimized file instantly." />
          </ListItem>
        </ListContainer>
      </Container>
    </HowItWorksContainer>
  );
};

export default HowItWorksSection;
