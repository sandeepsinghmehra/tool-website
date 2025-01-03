import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const ThemeProvider = dynamic(()=>import("@/components/theme/ThemeProvider"), {ssr: false,});
import { Header } from "@/components/navbar/Header";
import { Footer } from "@/components/footer/Footer";
import { Analytics } from '@vercel/analytics/react';
import { Box } from "@mui/material";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import Script from "next/script";


const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  // title: {
  //   template: '%s | Convert Master',
  //   default: "Convert Master", // a default is required when creating a template
  // },
  description: "Convert Master Free online converter Tools. Upload your file and click Convert. Then you can download your converted file.",
  twitter: {
    card: "summary_large_image"
  },
  keywords: ['Convert Master', 'ConvertMaster', "Image Converter", "Online Free converter"],
  authors: [
    { name: 'Sandeep Singh Mehra', url: 'https://github.com/sandeepsinghmehra' }
  ], 
  openGraph: {
    title: 'ConvertMaster',
    description: 'Convert Master Free online converter Tools. Upload your file and click Convert. Then you can download your converted file.',
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  // console.log("messages: ", messages)
  return (
    <html lang={locale}>
      <head>
        <meta name="google-site-verification" content="gcYNBWqBdyY8i1Y1LtL39rmYsmdMMRokCwsPppsJen4" />
        <GoogleAnalytics />
        <meta name="ded46ff83865378e6701c3070cf87a3a3b75f5ae" content="ded46ff83865378e6701c3070cf87a3a3b75f5ae" />
        {/* <script>
        (function(xzxp){
          var d = document,
              s = d.createElement('script'),
              l = d.scripts[d.scripts.length - 1];
          s.settings = xzxp || {};
          s.src = "\/\/neat-period.com\/bgXfVDszd.Gml\/0xY\/WNd\/iFYCWN5XuSZnX-IH\/herma9yuVZ-UmlwkpPNTLUu5aM\/jqEi3jO\/D\/Y\/t\/N\/TqkuyWMSTqck4\/NdwH";
          s.async = true;
          s.referrerPolicy = 'no-referrer-when-downgrade';
          l.parentNode.insertBefore(s, l);
          })({})
        </script> */}
         <Script id="custom-inline-script" strategy="afterInteractive">
        {`
          (function(xzxp){
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = xzxp || {};
            s.src = "//neat-period.com/bgXfVDszd.Gml/0xY/WNd/iFYCWN5XuSZnX-IH/herma9yuVZ-UmlwkpPNTLUu5aM/jqEi3jO/D/Y/t/N/TqkuyWMSTqck4/NdwH";
            s.async = true;
            s.referrerPolicy = 'no-referrer-when-downgrade';
            l.parentNode.insertBefore(s, l);
          })({});
          (function(rwtn){
          var d = document,
              s = d.createElement('script'),
              l = d.scripts[d.scripts.length - 1];
          s.settings = rwtn || {};
          s.src = "\/\/pricklymine.com\/bWXlVds.dVGnlW0jYPWBcd\/FeOmA9yuBZfUjlbk\/PSTfUU5dN\/DsIZ3BO\/Dec\/t_NTT\/kx0CM_jNcN4qO\/Av";
          s.async = true;
          s.referrerPolicy = 'no-referrer-when-downgrade';
          l.parentNode.insertBefore(s, l);
          })({});
          (function(pxs){
          var d = document,
              s = d.createElement('script'),
              l = d.scripts[d.scripts.length - 1];
          s.settings = pxs || {};
          s.src = "\/\/miserablenobody.com\/cHD_9C6.b\/2T5hlKSfWEQI9\/NATbk-0UMMjggyw\/NpSE0\/1zO\/TRQwyQOmD-AS2F";
          s.async = true;
          s.referrerPolicy = 'no-referrer-when-downgrade';
          l.parentNode.insertBefore(s, l);
          })({});
        `}
      </Script>
      </head>
      
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Box sx={{ width: {xs: "100%", md:"80%"}, margin: 'auto'}}>
            <ThemeProvider>
              <Header />
              {children}
              <Analytics />
              <Footer />
            </ThemeProvider>
          </Box>
        </NextIntlClientProvider>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-P246DK6T"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          >
          </iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        </body>
    </html>
  );
}
