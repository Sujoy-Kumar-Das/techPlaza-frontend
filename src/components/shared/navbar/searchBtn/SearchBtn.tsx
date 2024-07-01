"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import SearchBtnModal from "./SearchBtnModal";

export default function SearchBtn() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton
        size="small"
        sx={{ ml: 2 }}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Box
          sx={{
            color: "text.primary",
            height: 32,
            width: 32,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchIcon />
        </Box>
      </IconButton>
      <SearchBtnModal open={open} setOpen={setOpen} />
    </>
  );
}
