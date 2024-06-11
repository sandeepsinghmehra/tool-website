import * as React from 'react';

import HeroLayout from './HeroLayout';
import { Typography } from '@mui/material';

export default function Hero(props) {
  return (
    <HeroLayout
        sxBackground={{
            backgroundImage: `url(${props.image_url})`,
            backgroundColor: '#7fc7d9', // Average color of the background image.
            backgroundPosition: 'center',
        }}
    >
        <Typography color="inherit" align="center" variant="h2">
            High Rise Construction Solutions
        </Typography>
        <Typography
            color="inherit"
            align="center"
            variant="caption"
            sx={{ mb: 4, mt: { xs: 4, sm: 10 }, fontSize: '30px' }}
        >
            Serving the Metropolitan area since 2018
        </Typography>
    </HeroLayout>
  );
}