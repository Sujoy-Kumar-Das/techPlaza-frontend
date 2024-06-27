import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box, Container, Stack, Typography } from "@mui/material";
import FooterButtons from "./FooterButtons";
import SubscribeNewsLetter from "./SubscribeNewsLetter";
export default function Footer() {
  return (
    <Box sx={{ background: "#021736", py: 8 }}>
      <Stack
        component={Container}
        direction={{ md: "column", lg: "row" }}
        justifyContent={{ md: "center", lg: "space-between" }}
        spacing={{ md: 3, lg: 0 }}
      >
        <Box>
          <Typography
            sx={{ color: "background.default", fontWeight: "medium", mb: 3 }}
          >
            Company
          </Typography>
          <Typography sx={{ color: "background.default", fontWeight: "light" }}>
            About
          </Typography>
          <Typography
            sx={{ color: "background.default", fontWeight: "light", my: 1 }}
          >
            Blogs
          </Typography>
          <Typography sx={{ color: "background.default", fontWeight: "light" }}>
            Returns
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ color: "background.default", fontWeight: "medium", mb: 3 }}
          >
            Info
          </Typography>
          <Typography sx={{ color: "background.default", fontWeight: "light" }}>
            How it works
          </Typography>
          <Typography
            sx={{ color: "background.default", fontWeight: "light", my: 1 }}
          >
            Our Polices
          </Typography>
          <Typography sx={{ color: "background.default", fontWeight: "light" }}>
            FAQ
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ color: "background.default", fontWeight: "medium", mb: 3 }}
          >
            Contact Us
          </Typography>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography
              sx={{ color: "background.default", fontWeight: "light" }}
            >
              <LocationOnOutlinedIcon />
            </Typography>
            <Typography
              sx={{ color: "background.default", fontWeight: "light" }}
            >
              Chandpur,Bangladesh
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography
              sx={{ color: "background.default", fontWeight: "light" }}
            >
              <LocalPhoneOutlinedIcon />
            </Typography>
            <Typography
              sx={{ color: "background.default", fontWeight: "light", my: 1 }}
            >
              +88 01319263016
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography
              sx={{ color: "background.default", fontWeight: "light" }}
            >
              <EmailOutlinedIcon />
            </Typography>
            <Typography
              sx={{ color: "background.default", fontWeight: "light" }}
            >
              sujoykumardas75@gmail.com
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{ color: "background.default", fontWeight: "medium", mb: 3 }}
          >
            Sing up for news letter
          </Typography>
          <SubscribeNewsLetter />
          <FooterButtons />
        </Box>
      </Stack>
    </Box>
  );
}
