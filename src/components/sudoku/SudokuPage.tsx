"use client";

import { Box, useTheme, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, IconButton, Select, MenuItem, InputLabel } from '@mui/material';
import { Delete, TaskAltRounded as TaskAltRoundedIcon } from '@mui/icons-material';
import { useEffect, useState } from "react";
import sudoku from "sudoku";

export const generateSudoku = (difficulty) => {
    let puzzle = sudoku.makepuzzle();
    let difficultyLevel;

    switch (difficulty) {
        case "easy":
            difficultyLevel = 0.5;
            break;
        case "normal":
            difficultyLevel = 0.65;
            break;
        case "hard":
            difficultyLevel = 0.8;
            break;
        default:
            difficultyLevel = 0.65;
    }

    // Adjust puzzle difficulty
    return puzzle.map((cell) => (Math.random() < difficultyLevel ? cell : null));
};

export const solveSudoku = (puzzle) => sudoku.solvepuzzle(puzzle);

const Sudoku = () => {
    const theme:any = useTheme();
    const [difficulty, setDifficulty] = useState("easy");
    const [puzzle, setPuzzle] = useState([]);
    const [userInput, setUserInput] = useState(Array(81).fill(null));
    const [solvedPuzzle, setSolvedPuzzle] = useState([]);
    const [validationResult, setValidationResult] = useState(Array(81).fill(null));


    const generatePuzzle = () => {
        const newPuzzle = generateSudoku(difficulty);
        setPuzzle(newPuzzle);
        setUserInput(newPuzzle.map((cell) => (cell !== null ? cell + 1 : null)));
        setSolvedPuzzle([]);
    };

    const handleInputChange = (row, col, value) => {
        const index = row * 9 + col;
        const newInput = [...userInput];
        newInput[index] = value ? parseInt(value, 10) : null;
        setUserInput(newInput);
    };

    const solveUserInput = () => {
        const puzzleToSolve = puzzle.map((cell) => (cell !== null ? cell : null));
        const solution = solveSudoku(puzzleToSolve);
    
        // Compare user input to solution
        const result = userInput.map((value, index) => {
            if (value === null) return null; // Not filled
            return value === solution[index] + 1; // Correct or incorrect
        });
    
        setValidationResult(result);
    };
    

    
    const giveSolution = () => {
        const puzzleToSolve = puzzle.map((cell) => (cell !== null ? cell : null)) // Solve generated puzzle
        const solution = solveSudoku(puzzleToSolve);
        setSolvedPuzzle(solution);

    };
    const handleResetPuzzle = () => {
        generatePuzzle();
        setValidationResult([]);
    }

    useEffect(()=>{
        generatePuzzle();
    },[]);
    const types = [
        {
            name: 'Easy',
            value: 'easy',
        },
        {
            name: 'Normal',
            value: 'normal',
        },
        {
            name: 'Hard',
            value: 'hard',
        },
    ]

    return (
        <Box component={"section"}>
            <Typography variant="h1" component={'h1'} align='center' pt={2} sx={{fontSize: '2.5rem'}}>
                Sudoku Puzzle Generator
            </Typography>

            <Box sx={{textAlign: 'center', }} pt={2}>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    {/* <InputLabel htmlFor="difficulty">Choose Difficulty:</InputLabel> */}
                
                    <Select
                        labelId="difficulty"
                        id="select"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        label="Choose Difficulty"
                        sx={{outline: '1px solid red', height: 40, mx: 2}}
                    >
                        {types.map((type) => (
                        <MenuItem key={type.name} value={type.value}>
                            {type.name}
                        </MenuItem>
                        ))}
                    </Select>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={generatePuzzle}
                    sx={{ bgcolor: "blue" }}
                >
                    Generate Puzzle
                </Button>
                
                    <IconButton onClick={handleResetPuzzle}>
                        <Delete sx={{color: 'red'}} /> 
                    </IconButton>
                </Box>
                
                
            </Box>

            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', justifyContent: 'center', py: 3}}>
                {puzzle.length > 0 && (
                    <>
                    <table>
                        <tbody>
                            {Array(9)
                                .fill(null)
                                .map((_, row) => (
                                    <tr key={row}>
                                        {userInput
                                            .slice(row * 9, row * 9 + 9)
                                            .map((cell, col) => {
                                                const isInitialValue = puzzle[row * 9 + col] !== null;
                                                const isCorrect = validationResult[row * 9 + col];

                                                return (
                                                    <td
                                                        key={col}
                                                        style={{
                                                            border: "1px solid black",
                                                            width: "30px",
                                                            height: "30px",
                                                            textAlign: "center",
                                                            background: isInitialValue
                                                                ? "#f0f4c3" // Highlight initial values
                                                                : isCorrect === true
                                                                ? "#c8e6c9" // Correct input (green)
                                                                : isCorrect === false
                                                                ? "#ffcdd2" // Incorrect input (red)
                                                                : "#fff", // Default
                                                            color: isInitialValue ? "blue" : "black",
                                                        }}
                                                    >
                                                        {isInitialValue ? (
                                                            puzzle[row * 9 + col] + 1
                                                        ) : (
                                                            <input
                                                                type="text"
                                                                value={cell || ""}
                                                                onChange={(e) =>
                                                                    handleInputChange(row, col, e.target.value)
                                                                }
                                                                maxLength={1}
                                                                style={{
                                                                    width: "28px",
                                                                    height: "28px",
                                                                    textAlign: "center",
                                                                    border: "none",
                                                                    background: "transparent",
                                                                }}
                                                            />
                                                        )}
                                                    </td>
                                                );
                                            })}
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    </>
                   
                )}
               
                {solvedPuzzle.length > 0 && (
                    <table>
                        <tbody>
                            {Array(9)
                                .fill(null)
                                .map((_, row) => (
                                    <tr key={row}>
                                        {solvedPuzzle
                                            .slice(row * 9, row * 9 + 9)
                                            .map((cell, col) => {
                                                const isInitialValue = puzzle[row * 9 + col] !== null;
                                                return (
                                                    <td
                                                        key={col}
                                                        style={{
                                                            border: "1px solid black",
                                                            width: "30px",
                                                            height: "30px",
                                                            textAlign: "center",
                                                            background: isInitialValue
                                                                ? "#f0f4c3" // Highlight initial values
                                                                : "#e0f7fa", // Highlight solution cells
                                                            color: isInitialValue ? "blue" : "red",
                                                        }}
                                                    >
                                                        {cell !== null ? cell + 1 : ""}
                                                    </td>
                                                );
                                            })}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}

            </Box>

            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center'}}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={solveUserInput}
                    sx={{ margin: 2,  bgcolor: "blue" }}
                >
                    Try
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={giveSolution}
                    sx={{ margin: 2,  bgcolor: "blue" }}
                >
                     Give Solution
                </Button>
            </Box>

            <Box 
                sx={{
                pt: 5,
                width: {xs: '90%', md: '100%'},
                margin: 'auto'
                }}
            >
                <Typography component={'h4'} variant='h6' color={theme.palette.mode === 'light' ? "primary": "#fff"}>
                    What is a Sudoku Puzzle Generator?
                </Typography>
                <Typography 
                    variant='caption' 
                    sx={{
                        py: '2px',
                    }}
                >
                A Sudoku Puzzle Generator is an online tool designed to create Sudoku puzzles with varying levels of difficulty, such as Easy, Normal, and Hard. Sudoku is a popular logic-based number placement game played on a 9x9 grid, divided into smaller 3x3 subgrids. The goal is to fill the grid so that each row, column, and subgrid contains all the digits from 1 to 9 without repetition.
                </Typography>
                <Typography 
                    variant='caption' 
                    sx={{
                        py: '2px',
                    }}
                >
                This tool automates the process of generating unique puzzles, making it perfect for Sudoku enthusiasts of all skill levels. You can customize the difficulty, get puzzles instantly, and even solve them with built-in functionality.
                </Typography>
                <Typography variant='h6' pt={1}>
                    Benefits of Using a Sudoku Puzzle Generator
                </Typography>
                <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskAltRoundedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`Quick Puzzle Creation`} 
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
                            primary="Generate fresh puzzles instantly without needing a Sudoku book or app."
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
                            primary={`Difficulty Options`}
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
                            primary={'Choose from Easy, Normal, or Hard levels to match your expertise or challenge yourself.'} 
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
                                primary={`Boosts Cognitive Skills`}
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
                            primary={`Solving Sudoku puzzles enhances logical thinking, concentration, and problem-solving abilities.`}
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
                                primary={`Customizable Interaction`}
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
                            primary={`Allows you to input your solutions and solve puzzles manually or use the system's solver for assistance.`}
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
                                primary={`Convenient Learning`}
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
                            primary={`Perfect for beginners to practice and improve their Sudoku-solving skills.`}
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
                                primary={`Generate a Puzzle`} 
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
                            primary="Select your desired difficulty level (Easy, Normal, or Hard) from the dropdown menu."
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
                            primary="Click the 'Generate Puzzle' button to create a new Sudoku grid."
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
                            primary={`Solve Manually`}
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
                            primary={'Fill in the blank cells by clicking on them and typing your answers'} 
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
                            primary={"Use logical reasoning to ensure numbers don't repeat in rows, columns, or subgrids."} 
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
                                primary={`Get Assistance`}
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
                            primary={`Click "Give Solution" to automatically fill the grid with a valid solution based on the system's algorithm.`}
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
                            sx={{fontSize: 5}} 
                            inset
                            primary={`Use the "Solve" button to validate your inputs and get the solved grid if you've partially filled it.`}
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
                                primary={`Explore and Enjoy`}
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
                            primary={`Practice solving Sudoku puzzles, or challenge yourself to complete Hard-level grids without hints.`}
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

export default Sudoku;
