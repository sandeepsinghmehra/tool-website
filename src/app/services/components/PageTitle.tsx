"use client"

import { Typography, useTheme } from "@mui/material";


export default function PageTitle() {
  const theme:any = useTheme();
  return (
    <>
      <Typography variant="h3" color={theme.palette.mode === 'light' ? "#000": "#fff"} sx={{fontSize: "700"}} align='center' mb={5}>Our Services</Typography>
    </>
  );
}
