import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "前端开发",
    icon: "lightbulb",
    prefix: "/frontend/",
    link:"/frontend/README.md"
  },
  {
    text: "后端开发",
    icon: "lightbulb",
    prefix: "/backend/",
    link:"/backend/README.md"
  }
]);
