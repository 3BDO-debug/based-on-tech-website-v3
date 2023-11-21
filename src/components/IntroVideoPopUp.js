import React from "react";
// @Mui
import { Dialog } from "@mui/material";

// ----------------------------------------------------------------------------------------------------

function IntroVideoPopUp({ isTriggered, closeHandler }) {
  return (
    <Dialog fullWidth maxWidth="xl" open={isTriggered} onClose={closeHandler}>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ApMFUTOae8c?si=MdtPbK8pYasMj-VV"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </Dialog>
  );
}

export default IntroVideoPopUp;
