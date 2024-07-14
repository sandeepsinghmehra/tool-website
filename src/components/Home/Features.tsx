"use client"

import React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import FeatureImageCardContainer from './FeatureImageCard';
import FeatureTextCardContainer from './FeatureTextCard';


// Create a styled motion div for the section container
const SectionContainer = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(5, 0),
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
}));

const FeatureBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const FeaturesSection = () => {
  return (
    <SectionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Typography variant="h4" component="h4" gutterBottom>
          Our Features
        </Typography>
        <FeatureBox>
          <Typography variant="h5" component="h3">
            Image Resizer
          </Typography>
          <Typography variant="body1" component="p">
            Resize photos and images without compromising on quality.
          </Typography>
          <Typography variant="body2" component="p">
            Supported Formats: JPEG, JPG, PNG, WEBP
          </Typography>
          {/* <List>
            <ListItem>
              <ListItemText primary="Publish images on your website for faster loading times." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Send images via email attachments." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Post photos on social media platforms like Facebook, Instagram, and more." />
            </ListItem>
          </List> */}
          <br />
          <FeatureImageCardContainer />
        </FeatureBox>
        <FeatureBox>
          <Typography variant="h5" component="h3">
            Text Tools
          </Typography>
          <Typography variant="body1" component="p">
            Word Counter: Easily count the number of words in your text.
          </Typography>
          <Typography variant="body1" component="p">
            Text to Bold: Convert your text to bold effortlessly.
          </Typography>
          <Typography variant="body1" component="p">
            Other Conversions: Various text conversion options available.
          </Typography>
          <br />
          <FeatureTextCardContainer />
        </FeatureBox>
      </Container>
    </SectionContainer>
  );
};

export default FeaturesSection;
