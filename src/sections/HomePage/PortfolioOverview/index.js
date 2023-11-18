"use client";
import React from "react";
// Next
import dynamic from "next/dynamic";
// @Mui
import { Box, Container, Grid } from "@mui/material";
//
import PortfolioIntro from "./PortfolioIntro";

// ----------------------------------------------------------------------------------------------------------

const PortfolioExperience = dynamic(() => import("./PortfolioExperience"), {
  ssr: false,
  loading: () => <p>Loading 3D Website...</p>, // Optional loading component
});

function PortfolioOverview() {
  return (
    <Box sx={{ pb: 12, position: "relative" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Container maxWidth="xl">
            <PortfolioIntro />
          </Container>
        </Grid>

        <Grid item xs={12}>
          <PortfolioExperience />
        </Grid>
      </Grid>
      {/* Hero Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "30%", // Adjust this value to control the height of the gradient
          background:
            "linear-gradient(to top, #161C24 30%, rgba(22,28,36,0) 100%)",

          zIndex: 5,
        }}
      />
      {/* End Hero Overlay */}
    </Box>
  );
}

export default PortfolioOverview;
