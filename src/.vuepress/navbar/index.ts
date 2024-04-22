import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    link: "/",
    icon: "home",
  },
  {
    text: "日志",
    icon: "weekly",
    prefix: "/weekly/",
    link: "/weekly/README.md",
  },
  {
    text: "读书",
    icon: "read",
    prefix: "/read/",
    link: "/read/README.md",
  },
  {
    text: "技术分享",
    icon: "develop",
    children: [
      {
        text: "前端",
        icon: "frontend",
        prefix: "/frontend/",
        link: "/frontend/README.md",
      },
      {
        text: "后端",
        icon: "backend",
        prefix: "/backend/",
        link: "/backend/README.md",
      },
    ],
  },
  {
    text:'更多',
    icon:'more',
    children:[
      {
        text: "工具",
        icon: "tool",
        prefix: "/tool/",
        link: "/tool/README.md",
      },
      {
        text: "经验",
        icon: "experience",
        prefix: "/experience/",
        link: "/experience/README.md",
      },
      {
        text: "随笔",
        icon: "essay",
        prefix: "/essay/",
        link: "/essay/README.md",
      },
      {
        text: "AI",
        icon: "ai",
        prefix: "/ai/",
        link: "/ai/README.md",
      },
    ]
  },
  {
    text: "关于我",
    icon: "about-me",
    prefix: "/intro/",
    link: "/intro.md",
  },
]);
