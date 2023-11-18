"use client";
// Root Style
import RootStyleRegistry from "./emotion";
// Next
import { usePathname } from "next/navigation";
// @Mui
import { Box } from "@mui/material";

//
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUsPopUp from "@/components/ContactUsPopUp";
import ReachUsPopUp from "@/components/ReachUsPopUp";
import StartProjectPopUp from "@/components/StartProjectPopUp";
import ModelLoadingScreen from "@/components/ModelLoadingScreen";

// ----------------------------------------------------------------------------------------------------

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
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
            {/* {pathname === "/" && <ModelLoadingScreen />} */}
          </Box>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
