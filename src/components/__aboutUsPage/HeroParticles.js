"use client";
import React, { useCallback, useMemo } from "react";
// @Mui
import { useTheme } from "@mui/material";
// ts particles
import Particles from "react-particles";
// ts particles slim engine
import { loadStarsPreset } from "tsparticles-preset-stars";

// ----------------------------------------------------------------------------------------------------------------------

function HeroParticles(props) {
  const theme = useTheme();

  const customInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={customInit}
      height="700px"
      options={{
        background: { color: theme.palette.background.default },
        particles: {
          number: { value: 100 },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 0.1,
            straight: false,
          },
          opacity: {
            animation: { enable: true, speed: 1, sync: false },
            value: { min: 0, max: 1 },
          },
          size: { value: { min: 1, max: 3 } },
        },
        fullScreen: false,
        detectRetina: true,
      }}
    />
  );
}

export default HeroParticles;
