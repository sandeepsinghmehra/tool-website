"use client"
import React, { useRef, useState } from 'react';
import { Box, TextField, Typography, Paper, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Slider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { TaskAltRounded as TaskAltRoundedIcon } from '@mui/icons-material';


const TextToAudioConverter2 = () => {

    const [permission, setPermission] = useState(true);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
    const [audio, setAudio] = useState<string | null>(null);
    
    // const mimeType = "audio/webm";
    const mimeType = "audio/mpeg";

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };
    const stopRecording = () => {
        setRecordingStatus("inactive");
        //stops the recording instance
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
          //creates a blob file from the audiochunks data
           const audioBlob = new Blob(audioChunks, { type: mimeType });
          //creates a playable URL from the blob file.
           const audioUrl = URL.createObjectURL(audioBlob);
           setAudio(audioUrl);
           setAudioChunks([]);
        };
      };
      const startRecording = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setRecordingStatus("recording");
                // Check if stream is valid before creating MediaRecorder
                if (!streamData) {
                    console.error("Stream is not available");
                    return;
                }

                //create new Media recorder instance using the stream
                const media = new MediaRecorder(streamData, { type: mimeType } as any);
                // const media = new MediaRecorder(stream);
                //set the MediaRecorder instance to the mediaRecorder ref
                mediaRecorder.current = media;
                //invokes the start method to start the recording process
                mediaRecorder.current.start();
                let localAudioChunks = [];
                mediaRecorder.current.ondataavailable = (event) => {
                if (typeof event.data === "undefined") return;
                if (event.data.size === 0) return;
                    localAudioChunks.push(event.data);
                };
                setAudioChunks(localAudioChunks);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
      };
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
            Text to Audio Converter
            </Typography>

            <Paper elevation={5} >
            {/* {!permission ? (
            <button onClick={getMicrophonePermission} type="button">
                Get Microphone
            </button>
            ) : null} */}
            {permission && recordingStatus === "inactive" ? (
            <Button variant="contained" onClick={startRecording}>
                Start Recording
            </Button>
            ) : null}
            {recordingStatus === "recording" ? (
            <Button variant="contained" onClick={stopRecording} >
                Stop Recording
            </Button>
            ) : null}
            {audio ? (
                <div>
                    <audio src={audio} controls></audio>
                    <a download href={audio} >
                        Download Recording
                    </a>
                </div>
                ) : null
            }
        </Paper>
            
            {/* {audioUrl && (
                <>
                <audio controls src={audioUrl} />
                <Button variant="contained" onClick={handleDownload}>
                    Download Audio
                </Button>
                </>
            )} */}


        {/* <Box 
        sx={{
          pt: 5,
          width: {xs: '90%', md: '100%'},
          margin: 'auto'
        }}
      >
        <Typography component={'h4'} variant='h6' color={"primary"}>
            What is Text-to-Audio?
        </Typography>
        <Typography 
          variant='caption' 
          sx={{
              py: '2px',
          }}
        >
            Text-to-audio (or text-to-speech) technology converts written text into spoken words using computer-generated voices. This technology is widely used for various applications, including audiobooks, accessibility for visually impaired users, language learning, and content creation.
        </Typography>

        <Typography variant='h6' pt={1}>
            How to Use Text-to-Audio?
        </Typography>
            <List sx={{ width: {xs: '100%'}, p: "10px", bgcolor: 'background.paper' }}>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <TaskAltRoundedIcon />
                        </ListItemIcon>
                        <ListItemText 
                            primary={`Enter Text`} 
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
                        primary="Enter or paste the text you want to convert into the text input field."
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
                        primary={`Select Options`}
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
                        primary={'Choose the voice, pitch, and speed settings if available.'} 
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
                            primary={`Convert`}
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
                        primary={`Click the "Convert to Audio" button to transform your text into speech.`}
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
                            primary={`Listen and Download`}
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
                        primary={`Listen to the audio output directly or download it for later use.`}
                        primaryTypographyProps={{
                            fontSize: 10,
                            letterSpacing: 0.2,
                        }}
                    />
                    </ListItemButton>
                </ListItem>
                <Divider variant="inset" component="li" />
            </List> 
      </Box> */}
    </Box>
  );
};

export default TextToAudioConverter2;
