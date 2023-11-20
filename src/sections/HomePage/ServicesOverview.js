"use client";
import React, { useEffect } from "react";
// @Mui
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// Recoil
import { useSetRecoilState } from "recoil";
// React Lottie
import Lottie from "lottie-react";
// React Intersection Observer
import { useInView } from "react-intersection-observer";
// Framer Motion
import { useAnimation, motion } from "framer-motion";
// atoms
import { contactUsPopUpAtom } from "@/recoil/atoms";
// assets
import threeDWebExperience from "@/assets/animations/services-overview/3d-web-experience.json";
import mobileAppDevelopment from "@/assets/animations/services-overview/mobile-app-development.json";
import webDesign from "@/assets/animations/services-overview/web-design.json";
import branding from "@/assets/animations/services-overview/branding.json";

// -------------------------------------------------------------------------------------------------------

const ServiceCard = ({ animaiton, title, reverseLayout, description }) => {
  const theme = useTheme();

  const controls = useAnimation();
  const { ref, inView } = useInView();

  const triggerContactUsPopUp = useSetRecoilState(contactUsPopUpAtom);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <Grid2
      container
      columnSpacing={12}
      flexDirection={reverseLayout ? "row-reverse" : "row"}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid2 xs={12} md={6}>
        {inView && <Lottie animationData={animaiton} />}
      </Grid2>
      <Grid2 xs={12} md={5}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box sx={{ mb: 3, position: "relative" }}>
            <Typography variant="h1">{title}</Typography>
            {/* Light Bulb Effect */}
            <Box
              component={motion.div}
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={{
                visible: { opacity: 0.5 },
                hidden: { opacity: 0 },
              }}
              transition={{ duration: 0.7 }}
              sx={{
                position: "absolute",
                left: "-2vw",
                zIndex: -1,
                backgroundImage: `radial-gradient(50% 50% at 50% 50%,#7575fd 0,transparent 100%)`,
                width: 200,
                height: 200,
                borderRadius: "50%",

                top: "-5vh",
              }}
            />
            {/* End Light Bulb Effect */}
          </Box>
          <Typography>{description}</Typography>
          <Box>
            <Button
              onClick={() =>
                triggerContactUsPopUp({
                  isTriggered: true,
                  variant: `Inquiry About ${title}`,
                })
              }
              variant="outlined"
              size="large"
              sx={{ mt: 3 }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

// -------------------------------------------------------------------------------------------------------

function ServicesOverview() {
  return (
    <Box sx={{ py: 8, position: "relative" }}>
      <Container maxWidth="xl">
        <Grid2 container rowSpacing={1}>
          <Grid2 xs={12}>
            <ServiceCard
              animaiton={threeDWebExperience}
              title="3D Web Experiences"
              description={`Immerse yourself in the future of web interaction with our 3D Web Experiences. We combine cutting-edge 3D technology with innovative web design to create captivating, interactive online environments. These immersive experiences are tailored to engage your audience in a unique and memorable way, setting your digital presence apart from the rest.`}
            />
          </Grid2>
          <Grid2 xs={12}>
            <ServiceCard
              reverseLayout
              animaiton={mobileAppDevelopment}
              title="Mobile App Development"
              description={`Our Mobile App Development service transforms your ideas into reality on the go. Leveraging the latest technologies in iOS and Android platforms, we create sleek, user-friendly, and high-performing mobile applications. Whether for business, entertainment, or daily utility, our apps are designed to deliver a seamless and engaging user experience, ensuring your app stands out in a crowded marketplace.`}
            />
          </Grid2>
          <Grid2 xs={12}>
            <ServiceCard
              animaiton={webDesign}
              title="Web Design"
              description={`Experience elegance and functionality fused in our Web Design services. We craft visually stunning and intuitively navigable websites that capture your brand's essence and engage your audience. Our approach combines modern aesthetics with user-centered design principles, ensuring your website not only looks great but also performs excellently across all devices`}
            />
          </Grid2>
          <Grid2 xs={12}>
            <ServiceCard
              reverseLayout
              animaiton={branding}
              title="Branding"
              description={`Our Branding service is all about crafting your unique story and visual identity. We delve deep into your brand's ethos, values, and aspirations to create a cohesive and resonant brand image. From logos to color palettes and typography, our strategic approach ensures your brand stands out, connects emotionally with your audience, and fosters lasting brand loyalty.`}
            />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default ServicesOverview;
