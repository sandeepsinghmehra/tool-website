"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Box, TextField, Typography, Paper, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Slider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { TaskAltRounded as TaskAltRoundedIcon } from '@mui/icons-material';



const TextToAudioConverter = () => {
    const [text, setText] = useState('');
    const [isPaused, setIsPaused] = useState(false);
    const [voice, setVoice] = useState<any>(undefined);
    const [pitch, setPitch] = useState<number>(1);
    const [rate, setRate] = useState<number>(1);
    const [volume, setVolume] = useState(1);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [languageCode, setlanguageCode] = useState<string>('en');

    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const [audio, setAudio] = useState(null);

    const mimeType = "audio/webm";
    // const mimeType = "audio/mpeg";
   
    React.useEffect(() => {
      const synth = window.speechSynthesis;
      setVoices(synth.getVoices());

      const handleVoicesChanged = () => {
        setVoices(synth.getVoices());
      };
  
      synth.onvoiceschanged = handleVoicesChanged;
      
      return () => {
        synth.onvoiceschanged = null;
      };
    }, []);
    
    useEffect(() => {
        if(voices.length) {
            setVoice(voices[0])
        }
    }, [voices.length]);
   
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    };
  
    const handleVoiceChange = (event: React.ChangeEvent<any>) => {
      setVoice(event.target.value as string);
    };
  
    const handlePitchChange = (event: Event, newValue: number | number[]) => {
      setPitch(newValue as number);
    };
  
    const handleRateChange = (event: Event, newValue: number | number[]) => {
      setRate(newValue as number);
    };
  
    const handleConvert = () => {
      if (text) {
        const utterance:any = new SpeechSynthesisUtterance(text);
        utterance.voice = voices.find(v => v.name === voice);
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = volume;
        window.speechSynthesis.speak(utterance);
      }
    };
    
    const captureSpeech = async () => {
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = speechSynthesis.getVoices();
      
        // Find the specified voice, or use the default one if not found
        utterance.voice = voices.find(v => v.name === voice) || voices[0];
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = volume;

        if ("MediaRecorder" in window) {
            try {
                const streamData: MediaStream | null = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                // Check if stream is valid before creating MediaRecorder
                if (!streamData) {
                    alert("Please, Give the recording permissions");
                    return;
                }
                //create new Media recorder instance using the stream
                const media = new MediaRecorder(streamData, { type: mimeType } as any);
                //set the MediaRecorder instance to the mediaRecorder ref
                mediaRecorder.current = media;
                //invokes the start method to start the recording process
                mediaRecorder.current.start();
                // Speak the utterance
                speechSynthesis.speak(utterance);

                let localAudioChunks = [];
                mediaRecorder.current.ondataavailable = (event) => {
                    if (typeof event.data === "undefined") return;
                    if (event.data.size === 0) return;
                    localAudioChunks.push(event.data);
                };
        
                utterance.onend = () => {
                    //stops the recording instance
                    mediaRecorder.current.stop();
                    mediaRecorder.current.onstop = () => {
                        //creates a blob file from the audiochunks data
                        const audioBlob = new Blob(localAudioChunks, { type: mimeType });
                        //creates a playable URL from the blob file.
                        const audioUrl = URL.createObjectURL(audioBlob);
                        setAudio(audioUrl);
                    };
                }
                utterance.onerror = event => {
                    console.log(" utterance.onerror ")
                    mediaRecorder.current.stop();
                    mediaRecorder.current.onstop = () => {
                        setAudio('');
                        mediaRecorder.current = null;
                    };
                }
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };
      
    // const handlePause = () => {
    //     const synth = window.speechSynthesis;
    
    //     synth.pause();
    
    //     setIsPaused(true);
    // };
    
    // const handleStop = () => {
    //     const synth = window.speechSynthesis;
    
    //     synth.cancel();
    
    //     setIsPaused(false);
    // };
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
            Text to Audio Converter
            </Typography>
            <TextField
                label="Input Text"
                multiline
                minRows={4}
                maxRows={10}
                value={text}
                onChange={handleTextChange}
                fullWidth
                variant="outlined"
                sx={{ marginBottom: 2 }}
            />
            <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
                <InputLabel id="voice-select-label">{ voice?.name || 'Voice'}</InputLabel>
                    <Select
                        labelId="voice-select-label"
                        id="voice-select"
                        value={voice}
                        onChange={handleVoiceChange}
                        label="Voice"
                        // defaultValue={voices[0]}
                    >
                        {voices.map((voice) => (
                        <MenuItem key={voice.name} value={voice.name}>
                            {voice.name}
                        </MenuItem>
                        ))}
                    </Select>
            </FormControl>
            <Typography gutterBottom>Pitch</Typography>
            <Slider
                value={pitch}
                onChange={handlePitchChange}
                aria-labelledby="pitch-slider"
                step={0.1}
                marks
                min={0.5}
                max={2}
                valueLabelDisplay="auto"
                sx={{ marginBottom: 2, color: 'blue' }}
            />
            <Typography gutterBottom>Rate</Typography>
            <Slider
                value={rate}
                onChange={handleRateChange}
                aria-labelledby="rate-slider"
                step={0.1}
                marks
                min={0.5}
                max={2}
                valueLabelDisplay="auto"
                sx={{ marginBottom: 2, color: 'blue' }}
            />
            
            <Box gap={1}>
                <Box sx={{py: 1, display: 'flex', flexDirection: {xs: 'column', md: 'row'} }} gap={1} >
                    <Button 
                        variant="contained" 
                        onClick={handleConvert} 
                        fullWidth={false}
                        sx={{ bgcolor: "blue" }}
                    >
                        Convert to Audio
                    </Button>
                    
                    <Button 
                        variant="contained" 
                        onClick={captureSpeech} 
                        sx={{display: {xs: 'none', md: 'block' }, bgcolor: "blue"}} 
                        type="button" 
                        fullWidth={false}
                    >
                        Preparing Download
                    </Button>
                
            
      
                {audio ? (
                    <Box sx={{display: {xs: 'none', md: 'block'}}}>
                        <audio src={audio} controls></audio>
                        <Button 
                            variant="outlined" 
                            onClick={captureSpeech} 
                            type="button" 
                            fullWidth={false}
                            sx={{ bgcolor: "blue" }}
                        >
                            <a download href={audio}>
                                Download Recording
                            </a> 
                        </Button>
                    </Box>
                    ) : null
                } 
                </Box>
            </Box>
            {/* <button onClick={handlePause}>Pause</button>
            <button onClick={handleStop}>Stop</button> */}
        <Box 
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
      </Box>
    </Box>
  );
};

export default TextToAudioConverter;
