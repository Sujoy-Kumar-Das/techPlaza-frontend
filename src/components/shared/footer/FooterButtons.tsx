"use client";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { IconButton } from "@mui/material";
import Link from "next/link";
export default function FooterButtons() {
  return (
    <>
      <Link href="/">
        <IconButton size="small" sx={{ color: "#ffff" }}>
          <FacebookOutlinedIcon />
        </IconButton>
      </Link>
      <Link href="/">
        <IconButton size="small" sx={{ color: "#ffff" }}>
          <XIcon />
        </IconButton>
      </Link>
      <Link href="/">
        <IconButton size="small" sx={{ color: "#ffff" }}>
          <InstagramIcon />
        </IconButton>
      </Link>
    </>
  );
}
