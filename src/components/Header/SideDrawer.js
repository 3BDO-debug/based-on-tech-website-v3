import React from "react";
// Next
import Link from "next/link";
// recoil
import { useSetRecoilState } from "recoil";
// Iconify
import { Icon } from "@iconify/react";
// @Mui
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Button,
  styled,
} from "@mui/material";
// atoms
import { contactUsPopUpAtom } from "@/recoil/atoms";
//
import Logo from "../Logo";

// ------------------------------------------------------------------------------------------------------------------

function SideDrawer({ isTriggered, closeHandler, navLinks }) {
  const NavLink = styled(Link)(({ theme }) => ({
    ...theme.typography.subtitle1,
    color: theme.palette.text.primary,
    textDecoration: "none",
  }));

  const triggerContactUsPopUp = useSetRecoilState(contactUsPopUpAtom);

  return (
    <Drawer anchor="left" open={isTriggered} onClose={closeHandler}>
      <div
        style={{ width: 250 }}
        role="presentation"
        onClick={closeHandler}
        onKeyDown={closeHandler}
      >
        {/* Logo Section */}
        <Box sx={{ padding: "16px", textAlign: "center" }}>
          {/* Replace with your logo */}
          <Logo />
        </Box>

        <Divider />

        {/* Drawer Items */}
        <List>
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.href} passHref>
              <ListItem button component="a">
                {link.name}
              </ListItem>
            </NavLink>
          ))}
        </List>

        <Divider />

        {/* Social Media Section */}
        <div
          style={{ display: "flex", justifyContent: "center", padding: "16px" }}
        >
          <IconButton aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
        </div>

        <Divider />

        {/* Contact Us Button */}
        <div style={{ padding: "16px", textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Icon icon="ion:rocket-outline" />}
            size="medium"
            onClick={() => {
              triggerContactUsPopUp({
                isTriggered: true,
                variant: "General Inquiry",
              });
            }}
          >
            Start Project
          </Button>
          <Button
            variant="outlined"
            startIcon={<Icon icon="fluent:call-12-filled" />}
            color="primary"
            size="medium"
            sx={{ mt: 2 }}
            onClick={() => {
              triggerContactUsPopUp({
                isTriggered: true,
                variant: "General Inquiry",
              });
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default SideDrawer;
