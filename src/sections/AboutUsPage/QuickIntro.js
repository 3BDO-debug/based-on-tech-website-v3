import React, { useState } from "react";
// Next
import Image from "next/image";
// Iconify
import { Icon } from "@iconify/react";
// @Mui
import {
  Box,
  Card,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// assets
import quickIntroCover from "@/assets/quick-intro.jpg";
//
import IntroVideoPopUp from "@/components/IntroVideoPopUp";

// -----------------------------------------------------------------

function QuickIntro() {
  const theme = useTheme();

  const [introVideoPopUp, triggerIntroVideoPopUp] = useState(false);

  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="xl">
        <Card sx={{ position: "relative", width: "100%", height: "50vh" }}>
          {/* Quick Intro Cover */}
          <Box
            sx={{
              position: "absolute",
              zIndex: -1,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              style={{ filter: "brightness(0.5)" }}
              src={quickIntroCover}
              layout="fill"
              objectFit="cover"
            />
          </Box>
          {/* Quick Intro Cover */}

          {/* Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography variant="h2">Secret Video</Typography>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                width: 100,
                height: 100,
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                my: 4,
              }}
            >
              <IconButton onClick={() => triggerIntroVideoPopUp(true)}>
                <Icon
                  color={theme.palette.grey[200]}
                  width={45}
                  height={45}
                  icon="solar:play-broken"
                />
              </IconButton>
            </Box>
            <Typography variant="subtitle1">
              "We don’t just handle your projects, we treat them as our own."
            </Typography>
          </Box>
          {/* End Content */}
          {/* Fade Our */}
          <Box
            sx={{
              position: "absolute",
              zIndex: 1,
              width: "100%",
              height: "10vh",
              bottom: 0,
              backgroundImage:
                "linear-gradient(to bottom, transparent 20%, #000000 70%)",
            }}
          />
        </Card>
      </Container>
      {/* Intro video pop up */}
      <IntroVideoPopUp
        isTriggered={introVideoPopUp}
        closeHandler={() => triggerIntroVideoPopUp(false)}
      />
      {/* End intro video pop up */}
    </Box>
  );
}

export default QuickIntro;
