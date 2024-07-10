import HeroSection from "@/components/Hero/Home/Hero";
import { AspectRatio as AspectRatioIcon, Countertops, Facebook, FormatBold as FormatBoldIcon, FormatItalic as FormatItalicIcon, Instagram, LinkedIn, PhotoLibrary, SpeakerNotes as SpeakerNotesIcon, Transcribe, Twitter, WhatsApp } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Home | Convert Master",
};

function Home() {
  
  return (
    <main>
      <HeroSection />
      <Box component={"section"} sx={{marginTop: 5}}>
        <Typography bgcolor={"orange"} variant="h4" align="center">Image Tools</Typography>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} textAlign={'center'} gap={1}>
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
          <Grid item xs={12} sm={6} md={3}></Grid>
          <Grid item xs={12} sm={6} md={3}></Grid>
          <Grid item xs={12} sm={6} md={3}></Grid>
        </Grid>
      </Box>
      <Box component={"section"}>
        <Typography bgcolor={"orange"} variant="h4" align="center">Optimizer Tools</Typography>
        <Grid container>
          <Grid item  xs={12} sm={6} md={3} textAlign={'center'} gap={1}>
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
          <Grid item  xs={12} sm={6} md={3} textAlign={'center'} gap={1}>
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
          <Grid item  xs={12} sm={6} md={3} textAlign={'center'} gap={1}>
            <Link href={"image-optimize/whatsapp"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2, mx: {xs: 2, md: 1}}}>
                <CardContent>
                  <Box sx={{color: '#fff'}}>
                    <WhatsApp fontSize="large" />
                  </Box>
                  <Typography>Whatsapp</Typography>
                  <Typography>DP</Typography>
                  <Typography>Resizer</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item  xs={12} sm={6} md={3} textAlign={'center'} gap={1}>
            <Link href={"image-optimize/twitter"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2, mx: {xs: 2, md: 1}}}>
                <CardContent>
                  <Box sx={{color: '#fff'}}>
                    <Twitter fontSize="large" />
                  </Box>
                  <Typography>Twitter</Typography>
                  <Typography>DP</Typography>
                  <Typography>Resizer</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} textAlign={'center'} gap={1}>
            <Link href={"image-optimize/tiktok"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2, mx: {xs: 2, md: 1}}}>
                <CardContent>
                  <Box sx={{color: '#fff'}}>
                    <Transcribe fontSize="large" />
                  </Box>
                  <Typography>TikTok</Typography>
                  <Typography>DP</Typography>
                  <Typography>Resizer</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign={'center'} gap={1}>
            <Link href={"image-optimize/linkedin"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2, mx: {xs: 2, md: 1}}}>
                <CardContent>
                  <Box sx={{color: '#fff'}}>
                    <LinkedIn fontSize="large" />
                  </Box>
                  <Typography>LinkedIn</Typography>
                  <Typography>DP</Typography>
                  <Typography>Resizer</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign={'center'} gap={1}>
            <Link href={"image-optimize/instagram"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2, mx: {xs: 2, md: 1}}}>
                <CardContent>
                  <Box sx={{color: '#fff'}}>
                    <Instagram fontSize="large" />
                  </Box>
                  <Typography>Instagram</Typography>
                  <Typography>DP</Typography>
                  <Typography>Resizer</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign={'center'} gap={1}>
            <Link href={"image-optimize/facebook"}>
              <Card sx={{bgcolor: 'blue', color: '#fff', my: 2, mx: {xs: 2, md: 1}}}>
                <CardContent>
                  <Box sx={{color: '#fff'}}>
                    <Facebook fontSize="large" />
                  </Box>
                  <Typography>Facebook</Typography>
                  <Typography>DP</Typography>
                  <Typography>Resizer</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>

      </Box>
      <Box component={"section"}>
        <Typography bgcolor={"orange"} variant="h4" align="center">Text Tools</Typography>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} textAlign={'center'} gap={1}>
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
          <Grid item xs={12} sm={6} md={3} textAlign={'center'} gap={1}>
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
          <Grid item xs={12} sm={6} md={3} textAlign={'center'} gap={1}>
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
          <Grid item xs={12} sm={6} md={3}></Grid>
        </Grid>
      </Box>
      <Box component={"section"}>
        <Typography bgcolor={"orange"} variant="h4" align="center">Other Tools</Typography>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} textAlign={'center'} gap={1}>
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
          <Grid item xs={12} sm={6} md={3}></Grid>
          <Grid item xs={12} sm={6} md={3}></Grid>
          <Grid item xs={12} sm={6} md={3}></Grid>
        </Grid>
      </Box>
    </main>
  );
}
export default Home;