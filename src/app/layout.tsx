import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const ThemeProvider = dynamic(()=>import("@/components/theme/ThemeProvider"), {ssr: false,});
import { Header } from "@/components/navbar/Header";
import { Footer } from "@/components/footer/Footer";
import { Analytics } from '@vercel/analytics/react';
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: {
    template: '%s | Convert Master',
    default: "Convert Master", // a default is required when creating a template
  },
  description: "",
  twitter: {
    card: "summary_large_image"
  },
  keywords: ['Convert Master', 'ConvertMaster', "Image Converter", "Online Free converter"],
  authors: [
    { name: 'Sandeep Singh Mehra', url: 'https://github.com/sandeepsinghmehra' }
  ], 
  openGraph: {
    title: 'ConvertMaster',
    description: '',
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/ico",
        url: "/favicon/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon/android-chrome-96x96.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "150x150",
        url: "/favicon/mstile-150x150.png",
      },
    ],
  },

  manifest: "/favicon/site.webmanifest",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7291468257656404" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7291468257656404"
          crossOrigin="anonymous"
        >
        </script>
      </head>
      <body className={inter.className}>
        <Box sx={{ width: {xs: "100%", md:"80%"}, margin: 'auto'}}>
          <ThemeProvider>
            <Header />
            {children}
            <Analytics />
            <Footer />
          </ThemeProvider>
        </Box>
        </body>
    </html>
  );
}
