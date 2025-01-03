"use client"

import { Box, TextField, Typography, Paper, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, IconButton, Grid, useTheme, Tooltip, Checkbox } from '@mui/material';
import { Delete as DeleteIcon, FileCopy as FileCopyIcon, TaskAltRounded as TaskAltRoundedIcon } from '@mui/icons-material';
import React, { useState, ChangeEvent, useEffect } from 'react';


const TextRepeater: React.FC = () => {

    const theme:any = useTheme();
    const [text, setText] = useState<string>('Try this');
    const [count, setCount] = useState<number>(5);
    const [repeatedText, setRepeatedText] = useState<string>('');
    const [delimiter, setDelimiter] = useState<string>(',');
    const [isNewLine, setIsNewLine] = useState(false);

    const handleChangeNewLine = (event) => {
        setIsNewLine(event.target.checked);
    };

    const countWords = (text) => {
        return text.trim().split(/\s+/).length;
    };

    const handleRepeat = () => {
        if (count > 0) {
            const separator = isNewLine ? delimiter + "\n" : delimiter;
            setRepeatedText(Array(count).fill(text).join(separator));
            // setRepeatedText(Array(count).fill(text).join(delimiter));
        } else {
            setRepeatedText('Count should be a positive number.');
        }
    };

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleCountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        setCount(isNaN(value) ? 1 : value);
    };

    const handleDelimiterChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDelimiter(e.target.value);
    };
    const handleDeleteText = () => {
        setText('');
        setRepeatedText('');
    }
    const handleCopyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(repeatedText);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    useEffect(()=>{
        if (count > 0) {
            setRepeatedText(Array(count).fill(text).join(delimiter));
        } else {
            setRepeatedText('Count should be a positive number.');
        }
    }, []);

    return (
        <Box component={"section"}>
            <Typography component={"h1"} variant="h1" align='center' pt={2} sx={{fontSize: '2.5rem'}}>
                Text Repeater
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
                        <Box display="flex" flexDirection="row" alignItems={'center'}>
                           
                       
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

                        <Box>
                            <Typography variant="body2" sx={{mt: 2}}>Settings</Typography>
                            <Box 
                                sx={{ 
                                    display: 'flex',
                                    flexDirection: 'column',   
                                    textAlign: 'center', 
                                }}
                            >
                                <Box
                                    display="flex" 
                                    flexDirection="row" 
                                    alignItems="center" 
                                    sx={{
                                        width: "fit-content",
                                    }} 
                                >
                                    <Checkbox
                                        checked={isNewLine}
                                        onChange={handleChangeNewLine}
                                        color="success"
                                        inputProps={{ 'aria-label': 'basic checkbox' }}
                                    />
                                    <Typography variant="body2" sx={{paddingRight: 1,}}>Add New Line</Typography>
                                </Box> 

                                <TextField
                                    label="Delimiter"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={delimiter}
                                    size='small'
                                    onChange={handleDelimiterChange}
                                    sx={{ 
                                        maxWidth: 140, 
                                        // m: 1,
                                        color: theme.palette.mode === 'light' ? "#000": "#fff",
                                        '& label.Mui-focused': {
                                            color: theme.palette.mode === 'light' ? '#000' : '#fff',
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: { color: theme.palette.mode === 'light' ? '#000' : '#fff' },
                                    }}
                                />

                                <TextField
                                    label="Repetitions"
                                    variant="outlined"
                                    type="number"
                                    fullWidth
                                    margin="normal"
                                    value={count}
                                    onChange={handleCountChange}
                                    size='small'
                                    sx={{ 
                                        maxWidth: 140, 
                                        // m: 1,
                                        color: theme.palette.mode === 'light' ? "#000": "#fff",
                                        '& label.Mui-focused': {
                                            color: theme.palette.mode === 'light' ? '#000' : '#fff',
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: { color: theme.palette.mode === 'light' ? '#000' : '#fff' },
                                    }}
                                />
                                
                            </Box>
                        </Box>
                        
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleRepeat}
                        sx={{ marginBottom: 2,  bgcolor: "blue" }}
                        title='Repeat Text'
                    >
                        Repeat Text
                    </Button>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Box>
                        <TextField
                            label="Repeated Text"
                            multiline
                            minRows={4}
                            maxRows={6}
                            value={repeatedText}
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
                        {/* <IconButton onClick={handleCopyToClipboard}>
                            <FileCopyIcon sx={{color: 'blue'}} />
                        </IconButton> */}
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
                    What is a Text-Repeater Tool?
                </Typography>
                <Typography  
                    sx={{
                        py: '2px', textAlign:"justify", letterSpacing: '1px',
                    }}
                >
                    A Text-Repeater Tool is a simple yet powerful utility that allows users to repeat a given piece of text multiple times, with optional delimiters between repetitions. This tool can be useful for a variety of purposes, such as generating repeated patterns of text for testing, creating repeated content for design mockups, or producing large blocks of text quickly.
                </Typography>
                <Typography variant='h6' pt={1}>
                    Benefits of Using a Word Text-Repeater
                </Typography>
                <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Time-Saving`} 
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
                            primary="Automates the repetitive task of manually copying and pasting text multiple times."
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
                            primary={`Consistency`}
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
                            primary={'Ensures that the repeated text is identical every time, reducing human error.'} 
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
                                primary={`Versatility`}
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
                            primary={`Can be used in various fields such as web development, content creation, testing, and more.`}
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
                                primary={`Customization`}
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
                            primary={`Allows users to specify the number of repetitions and delimiters, providing flexibility in the output.`}
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
                                primary={`Ease of Use`}
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
                            primary={`Simple interface makes it accessible to users with minimal technical skills.`}
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
                    How to Use the Text-Repeater Tool
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
                            primary="Enter the text you want to repeat in the provided input field."
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
                            primary={`Set Repeat Count`}
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
                            primary={'Specify the number of times you want the text to be repeated.'} 
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
                                primary={`Choose Delimiter`}
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
                            primary={`Optionally, enter a delimiter to be placed between each repetition of the text.`}
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
                                primary={`Generate Repeated Text`}
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
                            primary={`Click the button to generate the repeated text.`}
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

export default TextRepeater;
