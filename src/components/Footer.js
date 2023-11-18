"use client";
// next
import { default as NextLink } from "next/link";
// @mui
import { styled } from "@mui/material/styles";
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  Stack,
  Box,
  IconButton,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Logo from "./Logo";

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: "Based On Tech",
    children: [
      { name: "Home", href: "plans-pricings" },
      { name: "Portfolio", href: "/our-projects" },
      { name: "Contact us", href: "/contact-us" },
    ],
  },
  {
    headline: "Contact",
    children: [
      { name: "info@basedontech.com", href: "mailto:info@basedontech.com" },
      { name: "(+20) 100-44-2-77-12", href: "tel:+20-100-44-2-77-12" },
    ],
  },
];

const RootStyle = styled(Container)(({ theme }) => ({
  position: "relative",
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <RootStyle maxWidth="xl">
        <Divider />
        <Container maxWidth="xl" sx={{ pt: 10 }}>
          <Grid
            container
            justifyContent={{ xs: "center", md: "space-between" }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="start"
                width={60}
                height={60}
              >
                <Logo />
              </Box>
            </Grid>
            <Grid item xs={8} md={3}>
              <Typography variant="body2" sx={{ pr: { md: 5 } }}>
                Based in Cairo,{" "}
                <Typography component="strong" color="primary">
                  Based On Tech
                </Typography>{" "}
                is a creative software startup dedicated to crafting custom,
                innovative solutions. We're not just coders; we're partners in
                your business growth, offering flexible, unique, and impactful
                software designed to think with and for you. Join us in
                transforming ideas into digital excellence.
              </Typography>

              <Stack
                direction="row"
                justifyContent={{ xs: "center", md: "flex-start" }}
                sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
              >
                <Box marginRight={1}>
                  <IconButton
                    onClick={() =>
                      window.open("https://www.facebook.com/CoachSama/")
                    }
                  >
                    <FacebookIcon sx={{ color: "#3b5998" }} />
                  </IconButton>
                </Box>

                <Box marginRight={1}>
                  <IconButton
                    onClick={() =>
                      window.open("https://www.instagram.com/coach.sama/")
                    }
                  >
                    <InstagramIcon sx={{ color: "#833AB4" }} />
                  </IconButton>
                </Box>
                <Box marginRight={1}>
                  <IconButton
                    onClick={() =>
                      window.open("https://www.youtube.com/@coachsama")
                    }
                  >
                    <YouTubeIcon sx={{ color: "#c4302b" }} />
                  </IconButton>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} md={7}>
              <Stack
                spacing={5}
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
              >
                {LINKS.map((list) => (
                  <Stack key={list.headline} spacing={2}>
                    <Typography component="p" variant="overline">
                      {list.headline}
                    </Typography>
                    {list.children.map((link) => (
                      <Link
                        component={NextLink}
                        key={link.name}
                        href={link.href}
                        passHref
                        color="inherit"
                        variant="body2"
                        sx={{ display: "block" }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>

          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Typography
              component="p"
              variant="body2"
              sx={{
                mt: 10,
                pb: 5,
                fontSize: 13,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              © 2023. <strong>Based On Tech</strong> All rights reserved <br />
              <strong>Developed With All Love & Passion ❤️</strong>
            </Typography>
          </Box>
        </Container>
      </RootStyle>
    </Box>
  );
}
