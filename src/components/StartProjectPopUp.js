"use client";
import React, { useRef, useState } from "react";
// Recoil
import { useRecoilState, useSetRecoilState } from "recoil";
// Framer
import { motion } from "framer-motion";
// Lottie
import Lottie from "lottie-react";
// Iconify
import { Icon } from "@iconify/react";
// Formik
import { useFormik } from "formik";
// Yup
import * as Yup from "yup";
// @Mui
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Divider,
  FormHelperText,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// atoms
import { alertAtom, startProjectPopUpAtom } from "@/recoil/atoms";
// __apis__
import { startProjectRequest } from "@/__apis__/projectRequest";
// assets
import startProjectAnimation from "@/assets/animations/start-project.json";
import Scrollbar from "./Scrollbar";
import MuiPhoneInput from "./MuiPhoneInput";

// ------------------------------------------------------------------------------------------------------------

function StartProjectPopUp() {
  const theme = useTheme();

  const [startProjectPopUp, setStartProjectPopUp] = useRecoilState(
    startProjectPopUpAtom
  );

  const [reachedBottom, setReachedBottom] = useState(false);

  const closeHandler = () => {
    setStartProjectPopUp(false);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const triggerAlert = useSetRecoilState(alertAtom);

  const scrollRef = useRef();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "+201010101010",
      projectField: "",
      projectBudget: "",
      projectDescription: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .required("First Name is required")
        .max(50, "First Name must be less than 50 characters"),
      lastName: Yup.string()
        .required("Last Name is required")
        .max(50, "Last Name must be less than 50 characters"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      phoneNumber: Yup.string()
        .matches(
          /^\+(?:[0-9] ?){6,14}[0-9]$/,
          "Must be a valid international phone number"
        )
        .required("Whatsapp Number Is Required"),
      projectField: Yup.string().required("Project Field is required"),
      projectBudget: Yup.string().required("Project Budget is required"),
      projectDescription: Yup.string()
        .required("Project Description is required")
        .min(20, "Project Description must be at least 20 characters"),
    }),
    onSubmit: async (values, { resetForm }) => {
      await startProjectRequest(values)
        .then((response) => {
          triggerAlert({
            triggered: true,
            type: "success",
            message:
              "We have recieved your project request, we will reply within 24 hours!.",
          });
          resetForm();
          closeHandler();
        })
        .catch((error) => {
          console.log("Error submitting project request form", error);
          triggerAlert({
            triggered: true,
            type: "error",
            message:
              "Something wrong happened while proceeding your request, please reach us via (Phone call, whatsapp or Email Us).",
          });
        });
    },
  });

  const {
    values,
    setFieldValue,
    getFieldProps,
    errors,
    touched,
    dirty,
    handleSubmit,
    isSubmitting,
  } = formik;

  const bounceAnimation = {
    y: ["0%", "20%", "0%"], // Bounce up and down
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  const handleScroll = (event) => {
    const target = event.currentTarget;
    const bottom =
      target.scrollHeight - target.scrollTop <= target.clientHeight + 1; // +1 for potential rounding errors
    setReachedBottom(bottom);
  };

  const handleScrollDownForm = () => {
    if (scrollRef.current) {
      // Scroll down by 100px, or adjust as needed
      scrollRef.current.scrollBy({ top: 100, behavior: "smooth" });
    }
  };

  return (
    <Dialog
      open={startProjectPopUp}
      onClose={closeHandler}
      maxWidth="lg"
      fullWidth
    >
      <Paper
        ref={scrollRef}
        onScroll={handleScroll}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "80vh",
          overflowY: "auto", // Make the Paper scrollable
        }}
      >
        <Grid container columnSpacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Lottie animationData={startProjectAnimation} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container pt={4} px={3}>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      background: "linear-gradient(to right, #7675FD, #40FFEF)",
                      WebkitBackgroundClip: "text",
                      MozBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                    variant="h2"
                  >
                    Start Project
                  </Typography>
                  <Typography variant="h6">
                    Congratulations 🎉!, you are about to start a creative
                    project with us now.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 3 }} />
              </Grid>
              {/* Form Fields */}
              <Grid item xs={12}>
                <Grid
                  container
                  sx={{
                    position: "relative",
                    height: "100%",
                    overflowY: { xs: "hidden", md: "scroll" },
                  }}
                  spacing={3}
                >
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="First Name"
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
                      label="Last Name"
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
                      label="Phone Number"
                      value={values.phoneNumber}
                      onChange={(event) => setFieldValue("phoneNumber", event)}
                      error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon width={30} height={30} icon="line-md:email" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Email"
                      value={values.email}
                      onChange={(event) =>
                        setFieldValue("email", event.target.value)
                      }
                      {...getFieldProps("email")}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon width={30} height={30} icon="line-md:email" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Choose Your Field"
                      value={values.projectField}
                      onChange={(event) =>
                        setFieldValue("projectField", event.target.value)
                      }
                      {...getFieldProps("projectField")}
                      error={
                        touched.projectField && Boolean(errors.projectField)
                      }
                      helperText={touched.projectField && errors.projectField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon width={30} height={30} icon="ion:rocket" />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                      select
                    >
                      <MenuItem value="e-commerce">E-commerce</MenuItem>
                      <MenuItem value="education">Education</MenuItem>
                      <MenuItem value="healthcare">Healthcare</MenuItem>
                      <MenuItem value="finance">Finance</MenuItem>
                      <MenuItem value="retail">Retail</MenuItem>
                      <MenuItem value="entertainment">Entertainment</MenuItem>
                      <MenuItem value="real-estate">Real Estate</MenuItem>
                      <MenuItem value="travel">Travel</MenuItem>
                      <MenuItem value="logistics">Logistics</MenuItem>
                      <MenuItem value="technology">Technology</MenuItem>
                      <MenuItem value="gaming">Gaming</MenuItem>
                      <MenuItem value="marketing">Marketing</MenuItem>
                      <MenuItem value="non-profit">Non-profit</MenuItem>
                      <MenuItem value="agriculture">Agriculture</MenuItem>
                      <MenuItem value="manufacturing">Manufacturing</MenuItem>
                      <MenuItem value="energy">Energy</MenuItem>
                      <MenuItem value="automotive">Automotive</MenuItem>
                      <MenuItem value="telecommunications">
                        Telecommunications
                      </MenuItem>
                      <MenuItem value="construction">Construction</MenuItem>
                      <MenuItem value="publishing">Publishing</MenuItem>
                      <MenuItem value="fashion">Fashion</MenuItem>
                      <MenuItem value="food-beverage">Food & Beverage</MenuItem>
                      <MenuItem value="sports">Sports</MenuItem>
                      <MenuItem value="legal">Legal</MenuItem>
                      <MenuItem value="hospitality">Hospitality</MenuItem>
                      <MenuItem value="arts-culture">Arts & Culture</MenuItem>
                      <MenuItem value="environmental">Environmental</MenuItem>
                      <MenuItem value="government">Government</MenuItem>
                      <MenuItem value="research-development">
                        Research & Development
                      </MenuItem>
                      <MenuItem value="biotechnology">Biotechnology</MenuItem>
                      <MenuItem value="pharmaceutical">Pharmaceutical</MenuItem>
                      <MenuItem value="aerospace">Aerospace</MenuItem>
                      <MenuItem value="media-communications">
                        Media & Communications
                      </MenuItem>
                      <MenuItem value="consulting">Consulting</MenuItem>
                      <MenuItem value="security">Security</MenuItem>
                      <MenuItem value="insurance">Insurance</MenuItem>
                      <MenuItem value="human-resources">
                        Human Resources
                      </MenuItem>
                      <MenuItem value="cosmetics">Cosmetics</MenuItem>
                      <MenuItem value="architecture">Architecture</MenuItem>
                      <MenuItem value="digital-media">Digital Media</MenuItem>
                      <MenuItem value="cybersecurity">Cybersecurity</MenuItem>
                      <MenuItem value="artificial-intelligence">
                        Artificial Intelligence
                      </MenuItem>
                      <MenuItem value="blockchain">Blockchain</MenuItem>
                      <MenuItem value="virtual-reality">
                        Virtual Reality
                      </MenuItem>
                      <MenuItem value="augmented-reality">
                        Augmented Reality
                      </MenuItem>
                      <MenuItem value="internet-of-things">
                        Internet of Things
                      </MenuItem>
                      <MenuItem value="data-analytics">Data Analytics</MenuItem>
                      <MenuItem value="cloud-computing">
                        Cloud Computing
                      </MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Select Your Budget"
                      value={values.projectBudget}
                      onChange={(event) =>
                        setFieldValue("projectBudget", event.target.value)
                      }
                      {...getFieldProps("projectBudget")}
                      error={
                        touched.projectBudget && Boolean(errors.projectBudget)
                      }
                      helperText={touched.projectBudget && errors.projectBudget}
                      fullWidth
                      select
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon width={30} height={30} icon="tdesign:money" />
                          </InputAdornment>
                        ),
                      }}
                    >
                      <MenuItem value="less-than-100-usd">
                        Less than 100 USD
                      </MenuItem>
                      <MenuItem value="100-300-usd">100 - 300 USD</MenuItem>
                      <MenuItem value="500-1000-usd">500 - 1000 USD</MenuItem>
                      <MenuItem value="more-than-1000-usd">
                        More than 1000 USD
                      </MenuItem>
                      <MenuItem value="i-dont-know-my-budget">
                        I dont know my budget
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Project Description"
                      value={values.projectDescription}
                      onChange={(event) =>
                        setFieldValue("projectDescription", event.target.value)
                      }
                      {...getFieldProps("projectDescription")}
                      error={
                        touched.projectDescription &&
                        Boolean(errors.projectDescription)
                      }
                      helperText={
                        touched.projectDescription && errors.projectDescription
                      }
                      fullWidth
                      multiline
                      rows={4}
                    />
                    <FormHelperText sx={{ color: "primary.main" }}>
                      Please write a brief about your project to be able to
                      precisely help you.
                    </FormHelperText>
                  </Grid>
                </Grid>
              </Grid>
              {/* End Form Fields */}
            </Grid>
          </Grid>
        </Grid>
        {!reachedBottom && (
          <Box
            component={motion.div}
            animate={bounceAnimation}
            sx={{
              display: { xs: "flex", md: "none" },
              position: "sticky",
              right: 0,
              bottom: "10vh",
              zIndex: 1000000,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <IconButton onClick={handleScrollDownForm}>
              <Icon
                color={theme.palette.primary.main}
                width={30}
                height={30}
                icon="solar:double-alt-arrow-down-outline"
              />
            </IconButton>
          </Box>
        )}
        <Paper
          sx={{
            position: { xs: "sticky", md: "absolute" },
            zIndex: 10,
            bottom: { xs: "0vh", md: "3vh" },
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            px: 4,
            py: 2,
          }}
        >
          <Button
            onClick={closeHandler}
            variant="outlined"
            color="error"
            endIcon={<Icon icon="line-md:menu-to-close-alt-transition" />}
          >
            Cancel
          </Button>
          <LoadingButton
            endIcon={<Icon icon="line-md:telegram" />}
            variant="contained"
            sx={{ ml: 2 }}
            onClick={handleSubmit}
            loading={isSubmitting}
            disabled={!dirty}
          >
            Send
          </LoadingButton>{" "}
        </Paper>
      </Paper>
    </Dialog>
  );
}

export default StartProjectPopUp;
