import React from "react";
// @Mui
import { Box, Container, Typography } from "@mui/material";

// ------------------------------------------------------------------------

function AbourUsText() {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            Welcome to
            <Typography
              component="span"
              variant="h5"
              sx={{ ml: 1 }}
              color="primary"
            >
              Based on Tech
            </Typography>
            , your creative software partner based in Cairo. At the core of our
            ethos is a commitment to custom-coding software solutions that are
            not just functional but visionary. We dive deep into the heart of
            your business, understanding its unique challenges and potential, to
            bring forth innovative and creative ideas. Our approach is
            collaborative and client-centric; we don't just work for you, we
            work with you. From ideation to execution, our team is dedicated to
            crafting solutions that drive your business forward, ensuring
            scalable growth and measurable success. Join us on this journey of
            technological transformation, where every line of code we write is a
            step towards realizing your business dreams.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default AbourUsText;
