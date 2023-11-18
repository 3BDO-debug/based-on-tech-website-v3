"use client";
import React from "react";
// @Mui
import { Box } from "@mui/material";
// sections
import HeroBanner from "@/sections/OurProjectsPage/HeroBanner";
import ParticlesEffect from "@/components/ParticlesEffect";
import ProjectsOverview from "@/sections/OurProjectsPage/ProjectsOverview";
import JoinUsMotivation from "@/sections/OurProjectsPage/JoinUsMotication";

// --------------------------------------------------------------------------------

function OurProjectsPage() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Hero particles */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          top: "0vh",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <ParticlesEffect height="800px" speed={1} starsCounter={300} />
      </Box>
      {/* End hero particles */}
      <HeroBanner />
      <ProjectsOverview />
      <JoinUsMotivation />
    </Box>
  );
}

export default OurProjectsPage;
