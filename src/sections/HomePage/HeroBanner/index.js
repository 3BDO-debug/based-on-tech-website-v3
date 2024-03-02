"use client";
import React, { useEffect, useRef, useState } from "react";
// Next
import Image from "next/image";
import dynamic from "next/dynamic";
// React Intersection Observer
import { useInView } from "react-intersection-observer"; // framer
// framer
import { motion } from "framer-motion";
// @Mui
import {
  Box,
  Container,
  Grid,
  useTheme,
  Button,
  IconButton,
} from "@mui/material";
// Iconify
import { Icon } from "@iconify/react";
// Recoil
import { useRecoilState, useRecoilValue } from "recoil";
// atoms
import {
  contactUsPopUpAtom,
  exploreHeroModelAtom,
  startProjectPopUpAtom,
} from "@/recoil/atoms";
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
  const theme = useTheme();

  const sectionRef = useRef();

  const [exploreHeroModel, triggerExploreModel] =
    useRecoilState(exploreHeroModelAtom);

  const [scrolledAway, setIsScrolledAway] = useState(false);

  const contactUsPopUp = useRecoilValue(contactUsPopUpAtom);

  const startProjectPopUp = useRecoilValue(startProjectPopUpAtom);

  const buttonVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
  };

  const { ref, inView } = useInView({ threshold: 0.8 });

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        pb: 10,
      }}
      ref={ref}
    >
      <HeroExperience /> {/* Hero Overlay */}
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
              lg: "50vw",
              xl: "40vw",
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
      {/* Click To Explore */}
      {!startProjectPopUp ||
        (!contactUsPopUp && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              zIndex: 10000,
              position: !inView ? "sticky" : "fixed",
              bottom: "0vh",
              height: "10vh",
            }}
          >
            {exploreHeroModel ? (
              <motion.div
                key="closeButton"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={buttonVariants}
              >
                <IconButton onClick={() => triggerExploreModel(false)}>
                  <Icon
                    color={theme.palette.error.light}
                    width={60}
                    height={60}
                    icon="solar:close-circle-broken"
                  />
                </IconButton>
              </motion.div>
            ) : (
              <motion.div
                key="exploreButton"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={buttonVariants}
              >
                <Button
                  size="large"
                  variant="contained"
                  startIcon={<Icon icon="icon-park-outline:click-tap" />}
                  onClick={() => triggerExploreModel(true)}
                >
                  Explore 3D Model
                </Button>
              </motion.div>
            )}
          </Box>
        ))}
      {/* End click to explore */}
    </Box>
  );
}

export default HeroBanner;
