import dashboardItems from "@/components/ui/dashboard/dashboardNavItems/DashboardItem";
import { IDashboardItem } from "@/types";

const generateDashboardItems = (role: string) => {
  return dashboardItems.reduce(
    (acc: IDashboardItem[], item: IDashboardItem) => {
      if (item.access === role || item.access === "all") {
        acc.push({ text: item.text, link: item.link, icon: item.icon });
      }
      return acc;
    },
    []
  );
};

export default generateDashboardItems;
