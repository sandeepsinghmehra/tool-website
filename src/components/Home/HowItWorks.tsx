"use client"

import React from 'react';
import { Typography, Container, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { styled } from '@mui/system';
import { motion, useAnimation } from 'framer-motion';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import useIntersectionObserver from '../animations/IntersectionObserver';

// Create a styled Box component for the section
const HowItWorksContainer = styled(motion.section)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(5, 0),
  textAlign: 'center',
}));

const ListContainer = styled(motion.ol)(({ theme }) => ({
  margin: '0',
  textAlign: 'left',
  padding: 0
}));

const HowItWorksSection = () => {
  const controls = useAnimation();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  React.useEffect(() => {
    if (isIntersecting) {
      controls.start('visible');
    }
  }, [controls, isIntersecting]);

  return (
    <HowItWorksContainer
      id="how-it-works"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
      }}
      ref={ref}
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
        <Typography 
          component={motion.p}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{textAlign:"justify", letterSpacing: '2px'}}
        >
          This tool is particularly beneficial for various user groups. Students and researchers can easily digitize their notes, books, and articles, making study and research more efficient. Business professionals can quickly convert receipts, invoices, and other documents into editable formats, streamlining administrative tasks and improving productivity. Content creators, such as bloggers and social media managers, can extract text from images for use in their content, enhancing their workflow and creative process.
        </Typography>
        <Typography 
          component={motion.p}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{textAlign:"justify", letterSpacing: '2px'}}
        >
          This Converter simplifies the task of text extraction, saving time and effort for users. This functionality is designed to enhance productivity, providing a convenient and reliable solution for text conversion needs. Experience the efficiency and ease of our Converter and see how it can simplify your workflow today.
        </Typography>
        
        <ListContainer
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ListItem>
            <ListItemIcon >
              <LabelImportantIcon sx={{fontSize: 24}} />
            </ListItemIcon>
            <ListItemText primary="Visit our website and upload your image or text." />
          </ListItem>
          <ListItem>
            <ListItemIcon >
              <LabelImportantIcon sx={{fontSize: 24}} />
            </ListItemIcon>
            <ListItemText primary="Select the desired output (resize image or convert text)." />
          </ListItem>
          <ListItem>
            <ListItemIcon >
              <LabelImportantIcon sx={{fontSize: 24}} />
            </ListItemIcon>
            <ListItemText primary="Download your optimized file instantly." />
          </ListItem>
        </ListContainer>
      </Container>
    </HowItWorksContainer>
  );
};

export default HowItWorksSection;
