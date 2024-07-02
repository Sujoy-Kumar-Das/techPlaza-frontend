import laptop from "@/assets/laptop.png";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function LaptopFeature() {
  return (
    <Card sx={{ bgcolor: "#EDECF1", padding: "20px", height: "270px" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography color="text.primary" component="h1" variant="h6">
              GET REWARDED
            </Typography>
            <Typography
              color="text.primary"
              component="h1"
              variant="h4"
              sx={{ mt: 1 }}
            >
              SUPER CHEAP PRICE
            </Typography>
            <Typography
              sx={{
                color: "text.primary",
                textDecoration: "none",
                fontSize: 18,
                mt: 2,
              }}
            >
              Earn 20% Back in Rewards
            </Typography>
          </Box>
          <Button
            component={Link}
            href=""
            variant="contained"
            color="primary"
            size="small"
            sx={{ alignSelf: "flex-start", mt: 2 }}
          >
            Shop Now
          </Button>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.5s ease-in-out",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        >
          <Image
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            src={laptop}
            alt="Laptop"
          />
        </Box>
      </Stack>
    </Card>
  );
}
