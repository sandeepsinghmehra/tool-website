"use client"

import * as React from 'react';
import CareerHeroLayout from './HeroLayout';
import { Typography } from '@mui/material';



export default function CareerHero(props) {
  return (
    <>
    <CareerHeroLayout
        sxBackground={{
            backgroundImage: `url(${props.image_url})`,
            backgroundPosition: 'center',
        }}
    >
        <Typography color="inherit" align="center" variant="h2">
        Want to join the team?
        </Typography>
        <Typography
            color="inherit"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
        >
           HRCS is always looking for candidates who are mission-focused, career driven and looking to make a career within the construction industry. Want to join a company where you can see your hard work rise. Please submit your resume to hr@hill21construction.com and in subject line state “interested candidate from website”. 
        </Typography>
        
    </CareerHeroLayout>
    </>
  );
}