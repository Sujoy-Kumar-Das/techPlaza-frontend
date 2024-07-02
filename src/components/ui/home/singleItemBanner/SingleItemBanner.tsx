import bgImage from "@/assets/banner.png";
import watchGroupeImage from "@/assets/watchGroupe.png";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function SingleItemBanner() {
  return (
    <Container>
      <Box
        sx={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          borderRadius: 2,
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          flexWrap={"wrap"}
          alignItems={"center"}
          height={"100%"}
        >
          <Box>
            <Typography
              variant="h4"
              component={"h1"}
              fontWeight={"bold"}
              color={"#ffff"}
            >
              {" "}
              SMART WATCH
            </Typography>
            <Typography
              variant="h6"
              component={"h2"}
              fontWeight={400}
              color={"#ffff"}
              my={1}
            >
              {" "}
              Various designs and brands{" "}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              size="small"
              href=""
            >
              View All
            </Button>
          </Box>
          <Box
            sx={{
              transition: "transform 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <Image src={watchGroupeImage} alt="" />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
