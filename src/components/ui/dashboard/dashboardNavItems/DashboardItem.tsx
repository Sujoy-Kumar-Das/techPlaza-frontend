import { IDashboardItem } from "@/types";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaidIcon from "@mui/icons-material/Paid";
import SecurityIcon from "@mui/icons-material/Security";
const dashboardItems: IDashboardItem[] = [
  {
    text: "Manage Account",
    link: "/dashboard",
    icon: <ManageAccountsIcon />,
    access: "all",
  },
  {
    text: "Payment & Integrations",
    link: "/dashboard/user/payments",
    icon: <PaidIcon />,
    access: "user",
  },
  {
    text: "Orders",
    link: "/dashboard/user/orders",
    icon: <LocalMallOutlinedIcon />,
    access: "user",
  },
  {
    text: "Wish List",
    link: "/dashboard/user/wish-list",
    icon: <FavoriteIcon />,
    access: "user",
  },
  {
    text: "Discounts",
    link: "/dashboard/user/discount",
    icon: <CardGiftcardIcon />,
    access: "user",
  },
  {
    text: "Security & Access",
    link: "/dashboard/user/security",
    icon: <SecurityIcon />,
    access: "user",
  },
  {
    text: "Notification",
    link: "/dashboard/user/notification",
    icon: <NotificationsIcon />,
    access: "user",
  },
  {
    text: "Contact Us",
    link: "/contact-us",
    icon: <ContactEmergencyIcon />,
    access: "user",
  },
];

export default dashboardItems;
