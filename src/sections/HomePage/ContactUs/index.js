"use client";
import React from "react";
// @Mui
import { Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
//
import ContactUsExperience from "./ContactUsExperience";

// ----------------------------------------------------------------------

function ContactUs() {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="xl">
        <Grid2 container>
          <Grid2 xs={12} md={6}>
            <Grid2 container spacing={4}>
              <Grid2 xs={12}>
                <Typography variant="overline">Contact Us</Typography>
              </Grid2>
              <Grid2 xs={12}>
                <Typography variant="h1">
                  Enough Talking About Us,
                  <span
                    style={{
                      background:
                        "linear-gradient(to bottom, #7675FD, #40FFEF)",
                      WebkitBackgroundClip: "text",
                      MozBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      marginLeft: 2,
                    }}
                  >
                    Let's Talk About Your Project
                  </span>
                </Typography>
              </Grid2>
              <Grid2 xs={12}>
                <Button size="large" variant="contained">
                  Start Project
                </Button>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 xs={12} md={6}>
            <ContactUsExperience />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default ContactUs;
