"use client";
import { Open_Sans, Rajdhani } from "next/font/google";
import "@/assets/css/font-icons.css";
import "@/assets/css/plugins.css";
import "./globals.css";
import "@/assets/css/responsive.css";
import Script from "next/script";
import { Suspense } from "react";
import { store } from '../../store/store';
import { Provider } from 'react-redux';
const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--ltn__body-font",
});
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--ltn__heading-font",
});
import ClientProviders from './ClientProviders';




export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${rajdhani.variable} ${open_sans.variable}`}
    >
      <head>
        {/* Favicon */}
        <link rel="icon" href="/img/favicon.png" />

        {/* Basic page info */}
        <title>Living Water | Pure Lava‑Filtered Mineral Water</title>
        <meta
          name="description"
          content="Living Water delivers pure, lava‑filtered mineral water sourced from Costa Rica’s volcanic springs. 100% natural filtration, mineral‑rich hydration, and eco‑conscious packaging. Free shipping on orders over $100."
        />
        <meta
          name="keywords"
          content="lava‑filtered water, mineral water, natural spring water, eco-conscious hydration, Costa Rica water, pure hydration"
        />
        <meta name="author" content="Living Water" />
        <meta name="robots" content="index, follow" />

        {/* Mobile viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Living Water | Pure Lava‑Filtered Mineral Water"
        />
        <meta
          property="og:description"
          content="Experience 100% natural filtration and mineral‑rich hydration from Costa Rica’s protected volcanic springs. Shop now and enjoy free shipping on orders over $100."
        />
        <meta property="og:url" content="https://livingwater-bt.com/" />
        <meta
          property="og:image"
          content="https://livingwaterbt.com/img/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Living Water | Pure Lava‑Filtered Mineral Water"
        />
        <meta
          name="twitter:description"
          content="Pure, lava‑filtered mineral water packed with life‑giving minerals. Sustainably sourced from Costa Rica's volcanic springs."
        />
        <meta
          name="twitter:image"
          content="https://livingwaterbt.com/img/twitter-card.jpg"
        />
      </head>
      <body className={open_sans.className}>
    
      <Provider store={store}> 
        <Suspense fallback={<div></div>}>
             {/* client-only providers */}
        <ClientProviders>
          {/* your app content */}
          {children}
        </ClientProviders>


          <Script src="/plugins.js" />
          <Script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCeeHDCOXmUMja1CFg96RbtyKgx381yoBU"
            async
          />
        </Suspense>
        </Provider>
      
      </body>
    </html>
  );
}
