import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function SellingProductCard({ data }) {
  const { imageUrl, name } = data;

  return (
    <Card
      sx={{
        position: "relative",
        "&:hover .show-buttons .button": {
          transform: "translateX(0)",
          opacity: 1,
        },
      }}
    >
      <CardActionArea>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={imageUrl} height={200} width={200} alt={name} />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body2" color="text.secondary">
              $2000
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={"4px"}>
              <Typography variant="body2" color="text.secondary">
                <StarIcon />
              </Typography>
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
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
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
        >
          <RemoveRedEyeIcon />
        </IconButton>
      </Stack>
    </Card>
  );
}
