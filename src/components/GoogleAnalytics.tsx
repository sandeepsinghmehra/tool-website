
import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
    
    return (
        <>
            <Script
                strategy='beforeInteractive'
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
            />

            <Script id='' strategy='beforeInteractive'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            {/* <!-- Google Tag Manager --> */}
            <Script id={'GTM-P246DK6T'} strategy='beforeInteractive'>
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-P246DK6T');
                `}
            </Script>
            {/* <!-- End Google Tag Manager --> */}
        </>
    );
};

export default GoogleAnalytics;