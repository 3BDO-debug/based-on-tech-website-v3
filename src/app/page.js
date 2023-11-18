"use client";
// @Mui
import { Box } from "@mui/material";
// Sections
import HeroBanner from "@/sections/HomePage/HeroBanner";
import PortfolioOverview from "@/sections/HomePage/PortfolioOverview";
import ServicesOverview from "@/sections/HomePage/ServicesOverview";
import ContactUs from "@/sections/HomePage/ContactUs";
import { useRecoilValue } from "recoil";
import { heroBannerSceneLoadingAtom } from "@/recoil/atoms";
import ModelLoadingScreen from "@/components/ModelLoadingScreen";

// ------------------------------------------------------------------------

export default function HomePage() {
  const heroBannerSceneLoading = useRecoilValue(heroBannerSceneLoadingAtom);

  return (
    <Box sx={{ overflowX: "hidden", position: "relative" }}>
      {/* Hero Banner */}
      <HeroBanner />
      <ServicesOverview />
      <PortfolioOverview />
      <ContactUs />
    </Box>
  );
}
