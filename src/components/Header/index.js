"use client";
import React, { useState } from "react";
// Next
import Image from "next/image";
import { usePathname } from "next/navigation";
// Recoil
import { useSetRecoilState } from "recoil";
// @Mui
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
// iconify
import { Icon } from "@iconify/react";
// hooks
import useOffSetTop from "@/hooks/useOffSetTop";
// utils
import cssStyles from "@/utils/cssStyles";
// atoms
import { contactUsPopUpAtom, reachUsPopUpAtom } from "@/recoil/atoms";
//
import HeaderLink from "./HeaderLink";
import Logo from "../Logo";
import SideDrawer from "./SideDrawer";

// -----------------------------------------------------------------------------

const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 90,
};

// -----------------------------------------------------------------------------

const HEADER_LINKS = [
  { name: "Home", href: "/" },
  { name: "Our Projects", href: "/our-projects" },
  { name: "About Us", href: "/about-us" },
  { name: "Who Am I", href: "https://abdelrahman-essam.basedontech.com" },
];

// -----------------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// // -----------------------------------------------------------------------------

function Header() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const pathname = usePathname();
  const theme = useTheme();

  const [hoverIndex, setHoverIndex] = useState(-1);

  const [sideDrawer, triggerSideDrawer] = useState(false);

  const triggerContactUsPopUp = useSetRecoilState(contactUsPopUpAtom);
  const triggerReachUsPopUp = useSetRecoilState(reachUsPopUpAtom);

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT },
          }),
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: "3vh",
          }}
        >
          {/* Logo */}
          <Box>
            <Logo />
          </Box>
          {/* End Logo */}

          {/* Header Link */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
            }}
          >
            {HEADER_LINKS.map((headerLink, index) => (
              <HeaderLink
                key={index}
                headerLink={{ ...headerLink, index }}
                pathname={pathname}
                hoverIndex={hoverIndex}
                setHoverIndex={setHoverIndex}
                isOffset={isOffset}
              />
            ))}
          </Box>

          {/* End Header Links */}

          {/* CTAs */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => triggerReachUsPopUp(true)}
            >
              <Tooltip title="Contact Us Now">
                <Icon
                  icon="fluent:call-12-regular"
                  width={35}
                  height={35}
                  color={theme.palette.primary.main}
                />
              </Tooltip>
            </IconButton>
            <IconButton
              onClick={() => triggerSideDrawer(true)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Icon icon="material-symbols:menu" width={35} height={35} />
            </IconButton>
            <Button
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
              startIcon={<Icon icon="mdi:account-circle-outline" />}
              variant="outlined"
              onClick={() =>
                triggerContactUsPopUp({
                  variant: "General Inquiry",
                  isTriggered: true,
                })
              }
            >
              Contact Us
            </Button>
          </Box>
          {/* End CTAs */}
        </Container>
      </ToolbarStyle>
      <SideDrawer
        isTriggered={sideDrawer}
        closeHandler={() => triggerSideDrawer(false)}
        navLinks={HEADER_LINKS}
      />
      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}

export default Header;
