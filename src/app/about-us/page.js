"use client";
import React from "react";
// sections
import HeroBanner from "@/sections/AboutUsPage/HeroBanner";
import { Box } from "@mui/material";
import QuickIntro from "@/sections/AboutUsPage/QuickIntro";
import HeroParticles from "@/components/__aboutUsPage/HeroParticles";
import TechnologiesOverview from "@/sections/AboutUsPage/TechnologiesOverview";
import AbourUsText from "@/sections/AboutUsPage/AbourUsText";

// -------------------------------------------------------------------------------------

function AboutUsPage() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          top: "-10vh",
          zIndex: 10,
        }}
      >
        <HeroParticles />
      </Box>
      <HeroBanner />
      <QuickIntro />
      <AbourUsText />
      <TechnologiesOverview />
    </Box>
  );
}

export default AboutUsPage;
