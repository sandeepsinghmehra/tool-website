"use client"

import React from 'react';
import { Typography, Container, Box, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

// Create a styled Box component for the section
const BenefitsContainer = styled(motion.section)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(5, 0),
  textAlign: 'center',
}));

const ListContainer = styled(motion.ul)(({ theme }) => ({
  maxWidth: '600px',
  margin: '0 auto',
  textAlign: 'left',
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
        <ListContainer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ListItem>
            <ListItemText primary="No Quality Loss: Resize images without compromising on quality." />
          </ListItem>
          <ListItem>
            <ListItemText primary="User-Friendly: Simple and intuitive interface for a seamless experience." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Free and Online: No need to install software; everything is done online." />
          </ListItem>
        </ListContainer>
      </Container>
    </BenefitsContainer>
  );
};

export default BenefitsSection;
