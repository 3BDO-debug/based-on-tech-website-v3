"use client";
import React from "react";
// @Mui
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

// ---------------------------------------------------------

function AboutUs() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: 12,
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Grid container columnSpacing={12} marginTop={24} alignItems="center">
          <Grid item xs={12} md={6}>
            <Card>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/8d7sfZbcOP4?si=k4II8SKg8aILIJ8U"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="overline">Quick Intro</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    background: "linear-gradient(to right, #7675FD, #40FFEF)",
                    WebkitBackgroundClip: "text",
                    MozBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                  variant="h1"
                >
                  A Quick Intro
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Welcome to Based On Tech, your partner in innovation. We are a
                  creative software solutions company that goes beyond just
                  meeting project requirements. Our expertise spans across web
                  development, mobile app development, and custom software
                  solutions. <strong>But what truly sets us apart</strong> is
                  our approach. We treat every project as if it were our own,
                  constantly pushing the boundaries to provide unique,
                  outstanding solutions. Our innovative strategies have helped
                  our clients step ahead of their competitors.{" "}
                  <strong>
                    Join us, and let’s create something extraordinary together.
                  </strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained">Our Services</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;
