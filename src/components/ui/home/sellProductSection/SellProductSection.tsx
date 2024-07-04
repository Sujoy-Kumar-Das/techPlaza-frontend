import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import SellingProductSlider from "./SellingProductSlider";
export default function SellProductSection({ data }) {
  return (
    <Container>
      <Grid
        container
        sx={{
          background:
            "linear-gradient(135deg, #2779F5 20%, #6BA4F5 50%, #4C8CFA 80%)",
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Stack sx={{ textAlign: "center" }}>
              <Typography
                color="background.default"
                variant="h6"
                fontWeight={"bold"}
                component={"h1"}
              >
                Products On Sell
              </Typography>
              <Typography
                component={Link}
                href={"/"}
                sx={{
                  color: "background.paper",
                  textDecoration: "none",
                  fontSize: 18,
                }}
                pb={5}
              >
                Shop Now
              </Typography>
            </Stack>
            <Stack
              component={Link}
              href={"/"}
              direction={"row"}
              spacing={1}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                textDecoration: "none",
                color: "background.default",
              }}
            >
              <Typography color="background.default" fontSize={"16px"}>
                View All
              </Typography>
              <ArrowForwardIosOutlinedIcon
                style={{ fontSize: "16px", color: "text.primary" }}
              />
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={10}>
          <SellingProductSlider data={data} />
        </Grid>
      </Grid>
    </Container>
  );
}
