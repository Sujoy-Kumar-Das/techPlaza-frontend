"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Divider } from "@mui/material";
import FilterCategory from "./FilterCategory";
import FilterByPrice from "./FilterByPrice";

export default function FilterProducts() {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearch = () => {
    // Handle search logic
    console.log("Search initiated with category:", category);
  };
  return (
    <>
      <SearchBar />
      <Divider sx={{ my: 2 }} />
      <FilterCategory />
      <Divider sx={{ my: 2 }} />
      <FilterByPrice />
    </>
  );
}
