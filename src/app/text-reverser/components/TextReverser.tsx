"use client"

import { Box, TextField, Typography, Paper, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, IconButton, Grid, useTheme, Tooltip, Checkbox } from '@mui/material';
import { Delete as DeleteIcon, FileCopy as FileCopyIcon, TaskAltRounded as TaskAltRoundedIcon } from '@mui/icons-material';
import React, { useState, ChangeEvent, useEffect } from 'react';


const TextReverser: React.FC = () => {

    const theme:any = useTheme();
    const [text, setText] = useState<string>('Try this');
    const [count, setCount] = useState<number>(5);
    const [reverseText, setReverseText] = useState<string>('');
    const [delimiter, setDelimiter] = useState<string>(',');
    const [isNewLine, setIsNewLine] = useState(false);

    const handleChangeNewLine = (event) => {
        setIsNewLine(event.target.checked);
    };

    const countWords = (text) => {
        return text.trim().split(/\s+/).length;
    };

    const handleReverse = () => {
        if(text !== undefined && text !== '' && text !== null){
            setReverseText(text.split('').reverse().join(''));
        }
    };

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };


    const handleDeleteText = () => {
        setText('');
        setReverseText('');
    }
    const handleCopyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(reverseText);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    useEffect(()=>{
        if(text !== undefined && text !== '' && text !== null){
            setReverseText(text.split('').reverse().join(''));
        }
    }, []);

    return (
        <Box component={"section"}>
            <Typography component={"h1"} variant="h1" align='center' pt={2} sx={{fontSize: '2.5rem'}}>
                Text Reverser
            </Typography>

            
            <Grid container columns={{ xs: 6, md: 12 }} sx={{px: {xs: 2, md: 0},  mt: 4,}} spacing={2}>
                <Grid item xs={6} md={6}>
                    <Box>
                        <TextField
                            label="Your Text"
                            multiline
                            minRows={4}
                            maxRows={6}
                            value={text}
                            onChange={handleTextChange}
                            fullWidth
                            variant="outlined"
                            sx={{ 
                                marginBottom: 2,
                                color: theme.palette.mode === 'light' ? "#000": "#fff",
                                '& label.Mui-focused': {
                                    color: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                            }}
                            InputLabelProps={{
                                style: { color: theme.palette.mode === 'light' ? '#000' : '#fff' },
                            }}
                        />
                        <Box display="flex" flexDirection="row" alignItems={'center'} mb={1}>
                            <Box 
                                display="flex" 
                                flexDirection="row" 
                                alignItems="center" 
                                sx={{
                                    bgcolor: "#f5f5f5", 
                                    borderRadius: 1, 
                                    width: "fit-content",
                                    cursor: 'pointer',
                                }} 
                                onClick={handleDeleteText} 
                            >
                                <Tooltip title="Clear Input">
                                    <IconButton color="primary" aria-label="delete">
                                        <DeleteIcon sx={{color: 'red'}} />
                                    </IconButton>
                                </Tooltip>
                                <Typography variant="body2" sx={{color: 'red', paddingRight: 1,}}>Clear Input</Typography>
                            </Box>
                            <Box display="flex" flexDirection="row" mx={1}>
                                <Typography variant="body2" mx={1}>Words: {countWords(text)}</Typography> 
                                <Typography variant="body2" mx={1}>Characters: {text.length}</Typography> 
                            </Box>
                        </Box>
                        
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleReverse}
                        sx={{ marginBottom: 2,  bgcolor: "blue" }}
                        title='Repeat Text'
                    >
                        Reverse Text
                    </Button>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Box>
                        <TextField
                            label="Reversed Text"
                            multiline
                            minRows={4}
                            maxRows={6}
                            value={reverseText}
                            InputProps={{
                            readOnly: true
                            }}
                            fullWidth
                            variant="outlined"
                            sx={{ 
                                marginBottom: 2,
                                color: theme.palette.mode === 'light' ? "#000": "#fff",
                                '& label.Mui-focused': {
                                    color: theme.palette.mode === 'light' ? '#000' : '#fff',
                                },
                            }}
                            InputLabelProps={{
                                style: { color: theme.palette.mode === 'light' ? '#000' : '#fff' },
                            }}
                        />
                        <Box 
                            display="flex" 
                            flexDirection="row" 
                            alignItems="center" 
                            sx={{
                                bgcolor: "#f5f5f5", 
                                borderRadius: 1, 
                                width: "fit-content",
                                cursor: 'pointer',
                            }} 
                            onClick={handleCopyToClipboard} 
                        >
                            <Tooltip title="Copy Text">
                                <IconButton color="primary" aria-label="copy">
                                    <FileCopyIcon sx={{color: 'blue'}} />
                                </IconButton>
                            </Tooltip>
                            <Typography variant="body2" sx={{color: 'blue', paddingRight: 1,}}>Copy Text</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Box 
                sx={{
                pt: 5,
                width: {xs: '90%', md: '100%'},
                margin: 'auto'
                }}
            >
                <Typography 
                    component={'h4'} 
                    variant='h6' 
                    color={theme.palette.mode === 'light' ? "primary": "#fff"} 
                >
                    What is a Text-Reverse Tool?
                </Typography>
                <Typography  
                    sx={{
                        py: '2px', textAlign:"justify", letterSpacing: '1px',
                    }}
                >
                    A Text-Reverse Tool is a simple utility that takes input text and reverses its characters or words, producing the text in reverse order.
                </Typography>
                <Typography variant='h6' pt={1}>
                    Benefits of Using a Word Text-Reverse
                </Typography>
                <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Creating Fun and Artistic Effects`} 
                                primaryTypographyProps={{
                                    fontSize: 18,
                                    letterSpacing: 0.3,
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText 
                            inset 
                            primary="Reversed text can be used for fun social media posts, unique profile bios, or art designs."
                            primaryTypographyProps={{
                                fontSize: 14,
                                letterSpacing: 0.2,
                            }} 
                        />
                        </ListItemButton>
                    </ListItem>
                    
                    <Divider variant="inset" component="li" />
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <TaskAltRoundedIcon />
                        </ListItemIcon>
                        <ListItemText 
                            primary={`Decoding and Puzzles`}
                            primaryTypographyProps={{
                                fontSize: 18,
                                letterSpacing: 0.3,
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText 
                            inset 
                            primary={'Reversed text is commonly used in puzzles or secret codes where readers need to decipher the reversed message.'} 
                            primaryTypographyProps={{
                                fontSize: 14,
                                letterSpacing: 0.2,
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Palindromes`}
                                primaryTypographyProps={{
                                    fontSize: 18,
                                    letterSpacing: 0.3,
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText 
                            sx={{fontSize: 5}} 
                            inset
                            primary={`The tool can be used to check if a word or sentence is a palindrome (reads the same backward and forward).`}
                            primaryTypographyProps={{
                                fontSize: 14,
                                letterSpacing: 0.2,
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Language Learning and Brain Training`}
                                primaryTypographyProps={{
                                    fontSize: 18,
                                    letterSpacing: 0.3,
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText 
                            sx={{fontSize: 5}} 
                            inset
                            primary={`Practicing with reversed text can help improve reading and cognitive skills.`}
                            primaryTypographyProps={{
                                fontSize: 14,
                                letterSpacing: 0.2,
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List> 
                <Typography variant='h6' pt={1}>
                    How to Use the Text-Reverse Tool
                </Typography>
                <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Input Text`} 
                                primaryTypographyProps={{
                                    fontSize: 18,
                                    letterSpacing: 0.3,
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText 
                            inset 
                            primary="Enter the text you want to Text Reverse in the provided input field."
                            primaryTypographyProps={{
                                fontSize: 14,
                                letterSpacing: 0.2,
                            }} 
                        />
                        </ListItemButton>
                    </ListItem>
                    
                    <Divider variant="inset" component="li" />
    
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Generate Reverse Text`}
                                primaryTypographyProps={{
                                    fontSize: 18,
                                    letterSpacing: 0.3,
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText 
                            sx={{fontSize: 5}} 
                            inset
                            primary={`Click the button to generate the reversed text.`}
                            primaryTypographyProps={{
                                fontSize: 14,
                                letterSpacing: 0.2,
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Copy and Use`}
                                primaryTypographyProps={{
                                    fontSize: 18,
                                    letterSpacing: 0.3,
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText 
                            sx={{fontSize: 5}} 
                            inset
                            primary={`Copy the generated text to your clipboard and use it wherever you need.`}
                            primaryTypographyProps={{
                                fontSize: 14,
                                letterSpacing: 0.2,
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List> 
        </Box>
        </Box>
    );
};

export default TextReverser;
