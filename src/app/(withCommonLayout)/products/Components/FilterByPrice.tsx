// PriceFilter.js
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

const FilterByPrice = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <Box>
      <Typography variant="h6">Filter by Price High To Low</Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          margin: "auto",
        }}
      >
        <TextField
          label="Min Price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Max Price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          variant="outlined"
          size="small"
        />
      </Box>
    </Box>
  );
};

export default FilterByPrice;
