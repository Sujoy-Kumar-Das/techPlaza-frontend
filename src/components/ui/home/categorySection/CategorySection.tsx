import { Box, Container, Stack } from "@mui/material";
import CategoryCard from "../../card/CategoryCard";

export default async function CategorySection({ data }) {
  return (
    <Box py={8}>
      <Container>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={{ md: 2, sm: 4 }}
        >
          {data.map((item, index) => (
            <CategoryCard key={index} data={item} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
