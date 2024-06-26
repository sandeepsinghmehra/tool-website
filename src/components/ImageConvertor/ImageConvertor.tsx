"use client"
import { Box, Button, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography, styled, useTheme } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';


const InputMui = styled('input')(({ theme }) => ({
    display: 'none',
}));
const InputContainer =  styled('div')(({ theme }) => ({
    width: 'auto',
    margin: '20px auto',
    [theme.breakpoints.up('md')]: {
        width: '400px'
    }
}));
const ImageConverter = ({inputFormat, outputFormat}) => {
    const theme:any = useTheme();
    const [selectedFile, setSelectedFile] = useState(null);
    const [convertedFile, setConvertedFile] = useState(null);
    
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        console.log("file: ", file)
        if (file.type !== `image/${inputFormat}`) {
            setError(`Selected file does not match the expected input format: image/${inputFormat}`);
            return;
        }

        setSelectedFile(file);
        setError('');
    };
 
    const getConvertedFile = async () => {
        try {
            const compressedFile = await compressAndConvertImage(selectedFile);
            setConvertedFile(compressedFile);
        } catch (error) {
            setError('Error compressing the image');
            console.error(error);
        }
    }
    

  const compressAndConvertImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img:any = new window.Image();
        img.src = event.target.result;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          const maxWidth = 1920;
          const maxHeight = 1080;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob((blob) => {
            resolve(new File([blob], file.name.replace(/\.\w+$/, `.${outputFormat}`), { type: `image/${outputFormat}` }));
          }, `image/${outputFormat}`, 0.75); // Adjust the quality here
        };

        img.onerror = () => {
          reject(new Error('Error loading image'));
        };
      };

      reader.onerror = () => {
        reject(new Error('Error reading file'));
      };
    });
  };

  const handleDownload = () => {
    if (!convertedFile) return;

    const url = URL.createObjectURL(convertedFile);
    const link = document.createElement('a');
    link.href = url;
    link.download = convertedFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Box component={"section"}>
        <Typography 
            variant='h3' 
            component={'h3'} 
            align='center' 
            pt={2}
        > 
            <Typography 
                component={'span'} 
                variant='h3'
                color={"orange"}
            >{inputFormat.toUpperCase()}</Typography> to <Typography component={'span'} variant='h3' color={"green"}>{outputFormat.toUpperCase()}</Typography> Converter</Typography>
        <Typography 
            variant='body1' 
            sx={{
                pt: '3px',
                mb: '20px',
                textAlign: 'center',
                width: {xs: '90%', md: '80%'},
                margin: 'auto'
            }}
        >
            <Typography 
                component={'span'} 
                color={"orange"}
            >{inputFormat.toUpperCase()}</Typography> to <Typography component={'span'} color={"green"}>{outputFormat.toUpperCase()}</Typography> Converter. ConvertMaster converts your image files online.
            Best way to convert your <Typography 
                component={'span'} 
                color={"orange"}
            >{inputFormat.toUpperCase()}</Typography> to <Typography component={'span'} color={"green"}>{outputFormat.toUpperCase()}</Typography> file in seconds.
        </Typography>

        <InputContainer>
            <Grid container
                sx={{
                    padding: 0,
                    margin: {xs: 'auto', md: 0},
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: theme.palette.mode === 'light' ? '1px solid rgba(164, 164, 164, 0.13)': "1px solid #FFF",
                    borderRadius: '35px',
                    boxShadow: theme.palette.mode === 'light' ? `rgb(241, 241, 241) 1px 13px 12px 0px` : '#000',
                    width: {xs: '90%', md: '100%'}
                }}>
                <Grid item xs={6} sx={{padding: `10px`,}}>
                    <InputMui
                        accept={`image/${inputFormat}`}
                        multiple={false}
                        type="file"
                        id="contained-button-file"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="contained-button-file">
                        <Button 
                            component="span" 
                            sx={{
                                margin: 0, 
                                color: 'orange',
                                fontSize: {xs: '.7rem', md: '.8rem'},
                            }}>
                        {(selectedFile && selectedFile?.name) || "Choose Image File"}
                        </Button>
                    </label>
                
                </Grid>
                <Grid item xs={6}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        component="span" 
                        onClick={getConvertedFile} 
                        sx={{ 
                            borderRadius: '35px', 
                            fontSize: {xs: '.7rem', md: '.9rem'},
                            bgcolor: "blue" 
                        }}
                        disabled={!selectedFile}
                    >
                        Convert to {outputFormat}
                    </Button>
                </Grid>
            </Grid>
        </InputContainer>
        {selectedFile && (
        <Paper 
            elevation={3} 
            sx={{
                width: { xs: '90%', md:'80%'}, 
                m: 'auto', 
                height: {xs: '100%', md:'20rem'}, 
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'}, justifyContent: {md:'space-evenly'}}}>
            <Box  
                sx={{
                    padding: {xs: 2, md: 0}
                }}  
            >
                <Typography variant='subtitle2' pt={1} component={'div'}>Original Image</Typography>
                {selectedFile && (
                    <div>
                        <Typography variant='caption' component={'div'}>File Name: {selectedFile.name}</Typography>
                        <Typography variant='caption' component={'div'}>File Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</Typography>
                        <Box 
                            sx={{
                                overflow: "hidden", 
                                padding: {xs: "2rem 0",md:"2rem 0"}, 
                                width: {xs: 'auto', md:'10rem'},
                                height: '10rem',
                                position: 'relative',
                            }} 
                        >
                            <Image  
                                src={URL.createObjectURL(selectedFile)} 
                                alt={`Original`} 
                                fill
                                style={{
                                    width: '100%',
                                    objectFit: 'cover', 
                                }}
                            />
                        </Box>
                    </div>
                )}
            </Box> 
            <Box 
                sx={{
                    padding: {xs: 2, md: 0}
                }} 
            >
                <Typography variant='subtitle2' pt={1} component={'div'}>Converted Image</Typography>
                {convertedFile && (
                    <div>
                        <Typography variant='caption' component={'div'}>File Name: {convertedFile.name}</Typography>
                        <Typography variant='caption' component={'div'}>File Size: {(convertedFile.size / 1024 / 1024).toFixed(2)} MB</Typography>
                         <Box 
                            sx={{
                                overflow: "hidden", 
                                padding: {xs: "2rem 0",md:"2rem 0"}, 
                                width: {xs: 'auto', md:'10rem'},
                                height: '10rem',
                                position: 'relative',
                            }} 
                        >
                            <Image  
                                src={URL.createObjectURL(convertedFile)} 
                                alt={`Converted`} 
                                fill
                                style={{
                                    width: '100%',
                                    objectFit: 'cover', 
                                }}
                            />
                        </Box>
                        <Button variant="contained" color="primary" sx={{mt: 1,  bgcolor: "blue" }} onClick={handleDownload}>Download Image</Button>
                    </div>
                )}
            </Box>
        </Paper> 
        )}

      <Box sx={{pt: 5,margin: 'auto'}}>
        <Typography component={'h4'} variant='h6' color={"primary"}>
            Effortlessly Convert Your Images with Our Online PNG to WEBP Converter
        </Typography>
        <Typography 
            variant='caption' 
            sx={{
                py: '2px',
            }}
        >
            Transform your images in just a few clicks with our user-friendly PNG to WEBP converter. Whether you need to convert a single photo or a batch of images, our tool streamlines the process, making it hassle-free and efficient. With over a hundred customization options, you can tailor your images to meet your exact needs. Say goodbye to tedious manual conversions and embrace seamless image transformation with our online converter.
        </Typography>
        <Typography variant='h6' pt={1}>
            How to Convert {inputFormat.toUpperCase()} to {outputFormat.toUpperCase()}
        </Typography>
        <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <TaskAltRoundedIcon />
                </ListItemIcon>
                <ListItemText 
                    primary={`Upload Your ${inputFormat.toUpperCase()} File`} 
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
                    primary="Select files from your computer, Google Drive, Dropbox, URL, or simply drag and drop them onto the page"
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
                    primary={`Click to "Convert to ${outputFormat.toUpperCase()}" Button`} 
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
                    primary={`Press the button to initiate the conversion to ${outputFormat.toUpperCase()} format.`} 
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
                        primary={`Download Your ${outputFormat.toUpperCase()} File`} 
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
                    primary={`Once the conversion is complete, download your new ${outputFormat.toUpperCase()} file immediately.
                    Experience the ease and efficiency of our online ${inputFormat.toUpperCase()} to ${outputFormat.toUpperCase()} converter today!`}
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

export default ImageConverter;

