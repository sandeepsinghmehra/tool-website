import { AspectRatio as AspectRatioIcon, Countertops, FormatBold as FormatBoldIcon, FormatItalic as FormatItalicIcon, PhotoLibrary, SpeakerNotes as SpeakerNotesIcon } from "@mui/icons-material";
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
          <Grid item textAlign={'center'} gap={1}>
            <Link href={"image-resizer"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2, mx: {xs: 2, md: 1}}}>
                <CardContent>
                  <Box sx={{color: '#fff'}}>
                    <AspectRatioIcon fontSize="large" />
                  </Box>
                  <Typography>Image</Typography>
                  <Typography>Resizer</Typography>
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
                    <FormatBoldIcon fontSize="large" />
                  </Box>
                  <Typography>Text</Typography>
                  <Typography>To</Typography>
                  <Typography>Bold Text</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item  textAlign={'center'} gap={1}>
            <Link href={"/text-to-italic"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2, mx: {xs: 2, md: 1}}}>
                <CardContent>
                  <Box sx={{color: '#fff'}}>
                    <FormatItalicIcon fontSize="large" />
                  </Box>
                  <Typography>Text</Typography>
                  <Typography>To</Typography>
                  <Typography>Italic Text</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item  textAlign={'center'} gap={1}>
            <Link href={"/text-to-audio"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2, mx: {xs: 2, md: 1}}}>
                <CardContent>
                  <Box sx={{color: '#fff'}}>
                    <SpeakerNotesIcon fontSize="large" />
                  </Box>
                  <Typography>Text</Typography>
                  <Typography>To</Typography>
                  <Typography>Speech</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
      <Box component={"section"}>
        <Typography bgcolor={"orange"} variant="h4" align="center">Other Tools</Typography>
        <Grid container>
          <Grid item textAlign={'center'} gap={1}>
            <Link href={"word-counter"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2, mx: {xs: 2, md: 1}}}>
                <CardContent>
                  <Box sx={{color: '#fff'}}>
                    <Countertops fontSize="large" />
                  </Box>
                  <Typography>Word</Typography>
                  <Typography>Counter</Typography>
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