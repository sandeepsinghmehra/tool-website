"use client"
import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

export default function CardUI({id, name, description, imageUrl}) {
    return (
        <Card sx={{ maxWidth: 230 }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    sx={{height: '280px', width: "230px", objectFit: 'cover', overflow: "hidden"}}
                    image={imageUrl}
                    alt={`${name+id+description}`}
                    loading="lazy"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" align='center' height={60}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align='center' height={40}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
