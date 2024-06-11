"use client"

import { Paper, Typography, styled, useTheme } from "@mui/material";
import Heading from "./Heading";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? "#000" : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    display: "flex", 
    flexDirection: 'column',
    alignItems: 'center', 
    color: theme.palette.text.secondary,
    border: 'none',
    boxShadow: "none",
}));

export default function ItemCard(props) {
  const theme:any = useTheme();
  return (
    <>
      <Item 
        sx={{ 
            height: {
                xs: '100%', 
                md: '20rem' 
            }, 
            p:3 
        }}>
            <Heading title={props.title} />
            {
                props.list.map((item:any, index) =>(
                <Typography 
                    variant="subtitle2" 
                    color="text.secondary" 
                    margin={2}
                    key={index}
                >{item}</Typography>))
            }
        </Item>
    </>
  );
}
