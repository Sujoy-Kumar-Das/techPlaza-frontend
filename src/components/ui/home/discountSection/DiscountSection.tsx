import laptopGroupe from "@/assets/laptopGroupe.png";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function DiscountSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #EDECF1, #EDECF1)",
        py: 4,
        overflow: "hidden",
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap={"wrap"}
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
                NEW COLLECTION
              </Typography>
              <Typography
                color="text.primary"
                component="h1"
                variant="h2"
                sx={{ mt: 1 }}
              >
                Up to{" "}
                <Typography component="span" variant="h2" color="primary.main">
                  30% Off
                </Typography>
              </Typography>
              <Typography
                color="text.primary"
                component="h1"
                variant="h2"
                sx={{ mt: 1 }}
              >
                Instant Discount
              </Typography>
              <Typography
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  fontSize: 18,
                  mt: 2,
                }}
              >
                Applicable on debit card, credit card, net banking.
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
              src={laptopGroupe}
              alt="Laptop"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
