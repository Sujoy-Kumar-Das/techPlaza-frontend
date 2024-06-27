import { Box, Button, TextField } from "@mui/material";

export default function SubscribeNewsLetter() {
  return (
    <Box sx={{ display: "flex", gap: "2px", mb: 2 }}>
      <TextField
        placeholder="Subscribe to Newsletter"
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          input: { color: "white" },
        }}
      />
      <Button size="small">Subscribe</Button>
    </Box>
  );
}
