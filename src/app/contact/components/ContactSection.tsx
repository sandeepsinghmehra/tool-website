"use client"

import { Box, TextField, Typography, Paper, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, IconButton, Grid, useTheme } from '@mui/material';
import React, { useState, ChangeEvent, useEffect } from 'react';


const ContactSection: React.FC = () => {

    const theme:any = useTheme();
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string>('');
    const [message, setMessage] = useState("");

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
    
        // Regular expression for validating email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // Validate email format
        if (!emailRegex.test(value)) {
          setError('Invalid email format');
        } else {
          setError('');
        }
    };
    
    return (
        <Box component={"section"} alignContent={"center"}>
            <Typography component={"h1"} variant="h1" align='center' pt={2} sx={{fontSize: '2.5rem'}}>
                Contact
            </Typography>

            <Box 
                sx={{
                    pt: 5,
                    width: {xs: '90%', md: '100%'},
                    margin: 'auto'
                }}
            >
            <Grid 
                container 
                direction={'column'} 
                columns={{ xs: 6, md: 6 }} 
                sx={{px: {xs: 2, md: 0,}, maxWidth: 600, m: 'auto'}} 
                spacing={2}
            >
            <Grid item xs={6} md={6}>
                <Box>
                    <TextField
                        label="Subject"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        sx={{  
                            color: theme.palette.mode === 'light' ? "#000": "#fff",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                borderColor: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                                '&:hover fieldset': {
                                borderColor: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                                '&.Mui-focused fieldset': {
                                borderColor: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                                '& input': {
                                color: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                            },
                            '& label.Mui-focused': {
                                color: theme.palette.mode === 'light' ? '#000' : '#fff',
                            },
                        }}
                        InputLabelProps={{
                            style: { color: theme.palette.mode === 'light' ? '#000' : '#fff' },
                        }}
                    />
                </Box>
            </Grid>
            <Grid item xs={6} md={6}>
                <Box>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={handleEmailChange}
                        sx={{
                            mt: 0,  
                            color: theme.palette.mode === 'light' ? "#000": "#fff",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                borderColor: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                                '&:hover fieldset': {
                                borderColor: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                                '&.Mui-focused fieldset': {
                                borderColor: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                                '& input': {
                                color: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                            },
                            '& label.Mui-focused': {
                                color: theme.palette.mode === 'light' ? '#000' : '#fff',
                            },
                        }}
                        error={Boolean(error)}
                        helperText={error}
                    />
                </Box>
            </Grid>
            <Grid item xs={6} md={6}>
                <Box>
                    <TextField
                        label="Message"
                        multiline
                        minRows={4}
                        maxRows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        fullWidth
                        variant="outlined"
                        sx={{  
                            color: theme.palette.mode === 'light' ? "#000": "#fff",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                borderColor: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                                '&:hover fieldset': {
                                borderColor: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                                '&.Mui-focused fieldset': {
                                borderColor: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                                '& input': {
                                color: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                            },
                            '& label.Mui-focused': {
                                color: theme.palette.mode === 'light' ? '#000' : '#fff',
                            },
                        }}
                        InputLabelProps={{
                            style: { color: theme.palette.mode === 'light' ? '#000' : '#fff' },
                        }}
                    />
            
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    // onClick={handleConversion}
                    sx={{ marginY: 3,  bgcolor: "blue" }}
                >
                    Submit
                </Button>
        </Grid>
       
        
        
      </Grid>
            </Box>
        </Box>
    );
};

export default ContactSection;
