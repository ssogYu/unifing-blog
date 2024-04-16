import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/frontend/": [
    {
      text: "SSH",
      link: "/frontend/ssh/",
      prefix: "/frontend/ssh/",
      collapsible: true,
      children: [],
    },
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
      children: ["前端资源自动打包上传服务器.md"],
    },
  ],
  "/backend/": "structure",
});
