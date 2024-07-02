import { Container, Grid, Stack } from "@mui/material";
import GamingConsoleFeature from "./GanmiingConsoleFeature";
import LaptopFeature from "./LaptopFeature";
import MobileFeature from "./MobileFeatureProduct";

export default function FeaturedSection() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <LaptopFeature />
        </Grid>
        <Grid item xs={12} md={7}>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "nowrap" }}>
            <MobileFeature />
            <GamingConsoleFeature />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
