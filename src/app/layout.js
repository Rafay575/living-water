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
