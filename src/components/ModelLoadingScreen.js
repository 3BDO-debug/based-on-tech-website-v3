"use client";
import React, { useEffect } from "react";
// @Mui
import { Box, LinearProgress, Typography, useTheme } from "@mui/material";
// Iconify
import { Icon } from "@iconify/react";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
// atoms
import { heroBannerSceneLoadingAtom } from "@/recoil/atoms";
// Lottie
import Lottie from "lottie-react";
// animations
import experienceLoader from "@/assets/animations/3d-experience-loader.json";

// --------------------------------------------------------------------------------

function ModelLoadingScreen() {
  const theme = useTheme();

  const heroBannerSceneLoading = useRecoilValue(heroBannerSceneLoadingAtom);
  return !heroBannerSceneLoading.loaded ? (
    <Box
      sx={{
        position: "absolute",
        zIndex: 100000,
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#101B21",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Lottie
          style={{ width: 800, height: "auto" }}
          animationData={experienceLoader}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography color="grey.400" variant="subtitle2">
          “Creativity is a wild mind and a disciplined eye.”
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
        <Typography
          sx={{
            background: "linear-gradient(to right, #7675FD, #40FFEF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          variant="h3"
          align="center"
        >
          Creative 3D Web Experience Is Loading.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          px: "4vw",
        }}
      >
        <Box sx={{ width: "50%", mr: 2 }}>
          <LinearProgress
            variant="determinate"
            value={heroBannerSceneLoading.progress}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body1" color="text.primary">{`${parseInt(
            heroBannerSceneLoading.progress,
            10
          )}%`}</Typography>
        </Box>
      </Box>
    </Box>
  ) : (
    <></>
  );
}

export default ModelLoadingScreen;
