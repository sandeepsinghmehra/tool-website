"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';


function CustomCardServices(props) {

  return (
    <Container component="section" maxWidth={false} sx={{ pt: 5, pb: 5, height: '100%', maxWidth: '100%' }}>
        <Grid container columns={{ xs: 6, md: 12 }} sx={{ height: '100%'}} direction={props.directionImage || 'row'}>
            <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
                <Box 
                    sx={{ p: 5 }}
                >
                    <Typography variant="h4" component="h4" gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography component={"p"} sx={{fontSize: 18}}>
                    {props.description}
                    </Typography>
                    <List sx={{ width: {xs: '100%', md:'80%'}, p: "10px", bgcolor: 'background.paper' }}>
                        {props.listArray.map((value) => (
                        <ListItem
                            key={value}
                            disableGutters
                        >
                            <ListItemIcon >
                            <CircleIcon sx={{fontSize: 3}} />
                            </ListItemIcon>

                            <ListItemText sx={{fontSize: 18, fontWeight: 400}} primary={`${value}`}  />
                        </ListItem>
                        ))}
                    </List>
                </Box>
            </Grid>
            <Grid
                item
                xs={12} md={6}
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    overflow: {md:'hidden'} 
                }}
            >
                <Box
                    component="img"
                    src={props.image_url}
                    alt="Team Image"
                    sx={{
                    width: '100%',
                    }}
                />
            </Grid>
        </Grid>
    </Container>
  );
}

export default CustomCardServices;