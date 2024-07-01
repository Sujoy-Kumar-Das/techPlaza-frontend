"use client";

import { Box } from "@mui/material";
import { useState } from "react";

export default function ProductSectionModal() {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        width: {
          lg: "60%",
          md: "80%",
          sm: "100%",
          backgroundColor: "background.paper",
        },
      }}
    ></Box>
  );
}
