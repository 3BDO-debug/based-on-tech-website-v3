"use client";
import React from "react";
// Recoil
import { useSetRecoilState } from "recoil";
// @Mui
import { Box, Button, Container, Grid, Typography } from "@mui/material";
// atoms
import { contactUsPopUpAtom, startProjectPopUpAtom } from "@/recoil/atoms";
//
import MichiBot from "./MichiBot";

// ---------------------------------------------------------------------------------------------------

function JoinUsMotivation() {
  const triggerContactUsPopUp = useSetRecoilState(contactUsPopUpAtom);

  const triggerStartProjectPopUp = useSetRecoilState(startProjectPopUpAtom);

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="overline">Hire Us</Typography>
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
                  variant="h2"
                >
                  Why Still Thinking? Ride the Wave of Creativity with Us Now!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                  <Button
                    sx={{ mr: 3 }}
                    variant="outlined"
                    size="large"
                    onClick={() =>
                      triggerContactUsPopUp({
                        isTriggered: true,
                        variant: "General Inquiry",
                      })
                    }
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => triggerStartProjectPopUp(true)}
                  >
                    Start Project
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <MichiBot />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default JoinUsMotivation;
