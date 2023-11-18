"use client";
import React from "react";
// Next
import Image from "next/image";
import dynamic from "next/dynamic";
// @Mui
import { Box, Container, Grid, useTheme } from "@mui/material";
// Recoil
import { useRecoilValue } from "recoil";
// atoms
import { exploreHeroModelAtom } from "@/recoil/atoms";
// assets
import sectionOverlay from "@/assets/section-overlay.jpg";
//
import HeroContent from "./HeroContent";

// ----------------------------------------------------------------------------

const HeroExperience = dynamic(() => import("./HeroExperience"), {
  ssr: false,
  loading: () => <p>Loading 3D Website...</p>, // Optional loading component
});

function HeroBanner() {
  const exploreHeroModel = useRecoilValue(exploreHeroModelAtom);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        pb: 10,
      }}
    >
      <HeroExperience />
      {/* Hero Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "50%", // Adjust this value to control the height of the gradient
          background:
            "linear-gradient(to top, #161C24 30%, rgba(22,28,36,0) 100%)",

          zIndex: 5,
        }}
      />
      {/* End Hero Overlay */}
      {!exploreHeroModel && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 10,
            width: {
              xs: "100vw",
              md: "75vw",
              xl: "50vw",
            },

            top: {
              xs: "15%",
              md: "25%",
            },
            left: {
              xs: "0vw",
              md: "5vw",
            },
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <HeroContent />
        </Box>
      )}
    </Box>
  );
}

export default HeroBanner;
