import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/frontend/": [
    {
      text: "ES6",
      link: "/frontend/es6/",
      prefix: "/frontend/es6/",
      collapsible: true,
      children: [],
    },
    {
      text: "前端工程化",
      link: "/frontend/fonttend-construct/",
      prefix: "/frontend/fonttend-construct/",
      collapsible: true,
      children: ["前端资源自动打包上传服务器.md", "verdaccio部署和使用.md"],
    },
    {
      text: "前端方案",
      link: "/frontend/scheme/",
      prefix: "/frontend/scheme/",
      collapsible: true,
      children: ["JSON.parse实现.md"],
    },
  ],
  "/backend/": "structure",
  "/tool/": [
    {
      text: "vpn使用流程",
      link: "/tool/vpn",
    },
  ],
  essay: ["驾校选择.md"],
});
