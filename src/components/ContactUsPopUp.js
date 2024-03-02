"use client";
import React, { useCallback, useRef, useState } from "react";
// next
import Image from "next/image";
// recoil
import { useRecoilState, useSetRecoilState } from "recoil";
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
import { alertAtom, contactUsPopUpAtom } from "@/recoil/atoms";
// __apis__
import { contactUsRequest } from "@/__apis__/contactUs";
// assets
import contactUsIllustration from "@/assets/contact-us-pop-up-illustration.jpg";
//
import Scrollbar from "./Scrollbar";
import MuiPhoneInput from "./MuiPhoneInput";

// ------------------------------------------------------------------------------------

function ContactUsPopUp() {
  const theme = useTheme();

  const [contactUsPopUp, setContactUsPopUp] =
    useRecoilState(contactUsPopUpAtom);

  const [reachedBottom, setReachedBottom] = useState(false);

  const triggerAlert = useSetRecoilState(alertAtom);

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
      phoneNumber: "+",
      message: "",
      variant: "general-inquiry",
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
        .matches(
          /^\+(?:[0-9] ?){6,14}[0-9]$/,
          "Must be a valid international phone number"
        )
        .required("Whatsapp Number Is Required"),
      message: Yup.string()
        .required("Message is required")
        .min(20, "Message must be at least 20 characters long"),
    }),
    onSubmit: async (values, { resetForm, setFieldError }) => {
      const offensiveWords = [
        // You might need to escape special regex characters if they are part of your offensive words
        "فاشل", // This will match فاشلة, فاشلين, فاشله, and any word starting with فاشل
        "حرام",
        "غبي",
        "حسبي الله", // This might be too broad, consider the implications
        "دمر",
        "حرامي",
      ];

      // Function to check if the message contains any offensive word patterns using regex
      const containsOffensivePatterns = (message) => {
        return offensiveWords.some((pattern) => {
          // Create a regex from each pattern, looking for words that contain the pattern
          const regex = new RegExp(pattern, "i"); // "i" for case-insensitive, though not relevant for Arabic
          return regex.test(message);
        });
      };

      // Usage example:
      if (containsOffensivePatterns(values.message)) {
        triggerAlert({
          triggered: true,
          type: "error",
          message:
            "Your Message Is Very Toxic, You Need To Consider Being Positive & Stop Harming People. If You Have Issue With Us Reach Us Via WhatsApp.",
        });
        setFieldError("message", "Your Message Is Very Toxic.");
        return; // Prevent form submission
      }

      // Proceed with submitting the form if no offensive words are detected
      try {
        await contactUsRequest(values);
        triggerAlert({
          triggered: true,
          type: "success",
          message: "Your message has been successfully sent.",
        });
        resetForm();
        // Close the popup or perform other actions as needed
      } catch (error) {
        // Handle submission error
        triggerAlert({
          triggered: true,
          type: "error",
          message:
            "An error occurred while submitting your message. Please try again later.",
        });
      }
    },
  });

  const {
    values,
    setFieldValue,
    getFieldProps,
    touched,
    errors,
    handleSubmit,
    isSubmitting,
    dirty,
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
      <Paper sx={{ height: "100%", overflowY: { xs: "hidden" } }}>
        <Grid container height="100%" alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: "100vh",
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
            <Box sx={{ overflowY: "scroll" }}>
              <Grid container paddingY={4} paddingX={3} spacing={2}>
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        background:
                          "linear-gradient(to right, #7675FD, #40FFEF)",
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
                  <Box
                    containerRef={scrollRef}
                    sx={{
                      height: { xs: "40vh", md: "inherit" },
                      overflowY: { xs: "auto" },
                    }}
                    onScroll={handleScroll}
                  >
                    <Grid sx={{ pt: 1 }} container spacing={3}>
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
                            setFieldValue("phoneNumber", event)
                          }
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
                  </Box>
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
                      pt: 1,
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
                      disabled={!dirty}
                      loading={isSubmitting}
                      onClick={handleSubmit}
                    >
                      Send
                    </LoadingButton>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Dialog>
  );
}

export default ContactUsPopUp;
