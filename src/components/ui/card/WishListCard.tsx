import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function WishListCard({ data }) {
  const { thumbnail, title, id } = data;

  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: 200,
          position: "relative",
        }}
      >
        <Image src={thumbnail} layout="fill" objectFit="contain" alt={title} />
      </Box>
      <Divider
        sx={{
          height: "2px",
          background:
            "linear-gradient(to right, rgba(128, 128, 128, 0.05), rgba(128, 128, 128, 1), rgba(128, 128, 128, 0.05))",
          border: "none",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          size="small"
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <ShoppingCartIcon />
          <Typography>Add To Cart</Typography>
        </Button>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
