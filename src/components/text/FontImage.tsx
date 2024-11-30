"use client"
import React, { useRef, useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Grid, IconButton, Switch, useTheme, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { SaveAlt as SaveAltIcon, TaskAltRounded as TaskAltRoundedIcon   } from '@mui/icons-material'; 
import html2canvas from "html2canvas";

const logoDesigns = [
    {
        name: "Modern Tech",
        text: "Techify",
        fontFamily: "Roboto",
        fontSize: 48,
        fontColor: "#00aaff",
        backgroundColor: "#000000",
        textShadow: "4px 4px 8px rgba(0,170,255,0.7)"
    },
    {
        name: "Luxury Brand",
        text: "Luxe",
        fontFamily: "Georgia",
        fontSize: 48,
        fontColor: "#ffd700",
        backgroundColor: "#1e1e1e",
        textShadow: "3px 3px 6px rgba(255,215,0,0.5)"
    },
    {
        name: "Creative Studio",
        text: "Cre8",
        fontFamily: "Helvetica",
        fontSize: 48,
        fontColor: "#ff6347",
        backgroundColor: "#ffffff",
        textShadow: "3px 3px 8px rgba(255,99,71,0.6)"
    },
    {
        name: "E-commerce",
        text: "Shopify",
        fontFamily: "Arial",
        fontSize: 48,
        fontColor: "#ff4500",
        backgroundColor: "#f0f0f0",
        textShadow: "2px 2px 5px rgba(255,69,0,0.5)"
    },
    {
        name: "Minimalist",
        text: "Clear",
        fontFamily: "Verdana",
        fontSize: 48,
        fontColor: "#333333",
        backgroundColor: "#ffffff",
        textShadow: "1px 1px 3px rgba(0,0,0,0.5)"
    },
    {
        name: "Tech Innovations",
        text: "InnovaTech",
        fontFamily: "Fira Sans",
        fontSize: 48,
        fontColor: "#00ff00",
        backgroundColor: "#333333",
        textShadow: "5px 5px 15px rgba(0,255,0,0.8)"
    },
    {
        name: "Gaming Hub",
        text: "GameOn",
        fontFamily: "Press Start 2P",
        fontSize: 48,
        fontColor: "#ff0000",
        backgroundColor: "#000000",
        textShadow: "4px 4px 10px rgba(255,0,0,0.7)"
    },
    {
        name: "Organic Products",
        text: "PureHarvest",
        fontFamily: "Lora",
        fontSize: 48,
        fontColor: "#32cd32",
        backgroundColor: "#f0e68c",
        textShadow: "3px 3px 6px rgba(50,205,50,0.5)"
    },
    {
        name: "Fashion Forward",
        text: "Vogue",
        fontFamily: "Times New Roman",
        fontSize: 48,
        fontColor: "#000000",
        backgroundColor: "#ffffff",
        textShadow: "3px 3px 6px rgba(0,0,0,0.4)"
    },
    {
        name: "Dynamic Sports",
        text: "ActiveFit",
        fontFamily: "Impact",
        fontSize: 48,
        fontColor: "#ff6347",
        backgroundColor: "#000000",
        textShadow: "4px 4px 10px rgba(255,99,71,0.6)"
    },
    {
        name: "Health & Wellness",
        text: "WellnessPro",
        fontFamily: "Roboto Slab",
        fontSize: 48,
        fontColor: "#00bfff",
        backgroundColor: "#ffffff",
        textShadow: "2px 2px 5px rgba(0,191,255,0.5)"
    },
    {
        name: "Music World",
        text: "Melody",
        fontFamily: "Arial Black",
        fontSize: 48,
        fontColor: "#ffd700",
        backgroundColor: "#000000",
        textShadow: "5px 5px 15px rgba(255,215,0,0.6)"
    },
    {
        name: "Digital Agency",
        text: "DigiPro",
        fontFamily: "Segoe UI",
        fontSize: 48,
        fontColor: "#0000ff",
        backgroundColor: "#f0f0f0",
        textShadow: "3px 3px 8px rgba(0,0,255,0.5)"
    },
    {
        name: "Art Studio",
        text: "Canvas",
        fontFamily: "Courier New",
        fontSize: 48,
        fontColor: "#8a2be2",
        backgroundColor: "#ffffff",
        textShadow: "3px 3px 6px rgba(138,43,226,0.7)"
    },
    {
        name: "Foodie Hub",
        text: "TastyBites",
        fontFamily: "Brush Script MT",
        fontSize: 48,
        fontColor: "#ff6347",
        backgroundColor: "#fffaf0",
        textShadow: "4px 4px 10px rgba(255,99,71,0.5)"
    },
    {
        name: "Fitness Brand",
        text: "FitLife",
        fontFamily: "Arial",
        fontSize: 48,
        fontColor: "#32cd32",
        backgroundColor: "#000000",
        textShadow: "5px 5px 12px rgba(50,205,50,0.6)"
    },
    {
        name: "Entertainment",
        text: "Entertainia",
        fontFamily: "Comic Sans MS",
        fontSize: 48,
        fontColor: "#ff1493",
        backgroundColor: "#000000",
        textShadow: "4px 4px 12px rgba(255,20,147,0.6)"
    },
    {
        name: "Consultancy",
        text: "Consultify",
        fontFamily: "Verdana",
        fontSize: 48,
        fontColor: "#483d8b",
        backgroundColor: "#ffffff",
        textShadow: "3px 3px 8px rgba(72,61,139,0.5)"
    },
    {
        name: "Social Network",
        text: "Socialize",
        fontFamily: "Tisa",
        fontSize: 48,
        fontColor: "#000000",
        backgroundColor: "#ff0",
        textShadow: "3px 3px 10px rgba(0,0,0,0.6)"
    },
    {
        name: "Adventure Travel",
        text: "Explorer",
        fontFamily: "Times New Roman",
        fontSize: 48,
        fontColor: "#ff6347",
        backgroundColor: "#ffffff",
        textShadow: "4px 4px 10px rgba(255,99,71,0.5)"
    },
    {
        name: "Pet Care",
        text: "FurryFriends",
        fontFamily: "Georgia",
        fontSize: 48,
        fontColor: "#8b4513",
        backgroundColor: "#f5f5f5",
        textShadow: "3px 3px 6px rgba(139,69,19,0.6)"
    },
    {
        name: "Event Planning",
        text: "Eventify",
        fontFamily: "Lucida Console",
        fontSize: 48,
        fontColor: "#ff1493",
        backgroundColor: "#f0f8ff",
        textShadow: "5px 5px 15px rgba(255,20,147,0.7)"
    },
    {
        name: "Real Estate",
        text: "HomeBase",
        fontFamily: "Tahoma",
        fontSize: 48,
        fontColor: "#228b22",
        backgroundColor: "#ffffff",
        textShadow: "3px 3px 8px rgba(34,139,34,0.5)"
    },
    {
        name: "Startup Incubator",
        text: "LaunchPad",
        fontFamily: "Arial",
        fontSize: 48,
        fontColor: "#000000",
        backgroundColor: "#f8f8f8",
        textShadow: "4px 4px 12px rgba(0,0,0,0.5)"
    },
    {
        name: "Beauty Salon",
        text: "Glamour",
        fontFamily: "Comic Sans MS",
        fontSize: 48,
        fontColor: "#ff1493",
        backgroundColor: "#f0f8ff",
        textShadow: "5px 5px 10px rgba(255,20,147,0.6)"
    },
    {
        name: "Online Education",
        text: "EduHub",
        fontFamily: "Times New Roman",
        fontSize: 48,
        fontColor: "#32cd32",
        backgroundColor: "#ffffff",
        textShadow: "3px 3px 6px rgba(50,205,50,0.5)"
    },
    {
        name: "Green Earth",
        text: "EcoLife",
        fontFamily: "Arial Black",
        fontSize: 48,
        fontColor: "#228b22",
        backgroundColor: "#f0f8ff",
        textShadow: "3px 3px 8px rgba(34,139,34,0.7)"
    },
    {
        name: "Photography Studio",
        text: "LensCraft",
        fontFamily: "Garamond",
        fontSize: 48,
        fontColor: "#000000",
        backgroundColor: "#eeeeee",
        textShadow: "3px 3px 6px rgba(0,0,0,0.5)"
    },
    {
        name: "Travel Agency",
        text: "GoExplore",
        fontFamily: "Helvetica",
        fontSize: 48,
        fontColor: "#ff6347",
        backgroundColor: "#ffffff",
        textShadow: "4px 4px 8px rgba(255,99,71,0.5)"
    },
    {
        name: "Yoga Studio",
        text: "ZenFlow",
        fontFamily: "Segoe UI",
        fontSize: 48,
        fontColor: "#32cd32",
        backgroundColor: "#ffffff",
        textShadow: "3px 3px 8px rgba(50,205,50,0.4)"
    },
    {
        name: "Mobile App",
        text: "Appify",
        fontFamily: "Arial",
        fontSize: 48,
        fontColor: "#0000ff",
        backgroundColor: "#f0f8ff",
        textShadow: "3px 3px 7px rgba(0,0,255,0.5)"
    },
    {
        name: "Automotive",
        text: "AutoDrive",
        fontFamily: "Impact",
        fontSize: 48,
        fontColor: "#ff4500",
        backgroundColor: "#333333",
        textShadow: "4px 4px 10px rgba(255,69,0,0.6)"
    },
    {
        name: "Fitness App",
        text: "FitApp",
        fontFamily: "Roboto",
        fontSize: 48,
        fontColor: "#32cd32",
        backgroundColor: "#000000",
        textShadow: "5px 5px 10px rgba(50,205,50,0.6)"
    },
    {
        name: "Cosmetics",
        text: "Beautify",
        fontFamily: "Times New Roman",
        fontSize: 48,
        fontColor: "#ff69b4",
        backgroundColor: "#ffffff",
        textShadow: "4px 4px 8px rgba(255,105,180,0.5)"
    },
    {
        name: "Digital Marketing",
        text: "MarketPro",
        fontFamily: "Arial",
        fontSize: 48,
        fontColor: "#0000ff",
        backgroundColor: "#f0f0f0",
        textShadow: "3px 3px 10px rgba(0,0,255,0.5)"
    },
    {
        name: "Baking Supplies",
        text: "BakeMaster",
        fontFamily: "Comic Sans MS",
        fontSize: 48,
        fontColor: "#ff4500",
        backgroundColor: "#fffacd",
        textShadow: "4px 4px 8px rgba(255,69,0,0.5)"
    },
    {
        name: "Handmade Crafts",
        text: "Craftsy",
        fontFamily: "Lobster",
        fontSize: 48,
        fontColor: "#8a2be2",
        backgroundColor: "#ffffff",
        textShadow: "4px 4px 8px rgba(138,43,226,0.7)"
    },
    {
        name: "Pet Grooming",
        text: "Pawfect",
        fontFamily: "Georgia",
        fontSize: 48,
        fontColor: "#8b4513",
        backgroundColor: "#f0f0f0",
        textShadow: "3px 3px 7px rgba(139,69,19,0.5)"
    },
    {
        name: "Interior Design",
        text: "Decorify",
        fontFamily: "Verdana",
        fontSize: 48,
        fontColor: "#000000",
        backgroundColor: "#ffffff",
        textShadow: "4px 4px 8px rgba(0,0,0,0.5)"
    },
    {
        name: "Tech Startup",
        text: "CodeCraft",
        fontFamily: "Courier New",
        fontSize: 48,
        fontColor: "#32cd32",
        backgroundColor: "#000000",
        textShadow: "5px 5px 12px rgba(50,205,50,0.6)"
    },
    {
        name: "Fashion Line",
        text: "StyleUp",
        fontFamily: "Helvetica",
        fontSize: 48,
        fontColor: "#ff69b4",
        backgroundColor: "#ffffff",
        textShadow: "4px 4px 10px rgba(255,105,180,0.5)"
    },
    {
        name: "Music Production",
        text: "SoundWave",
        fontFamily: "Arial Black",
        fontSize: 48,
        fontColor: "#ffd700",
        backgroundColor: "#000000",
        textShadow: "5px 5px 10px rgba(255,215,0,0.7)"
    },
    {
        name: "Artisan Bakery",
        text: "BreadCraft",
        fontFamily: "Brush Script MT",
        fontSize: 48,
        fontColor: "#ff6347",
        backgroundColor: "#fffaf0",
        textShadow: "4px 4px 8px rgba(255,99,71,0.5)"
    },
    {
        name: "Vegan Foods",
        text: "GreenBite",
        fontFamily: "Lora",
        fontSize: 48,
        fontColor: "#32cd32",
        backgroundColor: "#f0e68c",
        textShadow: "3px 3px 7px rgba(50,205,50,0.4)"
    },
    {
        name: "Craft Beverages",
        text: "BrewCraft",
        fontFamily: "Georgia",
        fontSize: 48,
        fontColor: "#8b4513",
        backgroundColor: "#f5f5f5",
        textShadow: "3px 3px 8px rgba(139,69,19,0.6)"
    },
    {
        name: "Luxury Watches",
        text: "TimeLuxe",
        fontFamily: "Times New Roman",
        fontSize: 48,
        fontColor: "#ffd700",
        backgroundColor: "#1e1e1e",
        textShadow: "4px 4px 10px rgba(255,215,0,0.6)"
    },
    {
        name: "Fitness Equipment",
        text: "PowerFit",
        fontFamily: "Arial",
        fontSize: 48,
        fontColor: "#32cd32",
        backgroundColor: "#000000",
        textShadow: "5px 5px 12px rgba(50,205,50,0.7)"
    },
    {
        name: "Virtual Reality",
        text: "VR World",
        fontFamily: "Fira Sans",
        fontSize: 48,
        fontColor: "#00ff00",
        backgroundColor: "#333333",
        textShadow: "5px 5px 15px rgba(0,255,0,0.7)"
    },
    {
        name: "Startup Accelerator",
        text: "BoostHub",
        fontFamily: "Helvetica",
        fontSize: 48,
        fontColor: "#000000",
        backgroundColor: "#f0f8ff",
        textShadow: "4px 4px 12px rgba(0,0,0,0.5)"
    },
    {
        name: "Organic Skincare",
        text: "PureGlow",
        fontFamily: "Times New Roman",
        fontSize: 48,
        fontColor: "#32cd32",
        backgroundColor: "#ffffff",
        textShadow: "3px 3px 8px rgba(50,205,50,0.5)"
    }
];
  

const FontImageConverter = () => {
    const theme:any = useTheme();
    const [text, setText] = useState("Your Cool Text");
    const [fontSize, setFontSize] = useState(48);
    const [fontColor, setFontColor] = useState(theme.palette.mode === 'light' ? "#000000": "#fff" );
    const [backgroundColor, setBackgroundColor] = useState(theme.palette.mode === 'light' ? "transparent" : "#39ff14");
    const [textShadow, setTextShadow] = useState(theme.palette.mode === 'light' ? "2px 2px 4px rgba(0,0,0,0.5)":  "3px 3px 8px rgba(50,205,50,0.5)");
    const [fontFamily, setFontFamily] = useState("Arial");
    const textRef = useRef(null);

    // Download as Image using html2canvas
    const downloadImage = () => {
        const element = textRef.current;

        html2canvas(element, {
            backgroundColor: backgroundColor === "transparent" ? null : backgroundColor,
            useCORS: true,
        }).then((canvas) => {
            const image = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = image;
            link.download = "dynamic-text.png";
            link.click();
        });
    };
  
    return (
        <Box component={"section"}>
            <Typography variant="h1" component={'h1'} align='center' pt={2} sx={{fontSize: '2.5rem'}}>
                Cool Text Graphics Generator
            </Typography>
        
            <Grid container columns={{ xs: 6, md: 12 }} sx={{px: {xs: 2, md: 0}}} spacing={2}>
                <Grid item xs={6} md={6}>
                    <div>
                        <TextField
                            label="Input Text"    // Label for the textarea
                            variant="outlined"     // You can use "outlined", "filled", or "standard"
                            multiline             // Makes this a multiline input (textarea)
                            rows={2}              // Number of rows (height of textarea)
                            fullWidth 
                            value={text}            // Makes the textarea take the full width of its container
                            onChange={(e) => setText(e.target.value)}
                            sx={{mt:3}}
                        />
                        
                        <Grid container columns={{ xs: 6, md: 12 }} sx={{px: {xs: 2, md: 0, }, mt: 1, mb: 1}} spacing={2}>
                            <Grid item xs={6} md={6}>
                                <TextField
                                    label="Font Size"        
                                    variant="outlined"
                                    type='number'
                                    value={fontSize}
                                    onChange={(e) => {if(Number(e.target.value) <= 80) {setFontSize(Number(e.target.value))}}}
                                />
                            </Grid>

                            <Grid item xs={6} md={6}>
                                <TextField
                                    label="Horizontal Shadow"        
                                    variant="outlined"
                                    type='number'
                                    value={textShadow.split(' ')[0].replace('px', '')}
                                    onChange={(e) =>
                                        setTextShadow(`${e.target.value}px ${textShadow.split(' ')[1]} ${textShadow.split(' ')[2]} ${textShadow.split(' ')[3]}`)
                                    }
                                />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextField
                                    label="Vertical Shadow"        
                                    variant="outlined"
                                    type='number'
                                    value={textShadow.split(' ')[1].replace('px', '')}
                                    onChange={(e) =>
                                        setTextShadow(`${textShadow.split(' ')[0]} ${e.target.value}px ${textShadow.split(' ')[2]} ${textShadow.split(' ')[3]}`)
                                    }
                                />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextField
                                    label="Blur Radius"        
                                    variant="outlined"
                                    type='number'
                                    value={textShadow.split(' ')[2].replace('px', '')}
                                    onChange={(e) =>
                                        setTextShadow(`${textShadow.split(' ')[0]} ${textShadow.split(' ')[1]} ${e.target.value}px ${textShadow.split(' ')[3]}`)
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Grid container columns={{ xs: 6, md: 12 }} sx={{px: {xs: 2, md: 0, }, mt: 1, mb: 1}} spacing={2}>
                            <Grid item xs={6} md={4}>
                                <TextField
                                    label="Shadow Color"        
                                    variant="outlined"
                                    type='color'
                                    value={textShadow.split(' ')[3].replace('rgba(', '').replace(')', '').split(',')[0]}
                                    onChange={(e) =>
                                        setTextShadow(`${textShadow.split(' ')[0]} ${textShadow.split(' ')[1]} ${textShadow.split(' ')[2]} ${e.target.value}`)
                                    }
                                    sx={{width: 150}}
                                />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <TextField
                                    label="Text Color"        
                                    variant="outlined"
                                    type='color'
                                    value={fontColor}
                                    onChange={(e) => setFontColor(e.target.value)}
                                    sx={{width: 150}}
                                />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <TextField
                                    label="Background Color"        
                                    variant="outlined"
                                    type='color'
                                    value={backgroundColor}
                                    onChange={(e) => setBackgroundColor(e.target.value)}
                                    sx={{width: 150}}
                                />
                            </Grid>
                            
                        </Grid>
                    </div>

                </Grid>
                <Grid item xs={6} md={6}>
                    <div style={{ padding: "5px" }}>
                        {/* Render Dynamic Text with line breaks */}
                        <div
                            ref={textRef}
                            style={{
                                marginTop: "20px",
                                padding: "20px",
                                backgroundColor: backgroundColor,
                                fontSize: `${fontSize}px`,
                                color: fontColor,
                                fontFamily: fontFamily,
                                textShadow: textShadow,
                                whiteSpace: "pre-wrap", // Ensure line breaks are respected
                                wordWrap: "break-word", // Handle long words in the text
                                display: "inline-block",
                            }}
                        >
                            {text}
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={downloadImage}
                            sx={{ marginY: 2,  bgcolor: "blue" }}
                        >
                            Download as Image
                            <IconButton sx={{ marginRight: 2 }}>
                                <SaveAltIcon sx={{color: 'green'}} /> 
                            </IconButton>
                        </Button>
                        
                    </div>
                </Grid>
                
                
            </Grid>
            <Grid container spacing={2}>
                        {logoDesigns.map((design, idx) => (
                            <Grid item xs={12} md={4} key={idx}>
                                <div
                                    style={{
                                        position: "relative", // To allow absolute positioning of the name
                                        marginTop: "20px",
                                        padding: "20px",
                                        cursor: 'pointer',
                                        backgroundColor: design.backgroundColor, // Use design's background color
                                        fontFamily: design.fontFamily,
                                        fontSize: `${design.fontSize}px`,
                                        color: design.fontColor,
                                        textShadow: design.textShadow,
                                        height: "200px", // Fixed height for the design box
                                        display: "flex", // Use flexbox for centering the text
                                        justifyContent: "center", // Center horizontally
                                        alignItems: "center", // Center vertically
                                        border: "1px solid #ccc", // Optional: Adds a border for visibility
                                    }}
                                    onClick={() => {
                                        setText(text);
                                        setFontFamily(design.fontFamily);
                                        setFontSize(design.fontSize);
                                        setFontColor(design.fontColor);
                                        setBackgroundColor(design.backgroundColor);
                                        setTextShadow(design.textShadow);
                                    }}
                                >
                                    {/* Display the design name at the top-left corner */}
                                    <div
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        left: "10px",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        color: "#555", // Optional: Change the color of the design name
                                    }}
                                    >
                                    {design.name}
                                    </div>

                                    {/* Display the design text in the center */}
                                    {text}
                                </div>
                            </Grid>
                        ))}
                    </Grid>
            <Box 
                sx={{
                pt: 5,
                width: {xs: '90%', md: '100%'},
                margin: 'auto'
                }}
            >
                <Typography component={'h4'} variant='h6' color={theme.palette.mode === 'light' ? "primary": "#fff"}>
                What is Cool Text Font Generator ?
                </Typography>
                <Typography 
                    variant='caption' 
                    sx={{
                        py: '2px',
                    }}
                >
                A Cool Text Font Generator is an online tool that allows users to generate custom and stylish fonts that can be used in social media posts, websites, digital designs, or any text-based projects. These tools often provide a wide variety of fonts, including fancy, decorative, artistic, or unusual text styles. These fonts are typically based on Unicode characters, which makes them compatible with most online platforms, such as Facebook, Instagram, Twitter, and others.
                </Typography>
                <Typography variant='h6' pt={1}>
                    Features of a Cool Text Font Generator
                </Typography>
                <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Variety of Fonts`} 
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
                            primary="The generator usually offers many font styles, including cursive, bold, italic, bubble text, spooky, glitch, and many other themed designs."
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
                            primary={`Copy and Paste`}
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
                            primary={'After generating a custom text in a cool font, you can copy it and paste it into your social media profiles, or websites.'} 
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
                                primary={`No Software Installation`}
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
                            primary={`These tools are browser-based and require no downloads or installations.`}
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
                                primary={`Unicode Characters`}
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
                            primary={`They use Unicode symbols to create fancy text, ensuring compatibility across platforms.`}
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
                                primary={`Customization`}
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
                            primary={`Our generators allow further customization, such as adjusting size, color, or adding effects like shadows or gradients.`}
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
                    How to Use This Tool
                </Typography>
                <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Enter Your Text`} 
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
                            primary="Look for the text box where you can enter the text you want to style."
                            primaryTypographyProps={{
                                fontSize: 10,
                                letterSpacing: 0.2,
                            }} 
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText 
                            inset 
                            primary="Type or paste your text"
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
                            primary={`Select Font Style`}
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
                            primary={'The tool will automatically generate a list of cool font styles for the text you entered.'} 
                            primaryTypographyProps={{
                                fontSize: 10,
                                letterSpacing: 0.2,
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText 
                            inset 
                            primary={"Browse through the various font options. You'll often see styles like bold, italic, cursive, bubble text, glitchy text, and others."} 
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
                                primary={`Customize the Text (Optional)`}
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
                            primary={`Customize as needed based on the tool's options.`}
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
                                primary={`Click Download Button`}
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
                            primary={`Click download button and download your customize Font Image.`}
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

export default FontImageConverter;


// Apply selected theme
// const applyTheme = (themeKey) => {
//     const selectedTheme = themes[themeKey];
//     setFontColor(selectedTheme.fontColor);
//     setBackgroundColor(selectedTheme.backgroundColor);
//     setTextShadow(selectedTheme.textShadow);
//     setFontFamily(selectedTheme.fontFamily);
// };
// const themes = [
//     { name: "Classic", fontFamily: "Times New Roman", fontSize: 48, fontColor: "#000000", backgroundColor: "#ffffff", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" },
//     { name: "Neon", fontFamily: "Courier New", fontSize: 64, fontColor: "#39ff14", backgroundColor: "#000000", textShadow: "5px 5px 10px rgba(57,255,20,1)" },
//     { name: "Elegant", fontFamily: "Georgia", fontSize: 56, fontColor: "#ffffff", backgroundColor: "#000000", textShadow: "3px 3px 6px rgba(255,255,255,0.5)" },
//     { name: "Retro", fontFamily: "Comic Sans MS", fontSize: 50, fontColor: "#ff6347", backgroundColor: "#f0e68c", textShadow: "4px 4px 10px rgba(255,99,71,0.7)" },
//     { name: "Gothic", fontFamily: "Blackletter", fontSize: 60, fontColor: "#ff4500", backgroundColor: "#1e1e1e", textShadow: "2px 2px 6px rgba(0,0,0,0.7)" },
//     { name: "Modern", fontFamily: "Helvetica", fontSize: 55, fontColor: "#2f4f4f", backgroundColor: "#ffffff", textShadow: "2px 2px 4px rgba(47,79,79,0.5)" },
//     { name: "Minimalist", fontFamily: "Arial", fontSize: 48, fontColor: "#ffffff", backgroundColor: "#333333", textShadow: "1px 1px 3px rgba(0,0,0,0.8)" },
//     { name: "Pop", fontFamily: "Arial Black", fontSize: 65, fontColor: "#ff1493", backgroundColor: "#ffff00", textShadow: "6px 6px 15px rgba(255,20,147,0.7)" },
//     { name: "Cyberpunk", fontFamily: "Orbitron", fontSize: 70, fontColor: "#00bfff", backgroundColor: "#222222", textShadow: "5px 5px 12px rgba(0,191,255,0.6)" },
//     { name: "Classic Serif", fontFamily: "Merriweather", fontSize: 50, fontColor: "#2f4f4f", backgroundColor: "#f5f5f5", textShadow: "3px 3px 6px rgba(47,79,79,0.4)" },
//     { name: "Nature", fontFamily: "Tisa", fontSize: 45, fontColor: "#556b2f", backgroundColor: "#98fb98", textShadow: "2px 2px 4px rgba(0,0,0,0.6)" },
//     { name: "Futuristic", fontFamily: "Roboto", fontSize: 60, fontColor: "#00ffff", backgroundColor: "#000000", textShadow: "3px 3px 8px rgba(0,255,255,0.5)" },
//     { name: "Classic Bold", fontFamily: "Georgia", fontSize: 60, fontColor: "#000000", backgroundColor: "#ffffff", textShadow: "4px 4px 8px rgba(0,0,0,0.3)" },
//     { name: "Sci-Fi", fontFamily: "Bungee", fontSize: 80, fontColor: "#ff007f", backgroundColor: "#111111", textShadow: "4px 4px 10px rgba(255,0,127,0.6)" },
//     { name: "Vibrant", fontFamily: "Arial", fontSize: 48, fontColor: "#ff0000", backgroundColor: "#ffff00", textShadow: "3px 3px 6px rgba(255,0,255,0.7)" },
//     { name: "Glamour", fontFamily: "Times New Roman", fontSize: 58, fontColor: "#f0f8ff", backgroundColor: "#ff1493", textShadow: "2px 2px 6px rgba(255,182,193,0.8)" },
//     { name: "Hipster", fontFamily: "Lobster", fontSize: 50, fontColor: "#8b4513", backgroundColor: "#ffefd5", textShadow: "3px 3px 6px rgba(139,69,19,0.6)" },
//     { name: "Warmth", fontFamily: "Open Sans", fontSize: 55, fontColor: "#ff6347", backgroundColor: "#fffaf0", textShadow: "2px 2px 5px rgba(255,99,71,0.5)" },
//     { name: "Spring", fontFamily: "Dancing Script", fontSize: 60, fontColor: "#98fb98", backgroundColor: "#f0e68c", textShadow: "2px 2px 5px rgba(152,251,152,0.6)" },
//     { name: "Disco", fontFamily: "Impact", fontSize: 70, fontColor: "#ffd700", backgroundColor: "#000000", textShadow: "3px 3px 12px rgba(255,215,0,0.7)" },
//     { name: "Luxe", fontFamily: "Raleway", fontSize: 50, fontColor: "#ffffff", backgroundColor: "#000000", textShadow: "3px 3px 6px rgba(255,215,0,0.8)" },
//     { name: "Casual", fontFamily: "Verdana", fontSize: 48, fontColor: "#483d8b", backgroundColor: "#dcdcdc", textShadow: "2px 2px 5px rgba(72,61,139,0.6)" },
//     { name: "Summer", fontFamily: "Pacifico", fontSize: 55, fontColor: "#ff6347", backgroundColor: "#f0e68c", textShadow: "4px 4px 10px rgba(255,99,71,0.6)" },
//     { name: "Bold", fontFamily: "Arial Black", fontSize: 65, fontColor: "#000000", backgroundColor: "#ffffff", textShadow: "5px 5px 15px rgba(0,0,0,0.5)" },
//     { name: "Floral", fontFamily: "Poppins", fontSize: 50, fontColor: "#ff6347", backgroundColor: "#ffe4e1", textShadow: "3px 3px 6px rgba(255,99,71,0.4)" },
//     { name: "Tech", fontFamily: "Courier New", fontSize: 60, fontColor: "#00ffff", backgroundColor: "#2f4f4f", textShadow: "4px 4px 10px rgba(0,255,255,0.5)" },
//     { name: "Warm Glow", fontFamily: "Tisa", fontSize: 55, fontColor: "#ff4500", backgroundColor: "#ffdab9", textShadow: "2px 2px 5px rgba(255,69,0,0.6)" },
//     { name: "Vivid", fontFamily: "Fira Sans", fontSize: 65, fontColor: "#0000ff", backgroundColor: "#fffaf0", textShadow: "3px 3px 8px rgba(0,0,255,0.6)" },
//     { name: "Fresh", fontFamily: "Lora", fontSize: 50, fontColor: "#ff1493", backgroundColor: "#f0e68c", textShadow: "3px 3px 5px rgba(255,20,147,0.6)" },
//     { name: "Urban", fontFamily: "Roboto", fontSize: 55, fontColor: "#2f4f4f", backgroundColor: "#d3d3d3", textShadow: "2px 2px 6px rgba(0,0,0,0.5)" },
//     { name: "Autumn", fontFamily: "Georgia", fontSize: 58, fontColor: "#8b4513", backgroundColor: "#fffaf0", textShadow: "3px 3px 6px rgba(139,69,19,0.5)" },
//     { name: "Soul", fontFamily: "Roboto Condensed", fontSize: 52, fontColor: "#483d8b", backgroundColor: "#f0f8ff", textShadow: "4px 4px 10px rgba(72,61,139,0.7)" },
//     { name: "Royal", fontFamily: "Garamond", fontSize: 60, fontColor: "#ffffff", backgroundColor: "#000080", textShadow: "3px 3px 7px rgba(0,0,128,0.6)" },
//     { name: "Shiny", fontFamily: "Lobster", fontSize: 65, fontColor: "#ff4500", backgroundColor: "#ffff00", textShadow: "5px 5px 10px rgba(255,69,0,0.7)" }
//   ];