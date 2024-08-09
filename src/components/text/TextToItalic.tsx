"use client"
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid, IconButton, Switch, useTheme } from '@mui/material';
import { SaveAlt as SaveAltIcon, FileCopy as FileCopyIcon, Delete as DeleteIcon, FormatBoldOutlined  } from '@mui/icons-material'; 
import toItalicUnicode from './ItalicUnicode';
import toBoldItalicUnicode from './BoldItalicUnicode';



const ItalicTextConverter = () => {
  const theme:any = useTheme();
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isFile, setIsFile] = useState(false);
  const [isBold, setIsBold] = useState(false);

  const handleConversion = () => {
    const convertedText = isBold ? toBoldItalicUnicode(inputText) : toItalicUnicode(inputText);
    setOutputText(convertedText);
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
          setIsFile(true);
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
  const handleDeleteText = () => {
    setInputText('');
    setOutputText('');
    setIsFile(false);
  }
  const handleIsBold = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBold(event.target.checked);
    const convertedText = toBoldItalicUnicode(inputText);
    setOutputText(convertedText);
  };

  
  return (
    <Box component={"section"}>
      <Typography variant="h3" align='center' pt={2}>
        Text to Italic Converter
      </Typography>
        <Box sx={{paddingY: 2, px: {xs: 2, md: 0}}}>
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
        <Box textAlign={'left'} sx={{px: {xs: 2, md: 0}}}>
            <Button variant="outlined" component="span" sx={{ my: 1}}>
                <Switch  
                    checked={isBold}
                    onChange={handleIsBold} 
                />
                <FormatBoldOutlined sx={{color: 'blue'}} />
            </Button>
        </Box>
      <Grid container columns={{ xs: 6, md: 12 }} sx={{px: {xs: 2, md: 0}}} spacing={2}>
        <Grid item xs={6} md={6}>
          <Box>
          <TextField
            label="Input Text"
            multiline
            minRows={4}
            maxRows={6}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
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
          <IconButton onClick={handleDeleteText}>
            <DeleteIcon sx={{color: 'red'}} />
          </IconButton>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConversion}
            sx={{ marginBottom: 2 }}
          >
            Convert to Italic
          </Button>
        </Grid>
        <Grid item xs={6} md={6}>
          <Box>
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
          <IconButton onClick={handleCopyToClipboard}>
            <FileCopyIcon sx={{color: 'blue'}} />
          </IconButton>
          </Box>
          <IconButton onClick={handleFileDownload} sx={{ marginRight: 2 }} disabled={isFile}>
            <SaveAltIcon sx={{color: 'green'}} /> 
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
        <Typography component={'h4'} variant='h6' color={theme.palette.mode === 'light' ? "primary": "#fff"} >
          What is Italic Text Generator ?
        </Typography>
        <Typography 
          variant='caption' 
          sx={{
              py: '2px',
          }}
        >
          Italic Text Generator is a convenient online tool designed to transform regular text into Italic style using standard Unicode characters. Whether you are looking for a ilatic font generator or simply need to convert text to italic format, this tool is ideal for the job. It enables you to effortlessly style your text in italic, making it suitable for copying and pasting onto any text-based platform. With this free online converter, you can quickly enhance the appearance of your text, ensuring it stands out wherever you use it.
        </Typography>
      </Box>
    </Box>
  );
};

export default ItalicTextConverter;
