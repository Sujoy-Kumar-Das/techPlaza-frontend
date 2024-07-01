import { Box, Button, Stack, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function HomeSliderCard({
  item,
  index,
  sliderIndex,
}: {
  item: any;
  index: number;
  sliderIndex: number;
}) {
  const controls = useAnimation();

  useEffect(() => {
    if (sliderIndex === index) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [sliderIndex, index, controls]);

  return (
    <>
      <Stack
        direction={{ md: "row", sm: "column" }}
        justifyContent={{ md: "center", sm: "start" }}
        alignItems={"center"}
        height={"80vh"}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          sx={{ width: { md: "50%", sm: "100%" } }}
        >
          <Typography
            fontWeight={"bold"}
            variant="h3"
            component={"h1"}
            color={"primary"}
            mb={1}
          >
            {item.name}
          </Typography>
          <Typography
            variant="h5"
            fontWeight={"light"}
            width={{ md: "80%", sm: "100%" }}
          >
            {item.description}
          </Typography>
          <Stack direction={"row"} spacing={2} mt={3}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              href="/"
            >
              Shop Now
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              href="/"
            >
              Explore More
            </Button>
          </Stack>
        </Box>
        <Box
          component={motion.div}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 1.3 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Image
              src={item.imageUrl}
              width={500}
              height={500}
              style={{ height: "auto", width: "auto" }}
              alt={`${item.product_name} image`}
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
