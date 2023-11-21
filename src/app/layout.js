"use client";
// Root Style
import RootStyleRegistry from "./emotion";
// Next
import { usePathname } from "next/navigation";
import Head from "next/head";
// @Mui
import { Box } from "@mui/material";

//
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUsPopUp from "@/components/ContactUsPopUp";
import ReachUsPopUp from "@/components/ReachUsPopUp";
import StartProjectPopUp from "@/components/StartProjectPopUp";
import ModelLoadingScreen from "@/components/ModelLoadingScreen";
import Alert from "@/components/Alert";

// ----------------------------------------------------------------------------------------------------

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <Head>
        <title>Based On Tech - Creative Software Solutions</title>
        <meta
          name="description"
          content="Based On Tech is a creative software development startup specializing in developing custom immersive software solutions to help businesses scale. Our services include 3D website development, web and mobile app development, custom software solutions, and branding."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="software development, web development, mobile app development, 3D website, custom software, branding"
        />
        <meta name="author" content="Based On Tech" />
        <link rel="icon" href="/favicon.ico" />{" "}
        {/* Update the favicon path if needed */}
        {/* Add any other meta tags as needed */}
      </Head>
      <body>
        <RootStyleRegistry>
          <Box
            sx={{ overflowX: "hidden", width: "100%", position: "relative" }}
          >
            <Header />
            {children}
            <Footer />
            {/* Contact us pop up */}
            <ContactUsPopUp />
            {/* End contact us pop up */}
            {/* Reach us pop up */}
            <ReachUsPopUp />
            {/* End Reach us pop up */}
            {/* Start project pop up */}
            <StartProjectPopUp />
            {/* End start project pop up */}
            {/* Home page 3d model loader */}
            {pathname === "/" && <ModelLoadingScreen />}
            {/* Alert pop up */}
            <Alert />
            {/* End alert pop up */}
          </Box>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
