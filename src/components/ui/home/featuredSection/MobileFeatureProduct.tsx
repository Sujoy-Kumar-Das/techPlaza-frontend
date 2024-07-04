import mobile from "@/assets/mobile.png";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function MobileFeature() {
  return (
    <Card
      sx={{
        bgcolor: "#EDECF1",
        padding: "20px",
        height: "270px",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ flexGrow: 1 }}
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
            <Typography
              sx={{
                bgcolor: "primary.main",
                padding: "3px 0px",
                textAlign: "center",
                borderRadius: "30px",
                color: "background.default",
              }}
              component="h1"
              fontSize={12}
            >
              BEST DEALS
            </Typography>
            <Typography
              color="text.primary"
              component="h1"
              variant="body1"
              sx={{ marginTop: 2 }}
            >
              Buy New Phone
            </Typography>
            <Typography
              sx={{
                color: "text.primary",
                textDecoration: "none",
                fontSize: 18,
                mt: 2,
              }}
            >
              Starts From $100
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
            src={mobile}
            alt="Mobile Phone"
          />
        </Box>
      </Stack>
    </Card>
  );
}
