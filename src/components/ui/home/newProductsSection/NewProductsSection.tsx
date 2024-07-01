import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

import NewProductSlider from "./NewProductSlider";
export default function NewProductsSection({ data }) {
  return (
    <Container>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography component={"h1"} variant="h5" fontWeight={"bold"}>
            New Products
          </Typography>
          <Stack
            component={Link}
            href={"/"}
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            sx={{
              textDecoration: "none",
            }}
          >
            <Typography color="text.primary" fontSize={"16px"}>
              View All
            </Typography>
            <ArrowForwardIosOutlinedIcon
              style={{ fontSize: "16px", color: "text.primary" }}
            />
          </Stack>
        </Stack>
        <Divider component={"div"} sx={{ marginTop: 3, marginBottom: 5 }} />

        <NewProductSlider data={data} />
      </Box>
    </Container>
  );
}
