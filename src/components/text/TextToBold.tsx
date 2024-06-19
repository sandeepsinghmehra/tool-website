"use client"
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, TextareaAutosize, Grid, IconButton } from '@mui/material';
import { SaveAlt as SaveAltIcon, FileCopy as FileCopyIcon } from '@mui/icons-material'; 
import toBoldUnicode from './BoldUnicode';


const BoldTextConverter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleBoldConversion = () => {
    const boldedText = toBoldUnicode(inputText);
    setOutputText(boldedText);
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target?.result;
        if (fileContent && typeof fileContent === 'string') {
          setInputText(fileContent);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleFileDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([outputText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'bolded_text.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Box component={"section"}>
      <Typography variant="h3" align='center' pt={2}>
        Text to Bold Converter
      </Typography>
      <Box sx={{paddingY: 2}}>
        <input
          accept=".txt"
          style={{ display: 'none' }}
          id="upload-file"
          type="file"
          onChange={handleFileUpload}
        />
        <label htmlFor="upload-file">
          <Button variant="contained" component="span" sx={{ marginRight: 2 }}>
            Upload Text File
          </Button>
        </label>
      </Box>
      <Grid container columns={{ xs: 6, md: 12 }} spacing={2}>
        <Grid item xs={6} md={6}>
          <TextField
            label="Input Text"
            multiline
            minRows={4}
            maxRows={6}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleBoldConversion}
            sx={{ marginBottom: 2 }}
          >
            Convert to Bold
          </Button>
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label="Output Text"
            multiline
            minRows={4}
            maxRows={6}
            value={outputText}
            InputProps={{
              readOnly: true
            }}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <IconButton onClick={handleFileDownload} sx={{ marginRight: 2 }}>
            <SaveAltIcon />
          </IconButton>
          <IconButton onClick={handleCopyToClipboard}>
            <FileCopyIcon />
          </IconButton>
        </Grid>
        
        
      </Grid>
      <Box 
        sx={{
          pt: 5,
          width: {xs: '90%', md: '100%'},
          margin: 'auto'
        }}
      >
        <Typography component={'h4'} variant='h6' color={"primary"}>
          What is Bold Text Generator ?
        </Typography>
        <Typography 
          variant='caption' 
          sx={{
              py: '2px',
          }}
        >
          Bold Text Generator is a convenient online tool designed to transform regular text into bold style using standard Unicode characters. Whether you are looking for a bold font generator or simply need to convert text to bold format, this tool is ideal for the job. It enables you to effortlessly style your text in bold, making it suitable for copying and pasting onto any text-based platform. With this free online converter, you can quickly enhance the appearance of your text, ensuring it stands out wherever you use it.
        </Typography>
      </Box>
    </Box>
  );
};

export default BoldTextConverter;
