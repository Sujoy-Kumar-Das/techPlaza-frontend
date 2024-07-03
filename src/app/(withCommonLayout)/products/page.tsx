import CustomPagination from "@/components/shared/customPagination/CustomPagination";
import ProductCard from "@/components/ui/card/ProductCard";
import { Box, Container, Grid, Stack } from "@mui/material";
import FilterProducts from "./Components/FilterProducts";

export default async function ProductsPage() {
  const url = `https://dummyjson.com/products`;

  const res = await fetch(url, {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();

  return (
    <Box>
      <Container sx={{ py: 0 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              height: "100vh",
              padding: "20px",
              position: "sticky",
              top: "0",
              bottom: 0,
            }}
          >
            <FilterProducts />
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {data?.products?.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={3}>
                  <ProductCard data={item} />
                </Grid>
              ))}
            </Grid>
            <Stack direction={"row"} justifyContent={"center"} my={5}>
              <CustomPagination />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
