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

const FeatureTextCardContainer = () => {

  return (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
            <CustomStyleLink href={"word-counter"}>
                <CustomCardFeatureHome
                    image={"/assets/word-counter.jpeg"}
                    title={"Word Counter"}
                    description={"Count words effortlessly. Boost your productivity."}
                />
            </CustomStyleLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <CustomStyleLink href={"text-repeater"}>
                <CustomCardFeatureHome
                    image={"/assets/text-repeater.jpeg"}
                    title={"Text Repeat Generator"}
                    description={"Repeat text effortlessly, save time!"}
                />
            </CustomStyleLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <CustomStyleLink href={"/text-to-bold"}>
                <CustomCardFeatureHome
                    image={"/assets/text-bold.jpeg"}
                    title={"Text To Bold Text"}
                    description={"Empower your text with precision. Transform text to bold effortlessly!"}
                />
            </CustomStyleLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <CustomStyleLink href={"/text-to-italic"}>
                <CustomCardFeatureHome
                    image={"/assets/text-italic.jpeg"}
                    title={"Text To Italic Text"}
                    description={"Transform text into stylish italics effortlessly."}
                />
            </CustomStyleLink>
        </Grid>
        <Grid item  xs={12} sm={6} md={4}>
            <CustomStyleLink href={"/text-to-audio"}>
                <CustomCardFeatureHome
                    image={"/assets/text-speech.jpeg"}
                    title={"Text To Speech"}
                    description={"Turn text into speech effortlessly."}
                />
            </CustomStyleLink>
      </Grid>
    </Grid>
  );
};


export default FeatureTextCardContainer;
