import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { navItemsArray } from "./navItemsArray";
import NavUser from "./navUser/NavUser";
export default function NavBar() {
  const navItems = (
    <>
      {navItemsArray.map((item) => (
        <ListItem key={item.id} disablePadding>
          <Link href={item.link} style={{ textDecoration: "none" }}>
            {item.title}
          </Link>
        </ListItem>
      ))}
    </>
  );
  return (
    <Box>
      <Container>
        <Stack py={2} direction={"row"} justifyContent={"space-between"}>
          <Box sx={{ display: "flex" }}>
            <Typography component={"h1"} variant="h4" fontWeight={"bold"}>
              Tech
            </Typography>
            <Typography
              component={"h1"}
              variant="h4"
              fontWeight={"bold"}
              color={"primary"}
            >
              Plaza
            </Typography>
          </Box>

          <List sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            {navItems}
          </List>

          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <IconButton size="small" sx={{ ml: 2 }}>
              <Box
                sx={{
                  color: "text.primary",
                  height: 32,
                  width: 32,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SearchIcon />
              </Box>
            </IconButton>
            <IconButton size="small" sx={{ ml: 2 }}>
              <Box
                sx={{
                  color: "text.primary",
                  height: 32,
                  width: 32,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ShoppingCartIcon />
              </Box>
            </IconButton>

            <NavUser />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
