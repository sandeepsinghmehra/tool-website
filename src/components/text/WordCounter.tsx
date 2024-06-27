"use client"
import React, { useState } from 'react';
import { Box, TextField, Typography, Paper, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TaskAltRounded as TaskAltRoundedIcon } from '@mui/icons-material';

const WordCounter = () => {
  const [text, setText] = useState('');

  const countWords = (text) => {
    return text.trim().split(/\s+/).length;
  };

  const countCharacters = (text) => {
    return text.length;
  };

  const countCharactersNoSpaces = (text) => {
    return text.replace(/\s/g, '').length;
  };

  const countSentences = (text) => {
    return text.split(/[.!?]+\s|\n/).filter(sentence => sentence.length > 0).length;
  };

  const countParagraphs = (text) => {
    return text.split(/\n+/).filter(paragraph => paragraph.length > 0).length;
  };

  const averageWordsPerSentence = (text) => {
    const sentences = text.split(/[.!?]+\s|\n/).filter(sentence => sentence.length > 0);
    const words = countWords(text);
    return sentences.length ? (words / sentences.length).toFixed(2) : 0;
  };

  const topWordDensity = (text) => {
    const wordsArray = text.toLowerCase().match(/\b\w+\b/g);
    if (!wordsArray) return [];
    const wordCount = {};
    wordsArray.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
    return Object.entries(wordCount).sort(([, a]:any, [, b]:any) => b - a).slice(0, 5);
  };

  return (
    <Box component={"section"}>
        <Typography variant="h1" align='center' pt={2} sx={{fontSize: '2.5rem'}}>
            Word Counter Tool
        </Typography>
        <TextField
            label="Enter Text"
            multiline
            minRows={6}
            maxRows={20}
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{
                px: {xs: 2, md: 0}, 
                marginBottom: 2
            }}
        />
        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6">Statistics</Typography>
            <Typography>Total Words: {countWords(text)}</Typography>
            <Typography>Total Characters (with spaces): {countCharacters(text)}</Typography>
            <Typography>Total Characters (without spaces): {countCharactersNoSpaces(text)}</Typography>
            <Typography>Total Sentences: {countSentences(text)}</Typography>
            <Typography>Total Paragraphs: {countParagraphs(text)}</Typography>
            <Typography>Average Words per Sentence: {averageWordsPerSentence(text)}</Typography>
            <Typography>Top 5 Word Density:</Typography>
            {topWordDensity(text).map(([word, count]:any, index) => (
            <Typography key={index}>{index + 1}. {word}: {count}</Typography>
            ))}
        </Paper>
        <Box 
            sx={{
            pt: 5,
            width: {xs: '90%', md: '100%'},
            margin: 'auto'
            }}
        >
            <Typography component={'h4'} variant='h6' color={"primary"}>
                What is a Word Counter Tool ?
            </Typography>
            <Typography 
            variant='caption' 
            sx={{
                py: '2px',
            }}
            >
                A Word Counter is a digital tool designed to help users count the number of words, characters, sentences, paragraphs, and other text-related metrics in a given text. This tool is particularly useful for writers, students, editors, and anyone who needs to adhere to specific length requirements for their text. A word counter not only helps in counting words but also provides detailed insights into the text, such as the total number of characters (with and without spaces), the number of sentences and paragraphs, average words per sentence, and word density. This makes it an invaluable resource for enhancing writing clarity, conciseness, and adherence to guidelines.
            </Typography>
            <Typography variant='h6' pt={1}>
                Benefits of Using a Word Counter
            </Typography>
            <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <TaskAltRoundedIcon />
                        </ListItemIcon>
                        <ListItemText 
                            primary={`Adhere to Word Limits`} 
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
                    <ListItemText 
                        inset 
                        primary="Easily track the number of words to meet specific word count requirements for essays, reports, articles, or any other type of writing."
                        primaryTypographyProps={{
                            fontSize: 10,
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
                        primary={`Improve Writing Clarity`}
                        primaryTypographyProps={{
                            fontSize: 14,
                            letterSpacing: 0.2,
                        }}
                    />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText 
                        inset 
                        primary={'Analyze sentence length and structure to enhance readability and clarity.'} 
                        primaryTypographyProps={{
                            fontSize: 10,
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
                            primary={`Optimize for SEO`}
                            primaryTypographyProps={{
                                fontSize: 14,
                                letterSpacing: 0.2,
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText 
                        sx={{fontSize: 5}} 
                        inset
                        primary={`Identify word density and frequency to ensure your content is optimized for search engines.`}
                        primaryTypographyProps={{
                            fontSize: 10,
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
                            primary={`Efficient Editing`}
                            primaryTypographyProps={{
                                fontSize: 14,
                                letterSpacing: 0.2,
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText 
                        sx={{fontSize: 5}} 
                        inset
                        primary={`Quickly spot areas that need shortening or expansion to improve the overall quality of the text.`}
                        primaryTypographyProps={{
                            fontSize: 10,
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
                            primary={`Track Writing Progress`}
                            primaryTypographyProps={{
                                fontSize: 14,
                                letterSpacing: 0.2,
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText 
                        sx={{fontSize: 5}} 
                        inset
                        primary={`Monitor your writing progress in real-time, which is particularly useful for meeting deadlines.`}
                        primaryTypographyProps={{
                            fontSize: 10,
                            letterSpacing: 0.2,
                        }}
                    />
                    </ListItemButton>
                </ListItem>
                <Divider variant="inset" component="li" />
            </List> 
            <Typography variant='h6' pt={1}>
                How to Use the Word Counter Tool
            </Typography>
            <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <TaskAltRoundedIcon />
                        </ListItemIcon>
                        <ListItemText 
                            primary={`Enter Text`} 
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
                    <ListItemText 
                        inset 
                        primary="Paste or type your text into the input field."
                        primaryTypographyProps={{
                            fontSize: 10,
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
                        primary={`Get Instant Results`}
                        primaryTypographyProps={{
                            fontSize: 14,
                            letterSpacing: 0.2,
                        }}
                    />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText 
                        inset 
                        primary={'The tool will instantly display the total number of words, characters, sentences, paragraphs, average words per sentence, and top 5 word density.'} 
                        primaryTypographyProps={{
                            fontSize: 10,
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
                            primary={`Analyze and Edit`}
                            primaryTypographyProps={{
                                fontSize: 14,
                                letterSpacing: 0.2,
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText 
                        sx={{fontSize: 5}} 
                        inset
                        primary={`Use the detailed metrics to analyze and edit your text for better readability and adherence to guidelines.`}
                        primaryTypographyProps={{
                            fontSize: 10,
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
                            primary={`Copy or Download`}
                            primaryTypographyProps={{
                                fontSize: 14,
                                letterSpacing: 0.2,
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText 
                        sx={{fontSize: 5}} 
                        inset
                        primary={` Easily copy the analyzed text to the clipboard or download it for future use.`}
                        primaryTypographyProps={{
                            fontSize: 10,
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

export default WordCounter;
