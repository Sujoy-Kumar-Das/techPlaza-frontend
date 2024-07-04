import generateDashboardItems from "@/utils/generateDashboardItems";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
// generate items
const items = generateDashboardItems("user");

export const DashboardDrawer = (
  <Box>
    <Box
      component={Link}
      href={"/"}
      sx={{ display: "flex", justifyContent: "center", textDecoration: "none" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
        <Typography
          component={"h1"}
          variant="h4"
          fontWeight={"bold"}
          color={"text.primary"}
        >
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
    </Box>
    <Divider />
    <List>
      {items.map((item) => (
        <ListItem
          component={Link}
          href={item.link}
          key={item.link}
          disablePadding
          sx={{ color: "text.secondary" }}
        >
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    {/* <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List> */}
  </Box>
);
