import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ data }) {
  const { imageUrl, name } = data;
  return (
    <Card
      component="div"
      sx={{
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
        "&:hover .show-button": {
          opacity: 1,
          transform: "translateY(0)",
        },
        "&:hover .hide-text": {
          opacity: 0,
          transform: "translateY(-20px)",
        },
      }}
    >
      <Image src={imageUrl} height={200} width={200} alt={name} />

      <Box sx={{ position: "relative", height: "100px" }}>
        <CardContent
          sx={{
            transition: "opacity 0.3s, transform 0.3s",
            opacity: 1,
            transform: "translateY(0)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
          className="hide-text"
        >
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            transition: "opacity 0.3s, transform 0.3s",
            opacity: 0,
            transform: "translateY(20px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
          className="show-button"
        >
          <Button
            size="small"
            variant="contained"
            color="primary"
            component={Link}
            href=""
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
              boxShadow: "none",
            }}
          >
            Show Products
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
}
