import React from "react";
// Next
import Image from "next/image";
// Recoil
import { useSetRecoilState } from "recoil";
// @Mui
import { Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// atoms
import { startProjectPopUpAtom, contactUsPopUpAtom } from "@/recoil/atoms";
// assets
import blenderIcon from "@/assets/technologies/blender.png";
import threeJsIcon from "@/assets/technologies/three-js.png";
import nextJsIcon from "@/assets/technologies/next-js.svg";
import djangoIcon from "@/assets/technologies/django.png";
import nodeJsIcon from "@/assets/technologies/node-js.png";
import pythonIcon from "@/assets/technologies/python.png";
import javaScriptIcon from "@/assets/technologies/javascript.png";
import reactIcon from "@/assets/technologies/react-js.png";
//
import TechnologiesExperience from "./TechnologiesExperience";

// -------------------------------------------------------------------------------------

const TechnologyIcon = ({ title, image }) => {
  return (
    <Box sx={{ position: "relative", width: 120, height: 120 }}>
      <Image layout="fill" objectFit="contain" src={image} alt={title} />
    </Box>
  );
};

// -------------------------------------------------------------------------------------

function TechnologiesOverview() {
  const triggerContactUsPopUp = useSetRecoilState(contactUsPopUpAtom);

  const triggerStartProjectPopUp = useSetRecoilState(startProjectPopUpAtom);

  return (
    <Box sx={{ py: 12, position: "relative" }}>
      <Container maxWidth="xl">
        <Grid2 container alignItems="center" justifyContent="space-between">
          {/* Content */}
          <Grid2 xs={12} md={6}>
            <Grid2 container spacing={4}>
              <Grid2 xs={12}>
                <Typography variant="overline">Technologies Stacks</Typography>
              </Grid2>
              <Grid2 xs={12} md={6}>
                <Typography variant="h2">
                  We Custom Craft Your Project Using This Magic Tools
                </Typography>
              </Grid2>
              <Grid2 xs={12}>
                <Typography color="primary" variant="h6">
                  "Crafting art with code, in secret tech we’ve stowed"
                </Typography>
              </Grid2>
              {/* Technologies Icons */}
              <Grid2 xs={6}>
                <Grid2 container spacing={6}>
                  <Grid2 xs={4} md={2}>
                    <TechnologyIcon
                      image={blenderIcon}
                      title="Based On Tech Services"
                    />
                  </Grid2>
                  <Grid2 xs={4} md={2}>
                    <TechnologyIcon
                      image={threeJsIcon}
                      title="Based On Tech Services"
                    />
                  </Grid2>
                  <Grid2 xs={4} md={2}>
                    <TechnologyIcon
                      image={nextJsIcon}
                      title="Based On Tech Services"
                    />
                  </Grid2>
                  <Grid2 xs={4} md={2}>
                    <TechnologyIcon
                      image={nodeJsIcon}
                      title="Based On Tech Services"
                    />
                  </Grid2>
                  <Grid2 xs={4} md={2}>
                    <TechnologyIcon
                      image={javaScriptIcon}
                      title="Based On Tech Services"
                    />
                  </Grid2>
                  <Grid2 xs={4} md={2}>
                    <TechnologyIcon
                      image={djangoIcon}
                      title="Based On Tech Services"
                    />
                  </Grid2>
                  <Grid2 xs={4} md={2}>
                    <TechnologyIcon
                      image={pythonIcon}
                      title="Based On Tech Services"
                    />
                  </Grid2>
                  <Grid2 xs={4} md={2}>
                    <TechnologyIcon
                      image={reactIcon}
                      title="Based On Tech Services"
                    />
                  </Grid2>
                </Grid2>
              </Grid2>
              {/* End technologies Icons */}
              <Grid2 xs={12}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    size="large"
                    variant="outlined"
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
                    sx={{ ml: 4 }}
                    variant="contained"
                    onClick={() => triggerStartProjectPopUp(true)}
                    size="large"
                  >
                    Start Project
                  </Button>
                </Box>
              </Grid2>
            </Grid2>
          </Grid2>
          {/* End Content */}
          {/* 3D Model */}
          <Grid2 xs={12} md={6}>
            <TechnologiesExperience />
          </Grid2>
          {/* End 3D Model */}
        </Grid2>
      </Container>
    </Box>
  );
}

export default TechnologiesOverview;
