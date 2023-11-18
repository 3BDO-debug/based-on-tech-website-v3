"use client";
import React, { useCallback, useMemo } from "react";
// @Mui
import { useTheme } from "@mui/material";
// ts particles
import Particles from "react-particles";
// ts particles slim engine
import { loadStarsPreset } from "tsparticles-preset-stars";

// ----------------------------------------------------------------------------------------------------------------------

function ParticlesEffect({ height, color, starsCounter, speed }) {
  const theme = useTheme();

  const customInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={customInit}
      height={height}
      options={{
        background: { color: color },
        particles: {
          number: { value: starsCounter },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: speed,
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

export default ParticlesEffect;
