"use client"
import { Box, Button, Divider, FormControl, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Paper, Select, TextField, Typography, styled, useTheme } from '@mui/material';

import Image from 'next/image';
import { useState } from 'react';
import { TaskAltRounded } from '@mui/icons-material';

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
const CommonOptimize = (props) => {
    const { title, defaultWidth, defaultHeight} = props;
    const theme:any = useTheme();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [convertedFile, setConvertedFile] = useState(null);
    const [width, setWidth] = useState<number | null>(defaultWidth);
    const [height, setHeight] = useState<number | null>(defaultHeight);
    const [quality, setQuality] = useState<number>(80);
    const [format, setFormat] = useState<string>('jpeg');
    const [error, setError] = useState('');
    

    const handleDropdownChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormat(event.target.value as string);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(event.target.files?.[0] || null);
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
            const finalWidth = width || img.width;
            const finalHeight = height || img.height;
            canvas.width = finalWidth;
            canvas.height = finalHeight;

            // Draw the image onto the canvas with the specified dimensions
            ctx.drawImage(img, 0, 0, finalWidth, finalHeight);

            canvas.toBlob((blob) => {
                resolve(new File([blob], selectedFile.name.replace(/\.\w+$/, `.${format}`), { type: `image/${format}` }));
            }, `image/${format}`, quality / 100); // Adjust the quality here
            
            };
            img.onerror = () => {
            reject(new Error('Error loading image'));
            };
        };
        // reader.readAsDataURL(selectedFile);
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
                variant='h4' 
                component={'h4'} 
                align='center' 
                pt={2}
            > 
                {title}
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
                <Grid container justifyContent={'center'}>
                <Grid item xs={6} >
                    <Typography 
                    variant='caption' 
                    component={'caption'} 
                    sx={{
                        padding: `2px 5px`,
                        my: '5px',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                    Width:
                    </Typography>
                </Grid>
                <Grid item xs={3} >
                    <Box sx={{display: 'flex', justifyContent: 'center', margin: '5px auto'}}>
                    <TextField
                        type={'number'}
                        aria-label="Number input"
                        // placeholder="value"
                        value={width || ''}
                        size={'small'}
                        sx={{
                            width: '100px', // Adjust the width as needed
                        }}
                        InputProps={{
                            readOnly: true,
                            style: {
                                fontSize: '8px', // Adjust the font size as needed
                            },
                        }}
                    />
                    
                    </Box>
                </Grid>
                <Grid item xs={3} margin={'5px auto'}>
                    px
                </Grid>
                </Grid>
                <Grid container justifyContent={'center'}>
                <Grid item xs={6} >
                    <Typography 
                    variant='caption' 
                    component={'caption'} 
                    sx={{
                        padding: `2px 5px`,
                        my: '5px',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                    Height:
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{display: 'flex', justifyContent: 'center', margin: '5px auto'}}>
                    <TextField
                        type={'number'}
                        aria-label="Number input"
                        value={height || ''}
                        size={'small'}
                        sx={{
                            width: '100px', // Adjust the width as needed
                        }}
                        InputProps={{
                            readOnly: true,
                            style: {
                                fontSize: '8px', // Adjust the font size as needed
                            },
                        }}
                    />
                    </Box>
                </Grid>
                <Grid item xs={3} margin={'5px auto'}>
                    px
                </Grid>
                </Grid>
                <Grid container justifyContent={'center'}>
                <Grid item xs={6} >
                    <Typography 
                    variant='caption' 
                    component={'caption'} 
                    sx={{
                        padding: `2px 5px`,
                        my: '5px',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                    Quality:
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                    type={'number'}
                    aria-label="Number input"
                    value={quality || ''}
                    onChange={(e) => setQuality(parseInt(e.target.value || null))}
                    size={'small'}
                    sx={{
                        width: '67px', // Adjust the width as needed
                    }}
                    InputProps={{
                        style: {
                        fontSize: '8px', // Adjust the font size as needed
                        },
                    }}
                    />
                    
                </Grid>
                <Grid item xs={3} margin={'5px auto'}></Grid>
                </Grid>
                <Grid container justifyContent={'center'}>
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
                        onChange={handleDropdownChange}
                        sx={{
                        minWidth: 50,  // Adjust the width of the select
                        fontSize: '8px',  // Adjust the font size of the selected value
                        padding: 0,
                        }}
                    >
                        <MenuItem 
                        value={'jpeg'} 
                        sx={{
                            minWidth: 50,  // Adjust the width of the select
                            fontSize: '8px',  // Adjust the font size of the selected value
                        }}
                        >JPEG</MenuItem>
                        <MenuItem 
                        value={'png'}
                        sx={{
                            minWidth: 50,  // Adjust the width of the select
                            fontSize: '8px',  // Adjust the font size of the selected value
                        }}
                        >PNG</MenuItem>
                        <MenuItem 
                        value={'webp'}
                        sx={{
                            minWidth: 50,  // Adjust the width of the select
                            fontSize: '8px',  // Adjust the font size of the selected value
                        }}
                        >WEBP</MenuItem>
                    </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2} margin={'5px auto'}>
                    
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
                Optimize
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
            <Box sx={{pt: 5, margin: 'auto'}}>
                <Typography component={'h4'} variant='h6' color={"primary"}>
                Effortlessly Convert Your Images with Our Online Image Resizer and Optimizer 
                </Typography>
                <Typography 
                    variant='caption' 
                    sx={{
                        py: '2px',
                    }}
                >
                    Transform your images in just a few clicks with our user-friendly Image Resizer. 
                </Typography>
                <Typography variant='h6' pt={1}>
                    How to Optimize Image
                </Typography>
                <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <TaskAltRounded />
                        </ListItemIcon>
                        <ListItemText 
                            primary={`Upload Your valid image File`} 
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
                            primary="Users can upload an image file in JPEG, PNG, or WEBP format."
                            primaryTypographyProps={{
                                fontSize: 12,
                                letterSpacing: 0.2,
                            }} 
                        />
                        </ListItemButton>
                    </ListItem>
                    
                    <Divider variant="inset" component="li" />
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <TaskAltRounded />
                        </ListItemIcon>
                        <ListItemText 
                            primary={`Second, fill all Options`} 
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
                            primary={`Users can set the image quality for compression. Users can convert the image to a different format (JPEG, PNG, WEBP).`} 
                            primaryTypographyProps={{
                                fontSize: 12,
                                letterSpacing: 0.2,
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <TaskAltRounded />
                        </ListItemIcon>
                        <ListItemText 
                            primary={`Click to "Optimize Button" & get image Preview`} 
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
                            primary={`The original and optimized images are displayed.`} 
                            primaryTypographyProps={{
                                fontSize: 12,
                                letterSpacing: 0.2,
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRounded />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Download Your ${format.toUpperCase()} File`} 
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
                            primary={`Once the optimization is complete, download your new ${format.toUpperCase()} file immediately.
                            Users can download the optimized image.`}
                            primaryTypographyProps={{
                                fontSize: 12,
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

export default CommonOptimize;
