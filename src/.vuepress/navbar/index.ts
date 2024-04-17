import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "前端开发",
    icon: "frontend",
    prefix: "/frontend/",
    link: "/frontend/README.md",
  },
  {
    text: "后端开发",
    icon: "backend",
    prefix: "/backend/",
    link: "/backend/README.md",
  },
  {
    text: "关于我",
    icon: "about-me",
    prefix: "/intro/",
    link: "/intro.md",
  },
]);
