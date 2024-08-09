"use client"
import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, Checkbox, FormControlLabel, Typography, IconButton, useTheme, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { FileCopy as FileCopyIcon } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { TaskAltRounded as TaskAltRoundedIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';

const PasswordGenerator: React.FC = () => {
    const theme:any = useTheme();
    const [length, setLength] = useState<number>(12);
    const [includeLowerCase, setIncludeLowerCase] = useState<boolean>(true);
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [beginWith, setBeginWith] = useState<string>('');
    const [addWord, setAddWord] = useState<string>('');
    const [noSimilar, setNoSimilar] = useState<boolean>(false);
    const [noDuplicate, setNoDuplicate] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');

    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const similarChars = 'iIl1oO0'; // Similar characters to exclude

    const generatePassword = () => {
        let allChars = "";
        if(includeLowerCase) allChars += lowerCaseChars;
        if (includeUppercase) allChars += upperCaseChars;
        if (includeNumbers) allChars += numberChars;
        if (includeSymbols) allChars += symbolChars;

        if (noSimilar) {
            allChars = allChars.split('').filter(char => !similarChars.includes(char)).join('');
          }
      
          let generatedPassword = beginWith;
          const targetLength = length - beginWith.length - addWord.length;
      
          while (generatedPassword.length < targetLength) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            const char = allChars[randomIndex];
            if (noDuplicate && generatedPassword.includes(char)) continue;
            generatedPassword += char;
          }
      
          generatedPassword += addWord;

        setPassword(generatedPassword);
        setIsCopied(false);
    };

    useEffect(()=> {
        generatePassword();
    }, []);

    const handleCopyToClipboard = async () => {
        try {
            // await navigator.clipboard.writeText(password);
            navigator.clipboard.writeText(password).then(() => {
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
        <Box component={"section"}>
            <Typography component={"h1"} variant="h1" align='center' pt={2} sx={{fontSize: {xs: '2rem', md: '2.5rem'}}}>
                Password Generator
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 1}}>
                <TableContainer component={Paper} sx={{ width:  { xs: '100%', md: '80%'} }}>
                    <Table sx={{ minWidth: {xs: 450, md: 650} }} aria-label="simple table">
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    Password Length
                                </TableCell>
                                <TableCell align="right">
                                    <TextField
                                        label="Password Length"
                                        type="number"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        value={length}
                                        onChange={(e) => setLength(parseInt(e.target.value, 10))}
                                        sx={{ 
                                            maxWidth: 150, 
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
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    Include Lowercase Letters (a-z)
                                </TableCell>
                                <TableCell align="right">
                                    <FormControlLabel
                                        control={<Checkbox color={'info'} checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} />}
                                        label=""
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    Include Uppercase Letters (A-Z)
                                </TableCell>
                                <TableCell align="right">
                                    <FormControlLabel
                                        control={<Checkbox color={'info'} checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />}
                                        label=""
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    Include Numbers (0-9)
                                </TableCell>
                                <TableCell align="right">
                                    <FormControlLabel
                                        control={<Checkbox color={'info'} checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />}
                                        label=""
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    Include Symbols
                                </TableCell>
                                <TableCell align="right">
                                    <FormControlLabel
                                        control={<Checkbox color={'info'} checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />}
                                        label=""
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    No Duplicate Characters
                                </TableCell>
                                <TableCell align="right">
                                    <FormControlLabel
                                        control={<Checkbox checked={noDuplicate} onChange={(e) => setNoDuplicate(e.target.checked)} />}
                                        label=""
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    No Similar Characters
                                </TableCell>
                                <TableCell align="right">
                                    <FormControlLabel
                                        control={<Checkbox checked={noSimilar} onChange={(e) => setNoSimilar(e.target.checked)} />}
                                        label=""
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    Begin With
                                </TableCell>
                                <TableCell align="right">
                                    <TextField
                                        label="Begin With"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        value={beginWith}
                                        onChange={(e) => setBeginWith(e.target.value)}
                                        sx={{ 
                                            maxWidth: 150, 
                                            color: theme.palette.mode === 'light' ? "#000": "#fff",
                                            '& label.Mui-focused': {
                                                color: theme.palette.mode === 'light' ? '#000' : '#fff',
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: { color: theme.palette.mode === 'light' ? '#000' : '#fff' },
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    Add Word
                                </TableCell>
                                <TableCell align="right">
                                    <TextField
                                        label="Add Word"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        value={addWord}
                                        onChange={(e) => setAddWord(e.target.value)}
                                        sx={{ 
                                            maxWidth: 150, 
                                            color: theme.palette.mode === 'light' ? "#000": "#fff",
                                            '& label.Mui-focused': {
                                                color: theme.palette.mode === 'light' ? '#000' : '#fff',
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: { color: theme.palette.mode === 'light' ? '#000' : '#fff' },
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                            
                        </TableBody>
                    </Table>
                    </TableContainer>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={generatePassword} 
                    sx={{ 
                        borderRadius: '35px', 
                        fontSize: {xs: '.7rem', md: '.9rem'},
                        bgcolor: "blue",
                        mt: 2,
                        mb: 2   
                    }}
                >
                    Generate Password
                </Button>
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
                }}
            >
                <Typography variant="h6" textAlign={"center"}>Generated Password</Typography>
                <Box 
                    sx={{
                        display: 'flex', 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        justifyContent: 'space-between', 
                        bgcolor: '#2E236C', 
                        width: {xs: '90%', md:'80%'},
                        borderRadius: 5,
                    }}

                >
                    <Typography variant="body1" sx={{ wordBreak: 'break-all', px: 2, color: "#fff" }}>{password}</Typography>
                    <IconButton onClick={handleCopyToClipboard}>
                        <FileCopyIcon sx={{ color: isCopied ? 'green' : 'blue' }} />
                    </IconButton>
                </Box>
            </Box>

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
                    What is a Password Generator Tool?
                </Typography>
                <Typography  
                    sx={{
                        py: '2px', textAlign:"justify", letterSpacing: '1px',
                    }}
                >
                    Creating strong, unique passwords is crucial for protecting your online accounts and sensitive information. Our Strong Password Generator tool makes it easy to create complex, secure passwords that are difficult to crack, ensuring your data remains safe.
                </Typography>
                <Typography variant='h6' pt={1}>
                    Benefits of Using a Password Generator
                </Typography>
                <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Enhanced Security`} 
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
                            primary="Generate complex passwords with a mix of characters, making them hard to guess or crack."
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
                            primary={`Customizable Options`}
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
                            primary={'Choose your password length and the types of characters to include, such as uppercase letters, numbers, and symbols.'} 
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
                                primary={`Avoid Common Password Pitfalls`}
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
                            primary={`Ensure your password doesn't contain common words or patterns.`}
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
                                primary={`Time-Saving`}
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
                            primary={`Quickly generate strong passwords without the hassle of coming up with one yourself.`}
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
                                primary={`Convenience`}
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
                            primary={`Easy-to-use interface with a copy-to-clipboard feature for quick use.`}
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
                    How to Use the Password Generator Tool
                </Typography>
                <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Specify Password Length`} 
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
                            primary="Enter the desired length of your password."
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
                            primary={`Choose Character Types`}
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
                            primary={'Select the character types you want to include (uppercase letters, numbers, symbols).'} 
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
                                primary={`Optional Settings`}
                                primaryTypographyProps={{
                                    fontSize: 18,
                                    letterSpacing: 0.3,
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    
                    <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CheckCircleIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    primary={`Add Word`}
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
                                primary={`Include a specific word in your password.`}
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
                                    <CheckCircleIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    primary={`Begin With`}
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
                                primary={`Specify a starting character or word.`}
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
                                    <CheckCircleIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    primary={`No Similar Characters`}
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
                                primary={`Exclude easily confused characters.`}
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
                                    <CheckCircleIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    primary={`No Duplicate Characters`}
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
                                primary={`Ensure characters are not repeated.`}
                                primaryTypographyProps={{
                                    fontSize: 14,
                                    letterSpacing: 0.2,
                                }}
                            />
                            </ListItemButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                    <Divider variant="inset" component="li" />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Generate Password`}
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
                            primary={`Click the "Generate Password" button.`}
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
                                primary={`Copy Password`}
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
                            primary={`Use the copy button to save the generated password for use.`}
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

export default PasswordGenerator;
