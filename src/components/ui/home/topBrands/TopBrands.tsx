import { Container, Divider, Stack, Typography } from "@mui/material";
import TopBrandCard from "../../card/TopBrandCard";

export default function TopBrandSection({ data }) {
  return (
    <Container>
      <Typography component={"h1"} variant="h5" fontWeight={"bold"}>
        Top Brands
      </Typography>

      <Divider component={"div"} sx={{ marginTop: 3, marginBottom: 5 }} />
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {data.map((item) => (
          <TopBrandCard key={item._id} imageUrl={item.imageUrl} />
        ))}
      </Stack>
    </Container>
  );
}
