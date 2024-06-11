"use client"

import { Typography, useTheme } from "@mui/material";


export default function Heading(props) {
  const theme:any = useTheme();
  return (
    <>
      <Typography variant="h4" color={theme.palette.mode === 'light' ? "#000": "#fff"} sx={{fontSize: "700"}}>{props.title}</Typography>
    </>
  );
}
