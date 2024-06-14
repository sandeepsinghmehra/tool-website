import { PhotoLibrary } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Home | Convert Master",
  // description: "",
};

function Home() {
  
  return (
    <main>
      <Box component={"section"}>
        <Typography bgcolor={"orange"} variant="h4" align="center">Image Tools</Typography>
        <Grid container>
          <Grid item textAlign={'center'}>
            <Link href={"image-convert/jpeg-to-webp"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2}}>
                <CardContent>
                  <Box sx={{color: '#fff'}}>
                    <PhotoLibrary fontSize="large" />
                  </Box>
                  <Typography>Image</Typography>
                  <Typography>Format</Typography>
                  <Typography>Converter</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
      
    </main>
  );
}
export default Home;