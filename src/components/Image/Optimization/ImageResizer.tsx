"use client"
import { Box, Button, Divider, FormControl, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Paper, Select, TextField, Typography, styled, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { TaskAltRounded as TaskAltRoundedIcon } from '@mui/icons-material';
import Image from 'next/image';


const InputMui = styled('input')(({ theme }) => ({
    display: 'none',
}));
const InputContainer =  styled('div')(({ theme }) => ({
    width: 'auto',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
        width: 200
    }
}));
const ImageResizer = () => {
    const theme:any = useTheme();
    const [targetSize, setTargetSize] = useState<any>(200); // target size in KB
    const [format, setFormat] = useState<string>('jpeg');

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [convertedFile, setConvertedFile] = useState(null);
    const [error, setError] = useState('');
 

    const sizes = [10, 20, 30, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    const imageFormatList = ['jpeg', 'webp', 'png'];

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(event.target.files?.[0] || null);
    };

    const handleTargetSizeDropdownChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConvertedFile(null);
        setTargetSize(event.target.value as string);
    };
    const handleFormatDropdownChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConvertedFile(null);
        setFormat(event.target.value as string);
    };
    const getConvertedFile = async () => {
        try {
            const compressedFile = await handleOptimize(selectedFile);
            setConvertedFile(compressedFile);
        } catch (error) {
            setError('Error compressing the image');
            console.error(error);
        }
    }

    const handleOptimize = (selectedFile) => {
        if (!selectedFile) return;
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.readAsDataURL(selectedFile);
          
            reader.onload = () => {
                const img = new window.Image();
                img.src = reader.result as string;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;
    
                    // Resize the canvas to the desired dimensions
                    const width = img.width;
                    const height = img.height;
                    canvas.width = width;
                    canvas.height = height;
    
                    // Draw the image onto the canvas with the specified dimensions
                    ctx.drawImage(img, 0, 0, width, height);
                    let quality = 0.9;

                    const adjustQualityAndConvertToBlob = () => {
                        return new Promise((resolve) => {
                            canvas.toBlob((blob) => {
                                if (blob && blob.size / 1024 > targetSize && quality > 0.1) {
                                    quality -= 0.05;
                                    adjustQualityAndConvertToBlob().then(resolve);
                                } else {
                                    resolve(blob);
                                }
                            }, `image/${format}`, quality);
                        });
                    };
            
                    adjustQualityAndConvertToBlob().then((blob:any) => {
                        if (blob) {
                            resolve(new File([blob], selectedFile.name.replace(/\.\w+$/,`.${format}`), { type: `image/${format}` }));
                        } else {
                            reject(new Error('Failed to create blob'));
                        }
                    });
             
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

    // console.log("convertedFile: ", convertedFile)

    return (
        <Box component={"section"}>
            <Typography
                variant='h1' 
                component={'h1'} 
                align='center' 
                pt={2}
                sx={{fontSize: '2.5rem'}}
            > 
                Free Online Image Resizer to Kilobytes (KB)
            </Typography>
            
            <Typography
                variant='body2'  
                align='center'
            >
                Welcome to our simple and free online image resizer tool. Easily resize your images to specific kilobyte sizes for web and mobile use.
            </Typography>
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, marginY: {xs: 2, md: 2}}}>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        width: 300, 
                        margin: '15px auto', 
                        padding: 2, 
                        border: '1px solid #ccc', 
                        borderRadius: 2,
                        position: 'relative' 
                    }}
                >
                    <Typography 
                        variant="subtitle1" 
                        sx={{ 
                            position: 'absolute', 
                            top: -17, 
                            left: 16, 
                            backgroundColor: theme.palette.mode === 'light' ? '#FFF': "#000",
                            color: theme.palette.mode === 'light' ? '#000': "#FFF",
                            padding: '0 8px' 
                        }}
                    >
                    Select Photo
                    </Typography>
        
                    <InputContainer>
                        <Grid 
                            sx={{
                                padding: `5px`,
                                margin: {xs: 'auto', md: 0},
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: theme.palette.mode === 'light' ? '1px solid rgba(164, 164, 164, 0.13)': "1px solid #FFF",
                                borderRadius: '35px',
                                boxShadow: theme.palette.mode === 'light' ? `rgb(241, 241, 241) 1px 13px 12px 0px` : '#000',
                                width: {xs: '90%', md: '100%'}
                            }}>
                        
                                <InputMui
                                    accept="image/jpeg, image/png, image/webp"
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
                                            fontSize: {xs: '.5rem', md: '.7rem'}, 
                                            width: {xs: "200px", sm: "200px"}
                                        }}>
                                    {(selectedFile && selectedFile?.name) || "Choose Image File"}
                                    </Button>
                                </label>

                        </Grid>
                    </InputContainer>
                    <Typography>
                    Valid Formats: .jpeg, .png, .webp
                    </Typography>
                </Box>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        width: 300, 
                        margin: '15px auto', 
                        padding: 2, 
                        border: '1px solid #ccc', 
                        borderRadius: 2,
                        position: 'relative' 
                    }}
                >
                    <Typography 
                        variant="subtitle1" 
                        sx={{ 
                            position: 'absolute', 
                            top: -17, 
                            left: 16, 
                            backgroundColor: theme.palette.mode === 'light' ? '#FFF': "#000",
                            color: theme.palette.mode === 'light' ? '#000': "#FFF", 
                            padding: '0 8px' 
                        }}
                    >
                        Resize Options 
                    </Typography>
                    <Grid container justifyContent={'center'} mt={1}>
                        <Grid item xs={6} >
                            <Typography 
                                variant='caption' 
                                sx={{
                                    padding: `2px 5px`,
                                    my: '5px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                            Target Size (KB):
                            </Typography>
                        </Grid>
                        <Grid item xs={4} >
                            <FormControl sx={{ minWidth: 50 }} size="small">
                            <Select
                                value={targetSize}
                                onChange={handleTargetSizeDropdownChange}
                                sx={{
                                    minWidth: 50,  // Adjust the width of the select
                                    fontSize: '8px',  // Adjust the font size of the selected value
                                    paddingX: '3px',
                                }}
                            >
                                {sizes.map((size, i) => (
                                <MenuItem 
                                    key={i}
                                    value={size} 
                                    sx={{
                                        minWidth: 50,  // Adjust the width of the select
                                        fontSize: '8px',  // Adjust the font size of the selected value
                                    }}
                                >
                                    {size}
                                </MenuItem>))}
                            </Select>
                            </FormControl>
                        </Grid>
                    </Grid>    
                    <Grid container justifyContent={'center'} mt={1}>
                    <Grid item xs={6} >
                        <Typography 
                        variant='caption' 
                        sx={{
                            padding: `2px 5px`,
                            my: '5px',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        >
                        Output Format:
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl sx={{ minWidth: 50 }} size="small">
                        <Select
                            value={format}
                            onChange={handleFormatDropdownChange}
                            sx={{
                                minWidth: 50,  // Adjust the width of the select
                                fontSize: '8px',  // Adjust the font size of the selected value
                                padding: 0,
                            }}
                        >
                            {imageFormatList.map((imageFormat, i) => (
                                <MenuItem 
                                    value={imageFormat} 
                                    key={i}
                                    sx={{
                                        minWidth: 50,  // Adjust the width of the select
                                        fontSize: '8px',  // Adjust the font size of the selected value
                                    }}
                                >
                                {imageFormat.toUpperCase()}
                                </MenuItem>
                            ))}
                        </Select>
                        </FormControl>
                    </Grid>
                    </Grid>

                </Box>
            </Box>
            <Grid container justifyContent={'center'} my={1}>
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
                    Resized Image
                </Button>
            </Grid>
            {selectedFile && (
                <Paper 
                    elevation={3} 
                    sx={{
                        width: { xs: '90%', md:'80%'}, 
                        m: '10px auto', 
                        height: {xs: '100%', md:'20rem'}, 
                        display: 'flex',
                        flexDirection: {xs: 'column', md: 'row'}, justifyContent: {md:'space-evenly'}}}>
                    <Box  
                        sx={{
                            padding: {xs: 2, md: 0}
                        }}  
                    >
                        {selectedFile && (<Typography variant='subtitle2' pt={1} component={'div'}>Original Image</Typography>)}
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
                        {convertedFile && (<Typography variant='subtitle2' pt={1} component={'div'}>Converted Image</Typography>)}
                        
                        {convertedFile && ( <div>
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
                                <Button variant="contained" color="primary" sx={{mt: 1, bgcolor: "blue" }} onClick={handleDownload}>Download Image</Button>
                            </div>  )}
                    </Box>
                </Paper> 
            )}
           
            <Box 
                sx={{
                pt: 5,
                width: {xs: '90%', md: '100%'},
                margin: 'auto'
                }}
            >
                <Typography component={'h4'} variant='h6' color={"primary"}>
                    What is an Image Resizer to Kilobytes Converter?
                </Typography>
                <Typography 
                variant='caption' 
                sx={{
                    py: '2px',
                }}
                >
                    An image resizer to kilobytes converter allows you to reduce the file size of your images to a specific number of kilobytes. This is particularly useful for meeting size limits on websites, reducing load times, and saving storage space.
                </Typography>

                <Typography variant='h6' pt={1}>
                    Benefits of Using Our Image Resizer
                </Typography> 
                <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={`Free and Easy to Use:`} 
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
                            primary="No registration required, and you can resize as many images as you need."
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
                            primary={`High-Quality Resizing:`}
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
                            primary={'Maintain the quality of your images while reducing file size.'} 
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
                                primary={`Fast Processing:`}
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
                            primary={`Quickly resize images and download them instantly.`}
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
                                primary={`Secure:`}
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
                            primary={`Your images are not stored on our servers and are deleted immediately after processing.`}
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
                    How to Use the Image Resizer Tool?
                </Typography>
                <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={`Upload Your Image:`} 
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
                            primary="Click on the 'Choose Image' button and select the image you want to resize."
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
                            primary={`Set Target Size:`}
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
                            primary={'Select the desired size in kilobytes (KB).'} 
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
                                primary={`Resize Image:`}
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
                            primary={`Click the "Resize Image" button to compress the image to your specified size.`}
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
                                primary={`Download Resized Image:`}
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
                            primary={`Once resized, download the image by clicking the download link.`}
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

export default ImageResizer;
