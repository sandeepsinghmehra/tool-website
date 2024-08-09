"use client"

import React, { useState } from 'react';
import { Box, TextField, Typography, Slider, styled, IconButton, Grid, useTheme, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { HexColorPicker } from 'react-colorful';
import { toast } from 'react-toastify';
import { CheckCircle as CheckCircleIcon, FileCopy as FileCopyIcon, TaskAltRounded as TaskAltRoundedIcon} from '@mui/icons-material';


const ColorBox = styled('div')(({ color }) => ({
    backgroundColor: color,
    width: '30px',
    height: '30px',
    borderRadius: '50px',
    border: "1px dotted red",
}));
const HexColorPickerContainer = styled('div')({
    width: '90%',
    margin: 'auto',
    '.react-colorful': {
        width: 'auto',
        height: 300,
    },
});

const AdvancedColorPicker: React.FC = () => {
    const theme:any = useTheme();
    const [color, setColor] = useState<string>('#aabbcc');
    const [opacity, setOpacity] = useState<number>(50);
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleOpacityChange = (event: Event, newValue: number | number[]) => {
        setOpacity(newValue as number);
    };

    const rgbaColor = () => {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        return `rgba(${r},${g},${b},${opacity / 100})`;
    };
    const handleCopyToClipboard = async (value) => {
        try {
            // await navigator.clipboard.writeText(password);
            navigator.clipboard.writeText(value).then(() => {
                setIsCopied(true);
                toast.success('Text Copied!', {
                    // position: toast.'POSITION'.'TOP_CENTER',
                    position: "top-center",
                    autoClose: 2000, // Close the toast after 2 seconds
                });
                setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
            });
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Color Picker
            </Typography>
            <Grid container sx={{p: 5}}>
                <Grid item xs={12} sm={6} md={6} >
                    <HexColorPickerContainer>
                        <HexColorPicker color={color} onChange={setColor} />
                    </HexColorPickerContainer>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box  
                        sx={{ 
                            width: {xs: '90%', md: '80%',},
                            border: "1px solid yellow", 
                            p: 2, 
                            m: 'auto',  
                            borderRadius: 2,
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            mt: {xs: 1,},
                        }}
                    >
                        <Typography variant="h6" textAlign={"center"}>Generated RGBA Color</Typography>
                            <Box 
                                sx={{
                                    width: {xs: '100%', md:'80%'},
                                    display: 'flex',
                                    flexDirection: 'row',
                                    margin: 'auto',
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                }}
                            >
                                <Box sx={{width: '20%'}}>
                                    <Typography gutterBottom>Opacity</Typography>
                                </Box>
                                <Box sx={{width: '80%'}}>
                                    <Slider
                                        value={opacity}
                                        onChange={handleOpacityChange}
                                        aria-labelledby="opacity-slider"
                                        valueLabelDisplay="auto"
                                        step={1}
                                        min={0}
                                        max={100}
                                        sx={{
                                            color: "violet",
                                            width: '90%',
                                        }}
                                    />
                                </Box>
                            </Box>
                        <Box 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'row', 
                                alignItems: 'center', 
                                justifyContent: 'space-between', 
                                bgcolor: '#2E236C', 
                                width: {xs: '100%', md:'80%'},
                                borderRadius: 5,
                            }}

                        >
                            <Typography variant="body1" sx={{ wordBreak: 'break-all', px: 2, color: "#fff", fontSize: {xs: 10} }}>{rgbaColor()}</Typography>
                            <Box>
                                <IconButton onClick={()=>handleCopyToClipboard(rgbaColor())}>
                                    <FileCopyIcon sx={{ color: isCopied ? 'green' : 'blue' }} />
                                </IconButton>
                                <IconButton>
                                    <ColorBox color={rgbaColor()} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                    <Box  
                        sx={{ 
                            width: {xs: '90%', md: '80%',},
                            border: "1px solid yellow", 
                            p: 2, 
                            m: 'auto',  
                            borderRadius: 2,
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            mt: 1,
                        }}
                    >
                        <Typography variant="h6" textAlign={"center"}>Generated HEX Color</Typography>
                        <Box 
                            sx={{ 
                                width: {xs: '100%', md: '80%',}, 
                                m: 'auto', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center', 
                                justifyContent: 'center',  
                            }}
                        >
                            <Box 
                                sx={{
                                    display: 'flex', 
                                    flexDirection: 'row', 
                                    alignItems: 'center', 
                                    justifyContent: 'space-between', 
                                    bgcolor: '#2E236C', 
                                    width: {xs: '100%'},
                                    borderRadius: 5,
                                }}

                            >
                                <Typography variant="body1" sx={{ wordBreak: 'break-all', px: 2, color: "#fff", fontSize: {xs: 10} }}>{color}</Typography>
                                <Box>
                                    <IconButton onClick={()=>handleCopyToClipboard(color)}>
                                        <FileCopyIcon sx={{ color: isCopied ? 'green' : 'blue' }} />
                                    </IconButton>
                                    <IconButton>
                                        <ColorBox color={color} />
                                    </IconButton>
                                </Box>
                            </Box>
                            
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
                    What is a Color Picker Tool?
                </Typography>
                <Typography  
                    sx={{
                        py: '2px', textAlign:"justify", letterSpacing: '1px',
                    }}
                >
                   A Color Picker Tool is an online or software-based application that enables users to choose, identify, and use colors in digital projects. It typically provides a user-friendly interface with features like a color wheel, sliders for adjusting hue, saturation, and brightness, and fields for inputting color values in different formats such as HEX and RGB.
                </Typography>
                <Typography variant='h6' pt={1}>
                    Benefits of Using a Color Picker
                </Typography>
                <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={`Precision in Color Selection`} 
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
                            primary="Allows users to choose exact colors with high precision, ensuring consistency across various design elements."
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
                            primary="Provides accurate color codes (HEX, RGB) which can be directly used in digital applications."
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
                            primary={`Time Efficiency`}
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
                            primary={'Speeds up the process of finding and applying colors.'} 
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
                                primary={`User-Friendly Interface`}
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
                            primary={`Intuitive design makes it easy for both professionals and beginners to use.`}
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
                                primary={`Consistency Across Projects`}
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
                            primary={`Ensures uniform color usage, which is crucial for branding and cohesive design.`}
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
                                primary={`Enhanced Creativity`}
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
                            primary={`Offers a wide range of color options and combinations, fostering creativity and experimentation in design.`}
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
                    How to Use the Color Picker Tool
                </Typography>
                <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Open the Color Picker Tool`} 
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
                            primary="Navigate to the Color Picker Tool on your preferred website or software. If using an online tool like convert-master.online, simply open the webpage and locate the Color Picker feature."
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
                            primary={`Select or Input a Color`}
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
                            primary={'Use the color wheel or palette to select a color. Click and drag the cursor to choose the desired hue and shade.'} 
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
                            primary={'Input the specific color code (e.g., HEX, RGB) directly into the provided fields for precise color selection.'} 
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
                                primary={`Adjust Color Properties`}
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
                            primary={`Utilize the sliders or input fields to fine-tune the color properties such as hue, saturation, and brightness. This allows you to achieve the exact color you need for your project.`}
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
                                primary={`Copy and Apply the Color Code`}
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
                            primary={`Once satisfied with the selected color, copy the color code (HEX, RGB, etc.) provided by the tool. Use this code in your design software, CSS file, or any other application to apply the chosen color to your project.`}
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

export default AdvancedColorPicker;
