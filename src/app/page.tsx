import { FormatBold, PhotoLibrary } from "@mui/icons-material";
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
          <Grid item textAlign={'center'} gap={1}>
            <Link href={"image-convert/jpeg-to-webp"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2, mx: {xs: 2, md: 1}}}>
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
      <Box component={"section"}>
        <Typography bgcolor={"orange"} variant="h4" align="center">Optimizer Tools</Typography>
        <Grid container>
          <Grid item textAlign={'center'} gap={1}>
            <Link href={"image-optimize"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2, mx: {xs: 2, md: 1}}}>
                <CardContent>
                  <Box sx={{color: '#fff'}}>
                    <PhotoLibrary fontSize="large" />
                  </Box>
                  <Typography>Image</Typography>
                  <Typography>Optimizer</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
      <Box component={"section"}>
        <Typography bgcolor={"orange"} variant="h4" align="center">Text Tools</Typography>
        <Grid container>
          <Grid item textAlign={'center'} gap={1}>
            <Link href={"/text-to-bold"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2, mx: {xs: 2, md: 1}}}>
                <CardContent>
                  <Box sx={{color: '#fff'}}>
                    <FormatBold fontSize="large" />
                  </Box>
                  <Typography>Text</Typography>
                  <Typography>To</Typography>
                  <Typography>Bold Text</Typography>
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