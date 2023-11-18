"use client";
import React from "react";
// recoil
import { useSetRecoilState } from "recoil";
// Next
import { useRouter } from "next/navigation";
// @Mui
import { Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// atoms
import { startProjectPopUpAtom } from "@/recoil/atoms";
//
import HeroExperience from "./HeroExperience";

// --------------------------------------------------------------------------

function HeroBanner() {
  const triggerStartProjectPopUp = useSetRecoilState(startProjectPopUpAtom);

  const router = useRouter();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        pt: 18,
        pb: 12,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Grid2 container alignItems="center">
          {/* Hero Content */}
          <Grid2 xs={12} md={6}>
            <Grid2 container>
              <Grid2 xs={12}>
                <Typography variant="h6" color="grey.300">
                  Innovation in Every Pixel: Crafting Digital Masterpieces
                </Typography>
              </Grid2>
              <Grid2 xs={12}>
                <Typography variant="h1" sx={{ my: 2 }}>
                  Creative Code: Our{" "}
                  <span
                    style={{
                      background: "linear-gradient(to right, #7675FD, #40FFEF)",
                      WebkitBackgroundClip: "text",
                      MozBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Digital Portfolio
                  </span>
                </Typography>
              </Grid2>
              <Grid2 xs={12}>
                <Typography>
                  Explore our collection of projects where technology and
                  creativity converge, crafting exceptional digital experiences
                  with precision and flair.
                </Typography>
              </Grid2>
              <Grid2 xs={12}>
                <Box
                  sx={{
                    mt: 4,
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Button
                    onClick={() => router.push("/about-us")}
                    variant="outlined"
                    size="large"
                    sx={{ mr: 2 }}
                  >
                    Learn More
                  </Button>
                  <Button
                    onClick={() => triggerStartProjectPopUp(true)}
                    variant="contained"
                    size="large"
                  >
                    Start Project
                  </Button>
                </Box>
              </Grid2>
            </Grid2>
          </Grid2>
          {/*  End Hero Content */}
          <Grid2 xs={12} md={6}>
            <HeroExperience />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default HeroBanner;
