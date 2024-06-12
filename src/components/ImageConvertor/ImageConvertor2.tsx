"use client"
import { Box, Button, Grid, Paper, TextField, Typography, makeStyles, styled } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import TabButton from '../Buttons/TabButton';

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
const ImageConverter2 = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [convertedFile, setConvertedFile] = useState(null);
    const [inputFormat, setInputFormat] = useState('jpeg'); // Default input format
    const [outputFormat, setOutputFormat] = useState('webp'); // Default output format
    
    const [error, setError] = useState('');

    const imageTypes = [
        'jpeg', 'webp', 'jpg', 'png'
    ];

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

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
    // console.log("selectedFile: ", selectedFile, selectedFile?.name);
    const handleImageFormatChange = (inputFormat, outputFormat) => {
        setInputFormat(inputFormat);
        setOutputFormat(outputFormat);
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
        <Box 
            mt={2} 
            sx={{
                display: 'flex', 
                flexWrap: "wrap", 
                gap: 2, 
                alignItems: 'center', 
                justifyContent: 'center'
            }} 
        >
            <TabButton 
                isActive={inputFormat === "jpeg" && outputFormat === "webp"}
                handleImageFormatChange={()=>handleImageFormatChange("jpeg", "webp")} 
                btnName={"JPG to Webp"}
            />

            <TabButton 
                isActive={inputFormat === "webp" && outputFormat === "png"}
                handleImageFormatChange={()=>handleImageFormatChange("webp", "png")} 
                btnName={"Webp to PNG"}
            />
            <TabButton 
                isActive={inputFormat === "webp" && outputFormat === "jpg"}
                handleImageFormatChange={()=>handleImageFormatChange("webp", "jpg")} 
                btnName={"Webp to JPG"}
            />
            <TabButton 
                isActive={inputFormat === "jpg" && outputFormat === "png"}
                handleImageFormatChange={()=>handleImageFormatChange("jpg", "png")} 
                btnName={"JPG to PNG"}
            />

            <TabButton 
                isActive={inputFormat === "jpg" && outputFormat === "webp"}
                handleImageFormatChange={()=>handleImageFormatChange("jpg", "webp")} 
                btnName={"JJPG to Webp"}
            />
        
            <TabButton 
                isActive={inputFormat === "png" && outputFormat === "webp"}
                handleImageFormatChange={()=>handleImageFormatChange("png", "webp")} 
                btnName={"PNG to Webp"}
            />
            <TabButton 
                isActive={inputFormat === "png" && outputFormat === "jpg"}
                handleImageFormatChange={()=>handleImageFormatChange("png", "jpg")} 
                btnName={"PNG to JPG"}
            />

            <TabButton 
                isActive={inputFormat === "jpeg" && outputFormat === "png"}
                handleImageFormatChange={()=>handleImageFormatChange("jpeg", "png")} 
                btnName={"JPG to PNG"}
            />
        </Box>
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
                textAlign: 'center'
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
                    border: '1px solid rgba(164, 164, 164, 0.13)',
                    borderRadius: '35px',
                    boxShadow: `rgb(241, 241, 241) 1px 13px 12px 0px`,
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
                                fontSize: {xs: '.7rem', md: '.9rem'} 
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
                            fontSize: {xs: '.7rem', md: '.9rem'} 
                        }}>
                        Convert to {outputFormat}
                    </Button>
                </Grid>
            </Grid>
        </InputContainer> 
        <Paper 
            elevation={3} 
            sx={{
                width: { xs: '90%', md:'60%'}, 
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
                        <Button variant="contained" color="primary" sx={{mt: 1 }} onClick={handleDownload}>Download Image</Button>
                    </div>
                )}
            </Box>
        </Paper> 

      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}

      <div>
            Transform Your Images Effortlessly with Our Online PNG to WEBP Converter
            With just a few clicks, our online PNG to WEBP converter tool makes it easy to change your image formats. Whether you are looking to convert a single photo or a batch of images, our tool is designed to streamline the process and make it hassle-free. Choose from over a hundred customization options to get your images just the way you want them. Say goodbye to tedious manual conversions and embrace the power of effortless image transformation with our online PNG to WEBP converter.

            How to convert PNG to WEBP ?
            Step 1. Upload png-file
            Select files from Computer, Google Drive, Dropbox, URL or by dragging it on the page.
            Step 2. Click <q>to WEBP</q>
            Click on the button to convert WEBP.
            Step 3. Download your WEBP
            Let the file convert and you can download your WEBP file right afterward        
      </div>
      <Box>
      Effortlessly Convert Your Images with Our Online PNG to WEBP Converter
        Transform your images in just a few clicks with our user-friendly PNG to WEBP converter. Whether you need to convert a single photo or a batch of images, our tool streamlines the process, making it hassle-free and efficient. With over a hundred customization options, you can tailor your images to meet your exact needs. Say goodbye to tedious manual conversions and embrace seamless image transformation with our online converter.

        How to Convert PNG to WEBP
        Upload Your PNG File

        Select files from your computer, Google Drive, Dropbox, URL, or simply drag and drop them onto the page.
        Click <q>to WEBP</q>

        Press the button to initiate the conversion to WEBP format.
        Download Your WEBP File

        Once the conversion is complete, download your new WEBP file immediately.
        Experience the ease and efficiency of our online PNG to WEBP converter today!
      </Box>
    </Box>
  );
};

export default ImageConverter2;

