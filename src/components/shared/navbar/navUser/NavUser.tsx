"use client";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Logout from "@mui/icons-material/Logout";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
export default function NavUser() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="My Profile">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
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
              <PermIdentityOutlinedIcon />
            </Box>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PermIdentityOutlinedIcon fontSize="small" />{" "}
          </ListItemIcon>
          <Box>
            <Typography>Sujoy Kumar Das</Typography>
            <Typography>sujoykumardas75@gmail.com</Typography>
          </Box>{" "}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LocalMallOutlinedIcon fontSize="small" />{" "}
          </ListItemIcon>
          My Profile
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LocalMallOutlinedIcon fontSize="small" />{" "}
          </ListItemIcon>
          Orders
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FavoriteBorderOutlinedIcon fontSize="small" />{" "}
          </ListItemIcon>
          Wish List
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PaidOutlinedIcon fontSize="small" />{" "}
          </ListItemIcon>
          Payments
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
