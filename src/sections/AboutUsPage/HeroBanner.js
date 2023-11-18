"use client";
import React from "react";
// Next
import Image from "next/image";
import { useRouter } from "next/navigation";
// Recoil
import { useSetRecoilState } from "recoil";
// @Mui
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// React Power Glitch
import { useGlitch } from "react-powerglitch";
// atoms
import { contactUsPopUpAtom } from "@/recoil/atoms";
// assets
import personalPhoto from "@/assets/me.jpg";

// --------------------------------------------------------------------------------------

function HeroBanner() {
  const triggerContactUsPopUp = useSetRecoilState(contactUsPopUpAtom);

  const router = useRouter();

  const glitch = useGlitch({
    timing: {
      duration: 2500,
    },
    glitchTimeSpan: {
      start: 0.61,
      end: 0.7,
    },
    shake: false,
  });

  const theme = useTheme();

  return (
    <Box sx={{ mt: "15vh", pb: 12, position: "relative" }}>
      <Container maxWidth="xl">
        <Grid
          container
          position="relative"
          columnSpacing={12}
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap-reverse"
        >
          {/* Content */}
          <Grid item xs={12} md={6}>
            <Grid
              container
              position="relative"
              sx={{
                zIndex: 20,
                mt: {
                  xs: "10vh",
                  md: 0,
                },
              }}
              spacing={3}
            >
              {/* Light Bulb Effect */}
              <Box
                sx={{
                  position: "absolute",
                  left: "-2vw",
                  zIndex: -1,
                  backgroundImage: `radial-gradient(50% 50% at 50% 50%,#7575fd 0,transparent 100%)`,
                  width: { xs: 100, md: 200 },
                  height: { xs: 100, md: 200 },
                  borderRadius: "50%",
                  top: {
                    xs: "-2vh",
                    md: "-5vh",
                  },
                  opacity: 0.5,
                }}
              />
              {/* End Light Bulb Effect */}
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
                  <Typography align="center" variant="subtitle1">
                    “Creativity is a wild mind and a disciplined eye.”
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  sx={{ display: "flex", flexWrap: "wrap" }}
                >
                  Where
                  <Typography
                    sx={{
                      ml: 2,
                      color: "transparent",
                      background: "linear-gradient(45deg, #7575fd, #40FFEF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    component="span"
                    variant="h1"
                  >
                    Ideas Bloom
                  </Typography>
                  And Businesses
                  <Typography
                    sx={{
                      color: "transparent",
                      background: "linear-gradient(45deg, #7575fd, #40FFEF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      ml: 2,
                    }}
                    component="span"
                    variant="h1"
                  >
                    Boom
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  The story of "Based On Tech" begins with the vision of a young
                  engineering student, <strong>Abdelrahman Essam</strong>. His
                  journey started with a deep-seated passion for
                  problem-solving, a journey that soon evolved from freelancing
                  in coding to empowering local entrepreneurs. His dedication to
                  turning innovative ideas into tangible software solutions
                  sparked the birth of "Based On Tech." <br /> <br />
                  <strong>Abdelrahman's</strong> vision was clear: to streamline
                  the startup process for online businesses, removing the
                  complexities and challenges faced by newcomers. Through "Based
                  On Tech," he aspires to provide a comprehensive toolkit for
                  success - from bespoke websites and mobile apps to brand
                  identity design, cloud hosting, and establishing a robust
                  social media presence. Abdelrahman's story isn't just about
                  coding; it's about creating pathways for ideas to flourish,
                  making "Based On Tech" a beacon for aspiring entrepreneurs and
                  a testament to the transformative power of technology.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    mt: 4,
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      md: "flex-start",
                    },
                    width: "100%",
                  }}
                >
                  <Button
                    onClick={() =>
                      triggerContactUsPopUp({
                        isTriggered: true,
                        variant: "General Inquiry",
                      })
                    }
                    size="large"
                    variant="outlined"
                    sx={{ mr: 4 }}
                  >
                    Contact Us
                  </Button>
                  <Button
                    onClick={() => router.push("/our-projects")}
                    size="large"
                    variant="contained"
                  >
                    View Portfolio
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* End Content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: { xs: 300, sm: 450, md: 600 },
                width: {
                  xs: "75%",
                  md: "100%",
                },
                zIndex: 10,
                transform: "perspective(600px) rotateY(-7deg)",
              }}
            >
              <Box>
                <Image
                  ref={glitch.ref}
                  layout="fill"
                  objectFit="cover"
                  src={personalPhoto}
                  alt="Abdelrahman Essam (Founder Of Based On Tech)"
                />
              </Box>
              {/* Frames */}
              <Box
                sx={{
                  border: `1px solid ${theme.palette.grey[700]}`,
                  width: "100%",
                  height: {
                    xs: 300,
                    sm: 450,
                    md: 600,
                  },
                  transform: "translate(2rem, 1rem)",
                  zIndex: -1,
                  position: "absolute",
                  opacity: 0.5,
                }}
              />
              <Box
                sx={{
                  border: `1px solid ${theme.palette.grey[700]}`,
                  width: "100%",
                  height: {
                    xs: 300,
                    sm: 450,
                    md: 600,
                  },
                  transform: "translate(4rem, 1.5rem)",
                  zIndex: -3,
                  position: "absolute",
                  opacity: 0.3,
                }}
              />
              <Box
                sx={{
                  border: `1px solid ${theme.palette.grey[700]}`,
                  width: "100%",
                  height: {
                    xs: 300,
                    sm: 450,
                    md: 600,
                  },
                  transform: "translate(6rem, 2rem)",
                  zIndex: -3,
                  position: "absolute",
                  opacity: 0.1,
                }}
              />
              {/* End Frames */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroBanner;
