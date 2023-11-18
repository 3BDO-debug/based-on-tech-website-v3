"use client";
import React, { useCallback, useRef, useState } from "react";
// next
import Image from "next/image";
// recoil
import { useRecoilState } from "recoil";
// Yup
import * as Yup from "yup";
// Formik
import { useFormik } from "formik";
// Iconify
import { Icon } from "@iconify/react";
// Framer
import { motion } from "framer-motion";
// @Mui
import {
  Box,
  Button,
  Container,
  Dialog,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// atoms
import { contactUsPopUpAtom } from "@/recoil/atoms";
// assets
import contactUsIllustration from "@/assets/contact-us-pop-up-illustration.jpg";
//
import Scrollbar from "./Scrollbar";
import MuiPhoneInput from "./MuiPhoneInput";

// -----------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------

function ContactUsPopUp() {
  const theme = useTheme();

  const [contactUsPopUp, setContactUsPopUp] =
    useRecoilState(contactUsPopUpAtom);

  const [reachedBottom, setReachedBottom] = useState(false);

  const handleScroll = (event) => {
    const target = event.currentTarget;
    const bottom =
      target.scrollHeight - target.scrollTop <= target.clientHeight + 1; // +1 for potential rounding errors
    setReachedBottom(bottom);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .required("First name is required")
        .max(50, "First name must be less than 50 characters"),

      lastName: Yup.string()
        .required("Last name is required")
        .max(50, "Last name must be less than 50 characters"),

      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address")
        .max(100, "Email must be less than 100 characters"),

      phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Phone number must be only digits")
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number must be less than 15 digits"),

      message: Yup.string()
        .required("Message is required")
        .min(20, "Message must be at least 20 characters long"),
    }),
  });

  const {
    values,
    setFieldValue,
    getFieldProps,
    touched,
    errors,
    handleSubmit,
    isSubmitting,
  } = formik;

  const closeHandler = useCallback(() => {
    setContactUsPopUp({ isTriggered: false, variant: "" });
  }, [setContactUsPopUp]);

  const bounceAnimation = {
    y: ["0%", "20%", "0%"], // Bounce up and down
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  const scrollRef = useRef(null);
  const handleScrollDownForm = () => {
    if (scrollRef.current) {
      console.log("caught scoll");
      // Scroll down by 100px, or adjust as needed
      scrollRef.current.scrollBy({ top: 100, behavior: "smooth" });
    }
  };

  return (
    <Dialog
      open={contactUsPopUp.isTriggered}
      onClose={() => closeHandler()}
      maxWidth="lg"
      fullWidth
    >
      <Paper sx={{ height: "100%" }}>
        <Grid container height="100%" alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: "75vh",
                position: "relative",
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <Image
                src={contactUsIllustration}
                layout="fill"
                objectFit="cover"
                alt="Contact us now at based on tech for creative software solutions in cairo"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container paddingY={4} paddingX={3} spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
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
                    Contact Us
                  </Typography>
                  <Icon
                    width={45}
                    height={45}
                    color={theme.palette.grey[400]}
                    icon="line-md:coffee-loop"
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6">
                  We love to hear from you, drop us a message now.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 3 }} />
              </Grid>
              {/* Contact us form */}
              <Grid item xs={12}>
                <Scrollbar
                  containerRef={scrollRef}
                  sx={{ height: { xs: "40vh" }, overflow: "hidden" }}
                  onScroll={handleScroll}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="First name"
                        variant="outlined"
                        value={values.firstName}
                        onChange={(event) =>
                          setFieldValue("firstName", event.target.value)
                        }
                        {...getFieldProps("firstName")}
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Last name"
                        variant="outlined"
                        value={values.lastName}
                        onChange={(event) =>
                          setFieldValue("lastName", event.target.value)
                        }
                        {...getFieldProps("lastName")}
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MuiPhoneInput
                        variant="outlined"
                        label="Phone Number"
                        value={values.phoneNumber}
                        onChange={(event) =>
                          setFieldValue("phoneNumber", event.target.value)
                        }
                        {...getFieldProps("phoneNumber")}
                        error={
                          touched.phoneNumber && Boolean(errors.phoneNumber)
                        }
                        helperText={touched.phoneNumber && errors.phoneNumber}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon
                                width={30}
                                height={30}
                                icon="gridicons:phone"
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        value={values.email}
                        onChange={(event) =>
                          setFieldValue("email", event.target.value)
                        }
                        {...getFieldProps("email")}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon
                                width={30}
                                height={30}
                                icon="line-md:email"
                              />
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        label="Your message"
                        fullWidth
                        multiline
                        rows={3}
                        value={values.message}
                        onChange={(event) =>
                          setFieldValue("message", event.target.value)
                        }
                        {...getFieldProps("message")}
                        error={touched.message && Boolean(errors.message)}
                        helperText={touched.message && errors.message}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon
                                width={30}
                                height={30}
                                icon="line-md:text-box"
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                </Scrollbar>
                {!reachedBottom && (
                  <Box
                    component={motion.div}
                    animate={bounceAnimation}
                    sx={{
                      display: { xs: "flex", md: "none" },
                      position: "absolute",
                      right: 0,
                      bottom: "15vh",
                      zIndex: 1000,
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton>
                      <Icon
                        onClick={handleScrollDownForm}
                        color={theme.palette.primary.main}
                        width={30}
                        height={30}
                        icon="solar:double-alt-arrow-down-outline"
                      />
                    </IconButton>
                  </Box>
                )}
              </Grid>
              {/* End contact us form */}
              {/* CTAs */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                    mt: 6,
                  }}
                >
                  <Button
                    onClick={closeHandler}
                    variant="outlined"
                    color="error"
                    endIcon={
                      <Icon icon="line-md:menu-to-close-alt-transition" />
                    }
                  >
                    Cancel
                  </Button>
                  <LoadingButton
                    endIcon={<Icon icon="line-md:telegram" />}
                    variant="contained"
                    sx={{ ml: 2 }}
                  >
                    Send
                  </LoadingButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Dialog>
  );
}

export default ContactUsPopUp;
