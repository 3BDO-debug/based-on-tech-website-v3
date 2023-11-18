"use client";
import React from "react";
// recoil
import { useRecoilState } from "recoil";
// atoms
import { reachUsPopUpAtom } from "@/recoil/atoms";
// Iconify
import { Icon } from "@iconify/react";
// @Mui
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

// -------------------------------------------------------------------------------------------------------

function ReachUsPopUp() {
  const theme = useTheme();

  const [reachUsPopUp, setReachUsPopUp] = useRecoilState(reachUsPopUpAtom);

  const closeHandler = () => {
    setReachUsPopUp(false);
  };

  const socialLinks = [
    {
      label: "Email Us",
      description: "Reach us via email now,",
      link: "mailto:info@basedontech.com",
      icon: "line-md:email",
      color: theme.palette.primary.main,
    },
    {
      label: "WhatsApp Us",
      description: "Reach us via email now,",
      link: "https://wa.me/+201017003476",
      icon: "logos:whatsapp-icon",
    },
    {
      label: "DM Us",
      description: "Reach us via email now,",
      link: "https://www.instagram.com/based_on_tech/",
      icon: "skill-icons:instagram",
    },
    {
      label: "Let's Connect On LinkedIn",
      description: "Reach us via email now,",
      link: "https://www.linkedin.com/company/basedontech/",
      icon: "skill-icons:linkedin",
    },
    {
      label: "Follow Us On Facebook",
      description: "Reach us via email now,",
      link: "https://www.facebook.com/Based.On.T",
      icon: "logos:facebook",
    },
    {
      label: "Watch Our Videos",
      description: "Reach us via email now,",
      link: "https://www.youtube.com/channel/UCtZVorrnQDOzmhgCox7C-nQ",
      icon: "logos:youtube-icon",
    },
  ];

  return (
    <Dialog onClose={closeHandler} open={reachUsPopUp} fullWidth>
      <DialogTitle>
        <Typography
          sx={{
            background: "linear-gradient(to right, #7675FD, #40FFEF)",
            WebkitBackgroundClip: "text",
            MozBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            mr: 2,
          }}
          variant="h2"
        >
          Reach Us Now.
        </Typography>
        <Typography sx={{ mt: 1 }} variant="subtitle1">
          We are just one click away from you.
        </Typography>
        <Divider sx={{ my: 3 }} />
      </DialogTitle>
      <DialogContent>
        <List>
          {socialLinks.map((socialLink, index) => (
            <ListItem
              key={index}
              button
              component="a"
              target="__blank"
              href={socialLink.link}
            >
              <ListItemIcon>
                <Icon
                  icon={socialLink.icon}
                  width={40}
                  height={40}
                  color={Boolean(socialLink.color) ? socialLink.color : ""}
                />
              </ListItemIcon>
              <ListItemText
                primary={socialLink.label}
                secondary={socialLink.description}
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          color="error"
          onClick={closeHandler}
          variant="outlined"
          endIcon={<Icon icon="line-md:menu-to-close-alt-transition" />}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ReachUsPopUp;
