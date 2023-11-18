"use client";
import React, { useEffect } from "react";
// Next
import Link from "next/link";
// Framer motion
import { motion, useAnimation } from "framer-motion";
// @Mui
import { Box, Typography, useTheme } from "@mui/material";

// ---------------------------------------------------------------------------------------------------------------

const HeaderLink = ({
  headerLink,
  pathname,
  setHoverIndex,
  hoverIndex,
  isOffset,
}) => {
  const theme = useTheme();
  const controls = useAnimation();

  useEffect(() => {
    if (pathname === headerLink.href || hoverIndex === headerLink.index) {
      controls.start({
        width: "70%",
        transition: { duration: 1.5, ease: "easeInOut" },
      });
    } else {
      controls.start({
        width: "0%",
        transition: { duration: 1.5, ease: "easeInOut" },
      });
    }
  }, [controls, pathname, headerLink.href, hoverIndex]);

  return (
    <Box
      key={headerLink.index}
      sx={{ display: "flex", alignItems: "center", mx: 0.5 }}
      onMouseEnter={() => setHoverIndex(headerLink.index)}
      onMouseLeave={() => setHoverIndex(-1)}
    >
      <Box
        component={motion.span}
        sx={{
          display: "inline-block",
          position: "relative",
          p: 1,
          borderRadius: "50%",
        }}
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={controls}
          style={{
            position: "absolute",
            bottom: "0",
            left: "7px",
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            height: "4px",
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            textDecoration: "none",
            color:
              pathname === headerLink.href ? "transparent" : "text.primary",
            background:
              pathname === headerLink.href || hoverIndex === headerLink.index
                ? `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                : "none",
            WebkitBackgroundClip: "text",
            MozBackgroundClip: "text",
            backgroundClip: "text",
            "&:hover": {
              color: "transparent",
              background: `linear-gradient(to right,${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              MozBackgroundClip: "text",
              backgroundClip: "text",
            },
          }}
          component={Link}
          href={headerLink.href}
          passHref
        >
          {headerLink.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderLink;
