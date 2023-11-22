"use client";
import React, { useEffect } from "react";
// Next
import Image from "next/image";
import { useRouter } from "next/navigation";
// Framer Motion
import { motion, useAnimation } from "framer-motion";
// Iconify
import { Icon } from "@iconify/react";
// Recoil
import { useSetRecoilState } from "recoil";
// @Mui
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Divider,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// atoms
import { startProjectPopUpAtom } from "@/recoil/atoms";
// assets
import informa from "@/assets/clients/informa.png";
import cairoRunners from "@/assets/clients/cairo-runners.png";
import bistroBox from "@/assets/clients/bistro-box.png";
import coachSama from "@/assets/clients/coach-sama.png";
import siyl from "@/assets/clients/siyl.png";

// -------------------------------------------------------------------------------------

const ClientImage = ({ src, invert, width, height }) => {
  return (
    <Box
      sx={{
        height: height,
        width: width,
        position: "relative",
        bgcolor: "transparent",
      }}
    >
      <Image
        layout="fill"
        objectFit="contain"
        src={src}
        style={{ filter: invert && "invert(100%)" }}
        alt="informa-180 is developed by based on tech"
      />
    </Box>
  );
};

// -------------------------------------------------------------------------------------

function HeroContent() {
  const controls = useAnimation();

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const triggerStartProjectPopUp = useSetRecoilState(startProjectPopUpAtom);

  const router = useRouter();

  useEffect(() => {
    controls.start({
      width: "100%",
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <Box
      sx={{
        width: "100%",
        px: {
          xs: "0vw",
          mD: "10vw",
        },
      }}
    >
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <Typography
              color="grey.400"
              variant={isMobile ? "subtitle2" : "subtitle1"}
            >
              Welcome To Our Creative World.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={isMobile ? "h2" : "h1"}
            align={isMobile ? "center" : "left"}
            color="grey.100"
            sx={{ mb: 2 }}
          >
            Elevating Business,
            <Box
              component={motion.span}
              sx={{ display: "inline-block", position: "relative" }}
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={controls}
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  background: "linear-gradient(to right, #7675FD, #40FFEF)",
                  height: "10px",
                  borderRadius: 4,
                }}
              />
              <Typography
                variant={isMobile ? "h2" : "h1"}
                sx={{
                  background: "linear-gradient(to right, #7675FD, #40FFEF)",
                  WebkitBackgroundClip: "text",
                  MozBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                One Code at a Time
              </Typography>
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={isMobile ? "body2" : "body1"}
            align={isMobile ? "center" : "left"}
          >
            <strong>Based On Tech</strong>: Empowering success through creative
            software solutions, transforming ideas into impactful business
            innovations
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 4,
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <Button
              startIcon={<Icon icon="fluent:call-12-filled" />}
              sx={{ mr: 2 }}
              variant="outlined"
              onClick={() => router.push("/about-us")}
              size={isMobile ? "small" : "large"}
            >
              <Typography variant={isMobile ? "subtitle1" : "h6"}>
                Learn More
              </Typography>
            </Button>
            <Button
              size={isMobile ? "small" : "large"}
              endIcon={<Icon icon="ion:rocket-outline" />}
              variant="contained"
              onClick={() => triggerStartProjectPopUp(true)}
            >
              <Typography variant="h6">Start Project</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ my: 3 }} />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <Typography color="grey.400" variant="h5">
              Trusted By
            </Typography>
          </Box>
        </Grid>
        {/* Tech Stacks */}
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            sx={{
              px: {
                xs: 3,
                md: 0,
              },
              mt: 3,
            }}
            spacing={isMobile ? 3 : 4}
          >
            <Grid item xs={4} md={2}>
              <ClientImage
                src={informa}
                width={isMobile ? 60 : 80}
                height={isMobile ? 60 : 80}
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <ClientImage
                src={cairoRunners}
                width={isMobile ? 60 : 80}
                height={isMobile ? 60 : 80}
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <ClientImage
                src={bistroBox}
                width={isMobile ? 90 : 80}
                height={isMobile ? 90 : 80}
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <ClientImage
                src={coachSama}
                width={isMobile ? 90 : 80}
                height={isMobile ? 90 : 80}
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <ClientImage
                src={siyl}
                width={isMobile ? 90 : 80}
                height={isMobile ? 90 : 80}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* End Tech Stacks */}
      </Grid>
    </Box>
  );
}

export default HeroContent;
