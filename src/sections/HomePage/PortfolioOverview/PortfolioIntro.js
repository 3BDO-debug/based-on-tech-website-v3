import React from "react";
// @Mui
import { Box, Grid, Typography } from "@mui/material";

// --------------------------------------------------------------------------------------------

function PortfolioIntro() {
  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography>Portfolio</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              variant="h1"
            >
              Our
              <Typography
                sx={{ textDecoration: "line-through", mx: 2.5 }}
                variant="h1"
              >
                Portfolio
              </Typography>
              <Typography
                sx={{
                  alignItems: "center",
                  background: "linear-gradient(to right, #7675FD, #40FFEF)",
                  WebkitBackgroundClip: "text",
                  MozBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                variant="h1"
              >
                Work Of Art
              </Typography>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PortfolioIntro;
