import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ data }) {
  const { thumbnail, title, id } = data;

  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "350px",
        "&:hover .show-buttons .button": {
          transform: "translateX(0)",
          opacity: 1,
        },
      }}
    >
      <CardActionArea>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={thumbnail} height={200} width={200} alt={title} />
        </Box>
        <Divider
          sx={{
            height: "2px",
            background:
              "linear-gradient(to right, rgba(128, 128, 128, 0.05), rgba(128, 128, 128, 1), rgba(128, 128, 128, 0.05))",
            border: "none",
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardContent sx={{ paddingTop: 0 }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body2" color="text.secondary">
              $2000
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={"4px"}>
              <StarIcon sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                4.5
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>

      <Stack
        className="show-buttons"
        sx={{
          position: "absolute",
          top: "50%",
          right: "5%",
          transform: "translateY(-90%)",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          mt: "auto",
        }}
      >
        <IconButton
          className="button"
          sx={{
            color: "black",
            border: "1px solid #666666",
            height: "30px",
            width: "30px",
            padding: "20px",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: "translateX(100%)",
            opacity: 0,
            transitionDelay: "0.1s",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "#ffff",
              borderColor: "transparent",
              transform: "scale(1.2) translateX(0)",
              transitionDelay: "0s",
            },
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton
          className="button"
          sx={{
            color: "black",
            border: "1px solid #666666",
            height: "30px",
            width: "30px",
            padding: "20px",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: "translateX(100%)",
            opacity: 0,
            transitionDelay: "0.4s",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "#ffff",
              borderColor: "transparent",
              transform: "scale(1.2) translateX(0)",
              transitionDelay: "0s",
            },
          }}
        >
          <ShoppingCartIcon />
        </IconButton>
        <IconButton
          className="button"
          sx={{
            color: "black",
            border: "1px solid #666666",
            height: "30px",
            width: "30px",
            padding: "20px",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: "translateX(100%)",
            opacity: 0,
            transitionDelay: "0.7s",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "#ffff",
              borderColor: "transparent",
              transform: "scale(1.2) translateX(0)",
              transitionDelay: "0s",
            },
          }}
          component={Link}
          href={`/products/${id}`}
        >
          <RemoveRedEyeIcon />
        </IconButton>
      </Stack>
    </Card>
  );
}
