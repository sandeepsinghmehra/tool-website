"use client"

import React from 'react';
import { Typography, Container, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { LabelImportant as LabelImportantIcon } from '@mui/icons-material';

// Create a styled Box component for the section
const BenefitsContainer = styled(motion.section)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(5, 0),
  textAlign: 'center',
}));

const ListContainer = styled(motion.ul)(({ theme }) => ({
  margin: '0',
  textAlign: 'left',
  padding: 0
}));

const BenefitsSection = () => {
  return (
    <BenefitsContainer
      id="benefits"
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
          Why Choose Us
        </Typography>
        <Typography 
          component={motion.p}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{textAlign:"justify", letterSpacing: '2px'}}
        >
          We provides precise and accurate text conversion and images resizer, ensuring high-quality results even for complex documents. The user-friendly interface allows for easy conversion with minimal clicks, making it accessible to everyone regardless of technical skill. Our tool supports various image formats, including JPG, PNG, and WEBP. Users can expect fast processing speeds, maintaining high quality without delays, which is ideal for time-sensitive tasks. We prioritize user privacy and security, ensuring that all files are processed securely and no data is stored on our servers.
        </Typography>
        <ListContainer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ListItem>
            <ListItemIcon >
              <LabelImportantIcon sx={{fontSize: 24}} />
            </ListItemIcon>
            <ListItemText primary="No Quality Loss: Resize images without compromising on quality." />
          </ListItem>
          <ListItem>
            <ListItemIcon >
              <LabelImportantIcon sx={{fontSize: 24}} />
            </ListItemIcon>
            <ListItemText primary="User-Friendly: Simple and intuitive interface for a seamless experience." />
          </ListItem>
          <ListItem>
            <ListItemIcon >
              <LabelImportantIcon sx={{fontSize: 24}} />
            </ListItemIcon>
            <ListItemText primary="Free and Online: No need to install software; everything is done online." />
          </ListItem>
        </ListContainer>
      </Container>
    </BenefitsContainer>
  );
};

export default BenefitsSection;
