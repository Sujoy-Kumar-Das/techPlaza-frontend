import { Button, Stack } from "@mui/material";

export default function FilterCategory() {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
    >
      <Button variant="text" size="small" color="inherit">
        Laptop
      </Button>
      <Button variant="text" size="small" color="inherit">
        Laptop
      </Button>
      <Button variant="text" size="small" color="inherit">
        Laptop
      </Button>
      <Button variant="text" size="small" color="inherit">
        Laptop
      </Button>
      <Button variant="text" size="small" color="inherit">
        Laptop
      </Button>
    </Stack>
  );
}
