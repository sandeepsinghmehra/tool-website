"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const HeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  padding: 0,
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    // maxHeight: 1300,
  },
}));

const Background = styled('div')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});
const BackgroundWaves = styled('div')({
  position: 'absolute',
  left: 0,
  bottom: -10,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
});

function CareerHeroLayout(props) {
  const { sxBackground, children } = props;

  return (
    <HeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.7,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
        <BackgroundWaves>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="top-stroke-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" style={{ stopColor: 'hsla(30.81,40.22%,63.92%,1)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'hsla(30.81,40.22%,63.92%,1)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path 
            fill="hsla(60,6.67%,94.12%,1)"
            fillOpacity="1" d="M0,224L60,202.7C120,181,240,139,360,149.3C480,160,600,224,720,261.3C840,299,960,309,1080,304C1200,299,1320,277,1380,266.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>

          <path 
            d="M0,224L60,202.7C120,181,240,139,360,149.3C480,160,600,224,720,261.3C840,299,960,309,1080,304C1200,299,1320,277,1380,266.7L1440,256"
            fill="none"
            stroke="url(#top-stroke-gradient)"
            strokeWidth="7"
          >
          </path>
        
        </svg>
        </BackgroundWaves>
      </Container>
    </HeroLayoutRoot>
  );
}

export default CareerHeroLayout;